import styled from "styled-components";
import { Props } from "./Card.props";

const styledCardProps: (keyof Props)[] = [
  "boxShadow",
  "backgroundColor",
  "borderRadius",
  "width",
  "height",
  "margins",
  "paddings",
];

export const StyledCard = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !styledCardProps.includes(prop as keyof Props) && defaultValidatorFn(prop),
})<Props>`
  box-sizing: border-box;
  position: relative;

  width: ${({ width }) => width ?? "20em"};
  height: ${({ height }) => height};
  margin: ${({ margins }) => margins};
  padding: ${({ paddings }) => paddings};

  border-radius: ${({ borderRadius }) => borderRadius};
  box-shadow: ${({ boxShadow }) =>
    boxShadow};
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ?? theme.palette.backgroundDark};
`;
