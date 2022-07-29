export type PokemonTypesType =
  | "Fire"
  | "Flying"
  | "Ice"
  | "Psychic"
  | "Water"
  | "Ground"
  | "Rock"
  | "Electric"
  | "Grass"
  | "Poison"
  | "Bug"
  | "Fighting"
  | "Dragon"
  | "Ghost"
  | "Dark"
  | "Normal";

export interface Pokemon {
  id: number;
  num: string;
  name: string;
  img: string;
  type: PokemonTypesType[];
  height: string;
  weight: string;
  weaknesses: string[];
}