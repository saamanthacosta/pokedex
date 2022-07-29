import { CSSProperties, HTMLAttributes } from "react";
import { PokemonTypesType } from "../../../models";

export interface PokemonTypeLayout {
  icon: JSX.Element | undefined;
  backgroundColor: CSSProperties["backgroundColor"];
  fontColor: CSSProperties["color"];
}

export interface PokemonTypesLayout {
  Fire: PokemonTypeLayout;
  Flying: PokemonTypeLayout;
  Ice: PokemonTypeLayout;
  Psychic: PokemonTypeLayout;
  Water: PokemonTypeLayout;
  Ground: PokemonTypeLayout;
  Rock: PokemonTypeLayout;
  Electric: PokemonTypeLayout;
  Grass: PokemonTypeLayout;
  Poison: PokemonTypeLayout;
  Bug: PokemonTypeLayout;
  Fighting: PokemonTypeLayout;
  Dragon: PokemonTypeLayout;
  Ghost: PokemonTypeLayout;
  Dark: PokemonTypeLayout;
  Normal: PokemonTypeLayout;
}

export interface Props extends HTMLAttributes<HTMLParagraphElement> {
  types: PokemonTypesType[];
}
