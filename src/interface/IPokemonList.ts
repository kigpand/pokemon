import { IAbility } from './IAbility';
import { ISpecies } from './ISpecies';
import { IType } from './IType';

export interface IPokemonList {
    abilities: IAbility[];
    genus: string,
    height: number,
    id: number,
    imgUrl: string;
    species: ISpecies;
    states: string;
    weight: number;
    stats: IStat[];
    types: IType[];
}

interface IStat {
    name: string;
    stat: number;
}