import { HTMLAttributes } from "react";

export interface IconType {
  [key: string]: JSX.Element;
}

export interface Props extends HTMLAttributes<SVGSVGElement> {
  type: string;
}
