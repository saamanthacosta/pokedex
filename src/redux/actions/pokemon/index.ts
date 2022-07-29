import { Pokemon } from "../../../models";
import PokemonService from "../../../services/PokemonService";
import { DispatchPokemonType } from "../../types";

const filterPokemons = (list: Pokemon[], filter: string): Pokemon[] => {
  const isNumber = Number.isInteger(Number(filter)) && Number(filter) > 0;

  const filteredList = list.filter((pokemon) => {
    if (isNumber) return pokemon.num.includes(filter);
    const pokemonName = pokemon.name.toLowerCase();
    return pokemonName.includes(filter.toLowerCase());
  });

  return filteredList;
};

export const listPokemons =
  (filter: string | undefined = undefined) =>
  async (dispatch: DispatchPokemonType) => {
    try {
      const response = await PokemonService.listAll();
      const listOfPokemons =
        typeof filter !== "undefined"
          ? filterPokemons(response.data.pokemon, filter)
          : response.data.pokemon;

      dispatch({
        type: "listPokemon",
        list: listOfPokemons,
      });
      return Promise.resolve(listOfPokemons);
    } catch (err) {
      return Promise.reject(err);
    }
  };
