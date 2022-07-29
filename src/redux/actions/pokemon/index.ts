import PokemonService from "../../../services/PokemonService";
import { DispatchPokemonType } from "../../types";


export const listPokemons = () => async (dispatch: DispatchPokemonType) => {
  try {
    const response = await PokemonService.listAll();
    const listOfPokemons = response.data.pokemon;

    dispatch({
      type: "listPokemon",
      list: listOfPokemons,
    });
    return Promise.resolve(listOfPokemons);
  } catch (err) {
    return Promise.reject(err);
  }
};
