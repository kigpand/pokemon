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

export function convertOnePoke(item: IPrevList) {
    const abilities = item.abilities.split(',');
    const types = getTypeConvertData(item.pokeTypes);
    const stats = getStatList(item.states);
    return { 
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
    };
}