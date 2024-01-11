import { DetailedHTMLProps, HTMLAttributes } from 'react';

type HTMLDivAttribute = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface ScrollViewProps extends HTMLDivAttribute {}
