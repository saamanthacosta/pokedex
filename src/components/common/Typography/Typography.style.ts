import styled, { css } from 'styled-components';
import { Props } from './Typography.props';

const typographyStyledProps: (keyof Props)[] = [
  'fontColor',
  'fontWeight',
  'fontFamily',
  'fullWidth',
  'textAlign',
  'textTransform',
];

export const StyledTypograhy = styled.p.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !typographyStyledProps.includes(prop as keyof Props) &&
    defaultValidatorFn(prop),
})<Props>`
  margin: 0;

  color: ${({ theme, fontColor }) => fontColor ?? theme.palette.header};

  font-weight: ${({ fontWeight }) =>
    fontWeight ?? 400};
  font-family: ${({ fontFamily }) =>
    fontFamily || 'OpenSans,sans-serif'};
  text-align: ${({ textAlign }) => textAlign};

  ${({ textTransform }) => {
    if (!textTransform) return;

    return css`
      text-transform: ${textTransform};
    `;
  }};
`;
