import axios from 'axios';
import { convertPokeData } from './makeData';

async function getPokAPI() {
    try {
        const item = await axios.get(`http://localhost:4000/pokemon`);
        return item.data;
    } catch (e) {
        return null;
    }
}

export async function getPokeType(name: string) {
    try {
        const item = await axios.get(`http://localhost:4000/types/${name}`);
        return item.data;
    } catch (e) {
        return null;
    }
}

export async function getPokeAbility(name: string) {
    try {
        const item = await axios.get(`http://localhost:4000/ability/${name}`);
        return item.data;
    } catch (e) {
        return null;
    }
}

export async function getPokemon() {
    try {
        const list = await getPokAPI();
        return convertPokeData(list);
    } catch(e) {
        console.error(e);
        return [];
    }
}

export async function getPokeItem() {
    try {
        const item = await getPokAPI();
        return item;
    } catch(e) {
        console.error(e);
        return null;
    }
}