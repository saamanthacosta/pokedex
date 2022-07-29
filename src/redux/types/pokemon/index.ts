import { Pokemon } from "../../../models";

export type DispatchPokemonType = (args: PokemonActionType) => PokemonActionType;

export type PokemonInitialStateType = {
  list: [];
}

export type PokemonActionType = {
  type: "listPokemon";
  list: Pokemon[];
};
