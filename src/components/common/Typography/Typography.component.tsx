import { Props } from "./Typography.props";
import { StyledTypograhy } from "./Typography.style";

const Typography = (props: Props) => {
  const {
    as,
    forwardedAs,
    children,
    fontColor,
    fontFamily,
    textAlign,
    textTransform,
    fullWidth = true,
    ...rest
  } = props;

  return (
    <StyledTypograhy
      {...rest}
      as={forwardedAs ?? as}
      fontFamily={fontFamily}
      fontColor={fontColor}
      textAlign={textAlign}
      textTransform={textTransform}
      fullWidth={fullWidth}
    >
      {children}
    </StyledTypograhy>
  );
};

export default Typography;
