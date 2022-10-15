import axios from 'axios';

export async function getPokemon() {
    try {
        const item = await axios.get('http://localhost:4000/pokemon');
        return item.data;
    } catch(e) {
        console.error(e);
        return [];
    }
}

export async function getTypes(type: string): Promise<any[]> {
    try {
        const data = await axios.get(`http://localhost:4000/types/${type}`);
        return data.data;
    } catch(e) {
        console.error(e);
        return [];
    }
}