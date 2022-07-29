import {
  StyledCard,
  Image,
  Name,
  Number,
} from "./PokemonCard.style";
import { Props } from "./PokemonCard.props";
import PokemonTypes from "./PokemonTypes";

function PokemonCard(props: Props) {
  const { pokemon, ...rest } = props;
  const { img, num, name, type } = pokemon;

  return (
    <StyledCard {...rest}>
      <Image src={img} alt={name} />
      <Number forwardedAs="h4" fontWeight={"700"}>
        #{num}
      </Number>
      <Name forwardedAs="h5">{name}</Name>
      <PokemonTypes types={type} />
    </StyledCard>
  );
}

export default PokemonCard;
