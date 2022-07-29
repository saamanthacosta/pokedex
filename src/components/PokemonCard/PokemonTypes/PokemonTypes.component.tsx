import { Props, PokemonTypesLayout } from "./PokemonTypes.props";
import { Types, Type, TextType } from "./PokemonTypes.style";
import { Icon } from "../../common";

function PokemonTypes(props: Props) {
  const { types, ...rest } = props;

  const color = {
    light: "#ededed",
    dark: "#202020",
  };

  const pokemonTypes: PokemonTypesLayout = {
    Fire: {
      icon: <Icon type={"Fire"} size={18} style={{ color: color.dark }} />,
      backgroundColor: "#FD8C49",
      fontColor: color.dark,
    },
    Flying: {
      icon: <Icon type={"Flying"} size={16} style={{ color: color.dark }} />,
      backgroundColor: "#F76973",
      fontColor: color.dark,
    },
    Ice: {
      icon: <Icon type={"Ice"} size={18} style={{ color: color.dark }} />,
      backgroundColor: "#bae2fb",
      fontColor: color.dark,
    },
    Psychic: {
      icon: <Icon type={"Psychic"} size={18} style={{ color: color.light }} />,
      backgroundColor: "#874db3",
      fontColor: color.light,
    },
    Water: {
      icon: <Icon type={"Water"} size={18} style={{ color: color.light }} />,
      backgroundColor: "#2a78a5",
      fontColor: color.light,
    },
    Ground: {
      icon: <Icon type={"Ground"} size={18} style={{ color: color.light }} />,
      backgroundColor: "#3d7c41",
      fontColor: color.light,
    },
    Rock: {
      icon: <Icon type={"Rock"} size={16} style={{ color: color.light }} />,
      backgroundColor: "#513215",
      fontColor: color.light,
    },
    Electric: {
      icon: <Icon type={"Electric"} size={16} style={{ color: color.dark }} />,
      backgroundColor: "#F0ff57",
      fontColor: color.dark,
    },
    Grass: {
      icon: <Icon type={"Grass"} size={16} style={{ color: color.light }} />,
      backgroundColor: "#0f6415",
      fontColor: color.light,
    },
    Poison: {
      icon: <Icon type={"Poison"} size={17} style={{ color: color.light }} />,
      backgroundColor: "#5c2c81",
      fontColor: color.light,
    },
    Bug: {
      icon: <Icon type={"Bug"} size={17} style={{ color: color.dark }} />,
      backgroundColor: "#a2d55e",
      fontColor: color.dark,
    },
    Fighting: {
      icon: <Icon type={"Fighting"} size={18} style={{ color: color.light }} />,
      backgroundColor: "#950000",
      fontColor: color.light,
    },
    Dragon: {
      icon: <Icon type={"Dragon"} size={18} style={{ color: color.dark }} />,
      backgroundColor: "#ffc972",
      fontColor: color.dark,
    },
    Ghost: {
      icon: <Icon type={"Ghost"} size={17} style={{ color: color.dark }} />,
      backgroundColor: "#ffc7fc",
      fontColor: color.dark,
    },
    Dark: {
      icon: <Icon type={"Dark"} size={16} style={{ color: color.light }} />,
      backgroundColor: "#323232",
      fontColor: color.light,
    },
    Normal: {
      icon: undefined,
      backgroundColor: "#009194",
      fontColor: color.dark,
    },
  };

  return (
    <Types {...rest}>
      {types.map((type, index) => {
        const typeMapped = pokemonTypes[type];
        return (
          <Type key={index} backgroundColor={typeMapped.backgroundColor}>
            <TextType forwardedAs="span" fontColor={typeMapped.fontColor}>
              {type}
            </TextType>
            {typeMapped.icon}
          </Type>
        );
      })}
    </Types>
  );
}

export default PokemonTypes;
