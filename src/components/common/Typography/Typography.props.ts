import { HTMLAttributes, ElementType, CSSProperties } from 'react';

export interface Props extends HTMLAttributes<HTMLParagraphElement> {
  as?: ElementType;
  forwardedAs?: ElementType;
  fontColor?: CSSProperties['color'];
  fontFamily?: CSSProperties['fontFamily'];
  fontWeight?: CSSProperties['fontWeight'];
  textAlign?: CSSProperties['textAlign'];
  textTransform?: CSSProperties['textTransform'];
  fullWidth?: boolean;
}
