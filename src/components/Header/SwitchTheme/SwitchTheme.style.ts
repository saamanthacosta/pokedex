import styled from "styled-components";
import { Icon } from "../../common";

export const Container = styled.div`
  position: absolute;
  right: 6em;
`;

export const Slider = styled.div``;

export const LightThemeIcon = styled(Icon)``;
export const DarkThemeIcon = styled(Icon)``;

export const Label = styled.label`
  display: flex;
  width: 4em;
  height: 2.2em;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.4em;
  background: ${({ theme }) => theme.palette.backgroundDark};
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  transition: 0.8s;

  & ${Slider} {
    position: absolute;
    display: block;
    width: 1.565em;
    height: 1.565em;
    left: 5px;
    background: ${({ theme }) => theme.palette.navBar};
    border-radius: 50%;
  }

  & ${LightThemeIcon} {
    color: #202020;
    opacity: 1;
  }

  & ${DarkThemeIcon} {
    color: #ededed;
    opacity: 0;
  }
`;

export const Input = styled.input`
  display: none;

  &:checked + ${Label} {
    background: ${({ theme }) => theme.palette.backgroundDark};
  }
  &:checked + ${Label} ${LightThemeIcon} {
    transform: translateX(-2.6em) rotate(160deg);
    opacity: 0;
  }
  &:checked + ${Label} ${DarkThemeIcon} {
    transform: translateX(0) rotate(250deg);
    opacity: 1;
  }
  &:checked + ${Label} ${Slider} {
    background: ${({ theme }) => theme.palette.navBar};
    transform: translateX(2.5em) rotate(0);
  }
`;
