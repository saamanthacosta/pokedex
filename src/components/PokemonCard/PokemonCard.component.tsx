import { useGetTextByLanguage } from "../../hooks";
import PokemonTypes from "./PokemonTypes";
import { StyledCard, Image, Name, Number } from "./PokemonCard.style";
import { Props } from "./PokemonCard.props";

function PokemonCard(props: Props) {
  const { pokemon, ...rest } = props;
  const { img, num, name, type } = pokemon;

  const getTextByLanguage = useGetTextByLanguage();

  const types = type.toString().replace(",", ", ");

  return (
    <StyledCard
      {...rest}
      tabIndex={0}
      aria-label={getTextByLanguage("card:pokemon", {
        pokemon: name,
        number: num,
        types,
      })}
    >
      <Image src={img} alt={name} tabIndex={0} />
      <Number
        forwardedAs="h4"
        fontWeight={"700"}
        tabIndex={0}
        aria-labelledby={num}
      >
        #{num}
      </Number>
      <Name forwardedAs="h5" tabIndex={0} aria-labelledby={name}>
        {name}
      </Name>
      <PokemonTypes types={type} />
    </StyledCard>
  );
}

export default PokemonCard;
