import { useGetTextByLanguage } from "../../hooks";
import SwitchTheme from "./SwitchTheme";

const Header = () => {
  const getTextByLanguage = useGetTextByLanguage();

  return (
    <StyledHeader>
      <Container>
        <Title>{getTextByLanguage("header:name")}</Title>
        <SwitchTheme />
      </Container>
    </StyledHeader>
  );
};

export default Header;
