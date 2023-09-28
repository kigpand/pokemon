export interface IPokemonList {
  abilities: string[];
  genus: string;
  height: number;
  id: number;
  name: string;
  imageUrl: string;
  stats: IStat[];
  weight: number;
  flavor: string;
  generate: string;
  types: string[] | null;
}

interface IStat {
  name: string;
  stat: number;
}
