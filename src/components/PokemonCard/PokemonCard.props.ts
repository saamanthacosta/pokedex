import { HTMLAttributes } from "react";
import { Pokemon } from "../../models";

export interface Props extends HTMLAttributes<HTMLParagraphElement> {
  pokemon: Pokemon;
}
