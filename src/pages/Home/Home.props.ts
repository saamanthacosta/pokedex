import { HTMLAttributes } from "react";
import { Pokemon } from "../../models";

export interface Props extends HTMLAttributes<HTMLParagraphElement> {
  listOfPokemons: Pokemon[];
  listPokemons: Function;
}