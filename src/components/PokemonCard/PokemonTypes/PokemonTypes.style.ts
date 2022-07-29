import { CSSProperties } from "react";
import styled from "styled-components";
import { Typography } from "../../common";

export const Types = styled.div`
  display: flex;
  margin: 0.7em 0.9em 1em;
`;

interface TypeProps {
  backgroundColor: CSSProperties["backgroundColor"];
}

const typeProps: (keyof TypeProps)[] = ["backgroundColor"];
export const Type = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !typeProps.includes(prop as keyof TypeProps) && defaultValidatorFn(prop),
})<TypeProps>`
  display: flex;
  padding: 0.6em 1em;
  margin-inline-start: 0.6em;
  margin-inline-end: 0.5em;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ?? "transparent"};
  border-radius: 0.5em;
`;

export const TextType = styled(Typography)`
  font-size: 1.2em;
  margin-inline-end: 0.3em;
`;
