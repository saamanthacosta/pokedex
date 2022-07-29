import { Props } from "./Card.props";
import { StyledCard } from "./Card.style";

const Card = (props: Props) => {
  const { children, ...rest } = props;
  return <StyledCard {...rest}>{children}</StyledCard>;
};

export default Card;
