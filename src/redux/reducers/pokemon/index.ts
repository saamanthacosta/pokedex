import type { PokemonInitialStateType, PokemonActionType } from "../../types";

const initialState: PokemonInitialStateType = {
  list: [],
};

const pokemonReducer = (state = initialState, action: PokemonActionType) => {
  const { type, list } = action;
  switch (type) {
    case "listPokemon": {
      return { ...state, list: [...list] };
    }
    default:
      return state;
  }
};

export default pokemonReducer;
