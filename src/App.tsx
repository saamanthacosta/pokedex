import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ThemeInitialStateType } from "./redux/types";
import { darkTheme, lightTheme } from "./styles";

function App() {
  const isDarkTheme = useSelector(
    (state: { theme: ThemeInitialStateType }) => state.theme.isDarkTheme
  );

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
    </ThemeProvider>
  );
}

export default App;
