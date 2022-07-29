import { useGetTextByLanguage } from "../../hooks";
import { StyledHeader, Container, Title } from "./Header.style";

const Header = () => {
  const getTextByLanguage = useGetTextByLanguage();

  return (
    <StyledHeader>
      <Container>
        <Title>{getTextByLanguage("header:name")}</Title>
      </Container>
    </StyledHeader>
  );
};

export default Header;
