import { DetailedHTMLProps, HTMLAttributes } from 'react';

type HTMLSpanAttribute = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

type ChipVarientType = 'fill' | 'line' | 'text';

export interface ChipProps extends HTMLSpanAttribute {
  varient?: ChipVarientType;
}
