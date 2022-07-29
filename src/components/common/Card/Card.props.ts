import { HTMLAttributes, CSSProperties, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLParagraphElement> {
  children?: string | ReactNode | ReactNode[];
  boxShadow?: string;
  backgroundColor?: CSSProperties['backgroundColor'];
  borderRadius?: CSSProperties['borderRadius'];
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  margins?: CSSProperties['margin'];
  paddings?: CSSProperties['padding'];
}
