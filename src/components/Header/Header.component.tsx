import { ChangeEvent } from "react";
import { connect } from "react-redux";
import { useGetTextByLanguage } from "../../hooks";
import { listPokemons } from "../../redux";
import SwitchTheme from "./SwitchTheme";
import { StyledHeader, Container, Title, Filter } from "./Header.style";
import { Props } from "./Header.props";

const Header = (props: Props) => {
  const { listPokemons: listPokemonsAction } = props;

  const getTextByLanguage = useGetTextByLanguage();

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    listPokemonsAction(value);
  }

  return (
    <StyledHeader>
      <Container>
        <Title>{getTextByLanguage("header:name")}</Title>
        <SwitchTheme />
      </Container>
      <Filter
        type="text"
        placeholder={getTextByLanguage("header-filter:placeholder")}
        onChange={(event) => handleOnChange(event)}
      />
    </StyledHeader>
  );
};

export default connect(null, { listPokemons })(Header);
