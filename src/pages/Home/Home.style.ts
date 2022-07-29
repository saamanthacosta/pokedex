import styled from "styled-components";
import { devices } from "../../styles";

export const StyledHome = styled.div`
  font-size: 11px;
  background-color: ${({ theme }) => theme.palette.background};
  @media ${devices.mobile} {
    font-size: 12.5px;
  }
  @media ${devices.laptop} {
    font-size: 13.5px;
  }
`;

export const PokemonsList = styled.div`
  padding-top: 13em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;
