import { useSelector, useDispatch } from "react-redux";
import { useGetTextByLanguage } from "../../../hooks";
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

  const getTextByLanguage = useGetTextByLanguage();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") dispatch(toggleDarkTheme());
  };

  return (
    <Container
      tabIndex={0}
      onKeyDown={(event) => handleKeyDown(event)}
      aria-label={getTextByLanguage("header-switchtheme:accessibility")}
    >
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
