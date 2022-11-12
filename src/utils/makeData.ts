import axios from 'axios';

export async function addPokeList(v: any) {
    await Promise.all(v.map(async (list: any) => {
        console.log(list);
        const abilities = await makeAbilitItem(list.abilities);
        const stats = makeStatItem(list.stats);
        console.log(stats);
        // await Promise.all(list.abilities.map(async (ab: any) => {
        //     const abUrl = await axios.get(ab.ability.url);
        //     const key = abUrl.data.name;
        //     const name = abUrl.data.names.find((name: any) => name.language.name === 'ko');
        //     const flavor = abUrl.data.flavor_text_entries.find((flavor: any) => flavor.language.name === 'ko');
        // }));
    }))
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