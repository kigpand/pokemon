export interface IPokemonList {
    abilities: string;
    flavor: string;
    generate: string;
    genus: string,
    height: number,
    id: number,
    imageUrl: string;
    name: string;
    pokeTypes: string;
    states: string;
    weight: number;
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