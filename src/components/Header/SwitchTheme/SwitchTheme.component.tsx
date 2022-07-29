import { useSelector, useDispatch } from "react-redux";
import { toggleDarkTheme } from "../../../redux";
import { ThemeInitialStateType } from "../../../redux";
import {
  Container,
  Input,
  Label,
  Slider,
  DarkThemeIcon,
  LightThemeIcon,
} from "./SwitchTheme.style";

const SwitchTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector(
    (state: { theme: ThemeInitialStateType }) => state.theme.isDarkTheme
  );

  return (
    <Container>
      <Input
        id="theme"
        type="checkbox"
        checked={theme}
        onChange={() => dispatch(toggleDarkTheme())}
      />
      <Label htmlFor="theme">
        <DarkThemeIcon size={19} type={"Dark"} />
        <LightThemeIcon size={19} type={"Light"} />
        <Slider />
      </Label>
    </Container>
  );
};

export default SwitchTheme;
