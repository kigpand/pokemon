import axios from 'axios';

export async function addPokeList(v: any) {
    const list = await Promise.all(v.map(async (list: any) => {
        const id = list.id;
        const abilities = await makeAbilitItem(list.abilities);
        const species = await makeSpecieItem(list.species.url);
        const types = await makeTypeItem(list.types);
        const imgUrl = list.sprites.other.home.front_default;
        const stats = makeStatItem(list.stats);
        const weight = list.weight;
        const height = list.height;

        return { id, abilities, species, types, imgUrl, stats, weight, height }; 
    }));
    
    return list;
}
async function makeAbilitItem(abilities: any) {
    const abilitArray: any = [];
    await Promise.all(abilities.map(async (ab: any) => {
        const abUrl = await axios.get(ab.ability.url);
        const key = abUrl.data.name;
        const name = abUrl.data.names.find((name: any) => name.language.name === 'ko')?.name;
        const flavor = abUrl.data.flavor_text_entries.find((flavor: any) => flavor.language.name === 'ko')?.flavor_text;
        abilitArray.push({ key, name, flavor, isHidden: ab.is_hidden });
    }));

    return abilitArray;
}

const statName: any = {
    'hp': 'HP',
    'attack': '공격',
    'defense': '방어',
    'special-attack': '특수공격',
    'special-defense': '특수방어',
    'speed': '속도'
}

function switchName(name: string) {
    return statName[name];
}

function makeStatItem(stat: any) {
    let all: number = 0; 
    const stats = stat.map((item: any) => {
        all += item.base_stat;
        
        return { name: switchName(item.stat.name), stat: item.base_stat };
    });

    return [...stats, { name: '총합', stat: all}];
}

async function makeSpecieItem(url: string) {
    const species = await axios.get(url);
    
    const generation = species.data.generation.url.replace('https://pokeapi.co/api/v2/generation/', '')[0];
    const genus = species.data.genera.find((item: any) => item.language.name === 'ko')?.genus;
    const name = species.data.names.find((item: any) => item.language.name === 'ko')?.name;
    const flavor = [...species.data.flavor_text_entries.filter((item: any) => item.language.name === 'ko')].map((item: any) => { return item.flavor_text});
    
    return { generation, genus, name, flavor };
}

async function makeTypeItem(types: any) {
    const typeArray: any = [];
    await Promise.all(types.map(async (item: any) => {
        const type = await axios.get(item.type.url);
        const key = type.data.id;
        const doubleFrom = type.data.damage_relations.double_damage_from.map((item: any) => { return item.name });
        const doubleTo = type.data.damage_relations.double_damage_to.map((item: any) => { return item.name });
        const halfFrom = type.data.damage_relations.half_damage_from.map((item: any) => { return item.name });
        const halfTo = type.data.damage_relations.half_damage_to.map((item: any) => { return item.name });
        const noFrom = type.data.damage_relations.no_damage_from.map((item: any) => { return item.name });
        const noTo = type.data.damage_relations.no_damage_to.map((item: any) => { return item.name });
        const name = type.data.names.find((item: any) => item.language.name === 'ko')?.name;

        typeArray.push({ key, name, doubleFrom, doubleTo, halfFrom, halfTo, noFrom, noTo });
    }));

    return typeArray;
}