import axios from 'axios';

async function getPokAPI(num: number) {
    try {
        const item = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}/`);
        return item.data;
    } catch (e) {
        return null;
    }
}

export async function getPokemon(count: number) {
    try {
        const array: any[] = [];
        for (let i = count; i < count + 10; i++) {
            array.push(await getPokAPI(i));
        }
        return array;
    } catch(e) {
        console.error(e);
        return [];
    }
}

export async function getPokeItem(count: number) {
    try {
        const item = await getPokAPI(count);
        return item;
    } catch(e) {
        console.error(e);
        return null;
    }

}