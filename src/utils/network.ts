import axios from 'axios';

export async function getPokemon() {
    try {
        const item = await axios.get(`${process.env.REACT_APP_HOST}/pokemon`);
        return item.data;
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