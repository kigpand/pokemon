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
        const name = abUrl.data.names.find((name: any) => name.language.name === 'ko');
        const flavor = abUrl.data.flavor_text_entries.find((flavor: any) => flavor.language.name === 'ko');
        abilitArray.push({ key, name, flavor, isHidden: ab.is_hidden });
    }));

    return abilitArray;
}

function makeStatItem(stat: any) {
    const stats = stat.map((item: any) => {
        const obj: object = {
            [item.stat.name]: item.base_stat
        };
        return obj;
    });

    return stats;
}

async function makeSpecieItem(url: any) {
    const species = await axios.get(url);
    const genus = species.data.genera.find((item: any) => item.language.name === 'ko');
    const name = species.data.names.find((item: any) => item.language.name === 'ko');
    const flavor = species.data.flavor_text_entries.filter((item: any) => item.language.name === 'ko');
    
    return { genus, name, flavor };
}

async function makeTypeItem(types: any) {
    const typeArray: any = [];
    await Promise.all(types.map(async (item: any) => {
        const type = await axios.get(item.type.url);
        const key = type.data.name;
        const doubleFrom = type.data.damage_relations.double_damage_from.map((item: any) => { return item.name });
        const doubleTo = type.data.damage_relations.double_damage_to.map((item: any) => { return item.name });
        const halfFrom = type.data.damage_relations.half_damage_from.map((item: any) => { return item.name });
        const halfTo = type.data.damage_relations.half_damage_to.map((item: any) => { return item.name });
        const noFrom = type.data.damage_relations.no_damage_from.map((item: any) => { return item.name });
        const noTo = type.data.damage_relations.no_damage_to.map((item: any) => { return item.name });
        const name = type.data.names.find((item: any) => item.language.name === 'ko');

        typeArray.push({ key, name, doubleFrom, doubleTo, halfFrom, halfTo, noFrom, noTo });
    }));

    return typeArray;
}