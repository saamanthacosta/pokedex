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

export const Filter = styled.input`
  font-size: 1em;
  line-height: 1.5;
  border: none;
  background: #ffffff;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'><path fill='%23838D99' d='M13.22 14.63a8 8 0 1 1 1.41-1.41l4.29 4.29a1 1 0 1 1-1.41 1.41l-4.29-4.29zm-.66-2.07a6 6 0 1 0-8.49-8.49 6 6 0 0 0 8.49 8.49z'></path></svg>");
  background-repeat: no-repeat;
  background-position: 10px 10px;
  background-size: 20px 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  width: 17.3em;
  padding: 0.5em 1em 0.5em 2.5em;
  margin: 1.5em 0;
  &::placeholder {
    color: #838d99;
  }
  &&:focus {
    outline: none;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.16);
  }
`;