import { HTMLAttributes } from "react";

export interface Props extends HTMLAttributes<HTMLParagraphElement> {
  listPokemons: Function;
}