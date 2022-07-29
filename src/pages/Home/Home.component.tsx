import { useEffect } from "react";
import { connect } from "react-redux";
import { PokemonCard } from "../../components";
import { Pokemon } from "../../models";
import type { PokemonInitialStateType } from "../../redux";
import { listPokemons } from "../../redux/";
import { Props } from "./Home.props";
import { StyledHome, PokemonsList } from "./Home.style";

const Home = (props: Props) => {
  const { listOfPokemons, listPokemons: listPokemonsAction } = props;

  useEffect(() => {
    if (listOfPokemons.length === 0) listPokemonsAction();
  }, [listOfPokemons, listPokemonsAction]);

  return (
    <StyledHome>
      <PokemonsList>
        {listOfPokemons &&
          listOfPokemons.map((pokemon: Pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
      </PokemonsList>
    </StyledHome>
  );
};

const mapStateToProps = (state: { pokemon: PokemonInitialStateType }) => {
  return { listOfPokemons: state.pokemon.list };
};

export default connect(mapStateToProps, { listPokemons })(Home);
