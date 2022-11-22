import axios from 'axios';
import { IPokemonList } from '../interface/IPokemonList';
import { IPrevList } from '../interface/IPrveList';
import { getStatList, getTypeConvertData } from './convert';

export function convertPokeData(list: IPrevList[]) {
    const pokeList: IPokemonList[] = [];
    list.forEach((item: IPrevList) => {
        const abilities = item.abilities.split(',');
        const types = getTypeConvertData(item.pokeTypes);
        const stats = getStatList(item.states);
        pokeList.push({ 
            id: item.id, 
            name: item.name, 
            weight: item.weight, 
            height: item.height,
            flavor: item.flavor, 
            generate: item.generate, 
            imageUrl: item.imageUrl, 
            genus: item.genus, 
            abilities, 
            types,
            stats
        });
    });

    return pokeList;
}

export async function addPokeList(v: any) {
    const list = await Promise.all(v.map(async (list: any) => {
        const item = await getPokeData(list);
        return item;
    }));
    
    return list;
}

export async function getPokeData(item: any) {
    const id = item.id;
    const abilities = item.abilities;
    const species = null;
    const types = null;
    const imgUrl = item.sprites.other.home.front_default;
    const stats = null;
    const weight = item.weight;
    const height = item.height;

    return { id, abilities, species, types, imgUrl, stats, weight, height };
}