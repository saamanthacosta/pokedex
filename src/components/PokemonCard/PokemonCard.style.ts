import styled from "styled-components";
import { Card, Typography } from "../common";

export const StyledCard = styled(Card)`
  width: 20em;
  margin: 1.4em 1.1em;
  border-radius: 0.4em;
  box-shadow: ${({ theme }) => `0 0 1.2em 0 ${theme.palette.shadow}`};
  transform: scale(1);
  transition: transform 250ms;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  box-sizing: border-box;
  width: 100%;
  height: 17.85em;
  border-radius: 0.4em 0.4em 0px 0px;
  background-color: white;
  padding: 1em;
`;

export const Number = styled(Typography)`
  margin-inline-start: 1.1em;
  margin-top: 0.5em;
  margin-bottom: 0em;
  font-size: 1.3em;
`;

export const Name = styled(Typography)`
  color: ${({ theme }) => theme.palette.title};
  margin-inline-start: 1em;
  font-size: 1.5em;
  margin-top: 0.3em;
  margin-bottom: 0em;
`;
