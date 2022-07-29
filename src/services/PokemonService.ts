import api from "./api";

async function listAll() {
  return await api.get("/pokedex.json").then((response) => {
    return response;
  });
}

const PokemonService = {
  listAll,
};

export default PokemonService;
