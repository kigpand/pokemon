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
        // const item = await axios.get(`${process.env.REACT_APP_HOST}/pokemon`);
        for (let i = 1; i <= count; i++) {
            array.push(await getPokAPI(i));
        }
        // const array = await Promise.allSettled(count.map((num: number) => { return getPokAPI(num)}));
        // return item.data;
        return array;
    } catch(e) {
        console.error(e);
        return [];
    }
}

export async function getTypes(type: string): Promise<any[]> {
    try {
        const data = await axios.get(`${process.env.REACT_APP_HOST}/types/${type}`);
        return data.data;
    } catch(e) {
        console.error(e);
        return [];
    }
}