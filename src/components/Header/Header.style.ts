import styled from "styled-components";
import { Typography } from "../common";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.navBar};
  padding: 2em;
  height: 5em;
  z-index: 1;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled(Typography)`
  font-size: 2em;
  color: ${({ theme }) => theme.palette.pokedex};
`;
