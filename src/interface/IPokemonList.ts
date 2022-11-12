export interface IPokemonList {
    abilities: IAbility[];
    genus: string,
    height: number,
    id: number,
    imgUrl: string;
    species: ISpecies;
    states: string;
    weight: number;
    stats: any;
    types: ITypeKoData[];
}

interface IAbility {
    flavor: string;
    isHidden: boolean;
    key: string;
    name: string;
}

interface ISpecies {
    flavor: string[];
    genus: string;
    name: string;
    generation: string;
}

interface IStat {
    name: string;
    stat: number;
}

export interface ITypeKoData {
    id: number;
    name: string;
    doubleDamegeFrom: string[] | null;
    doubleDamegeTo: string[] | null;
    halfDamegeFrom: string[] | null;
    halfDamegeTo: string[] | null;
    noDamegeFrom: string[] | null;
    noDamegeTo: string[] | null;
}