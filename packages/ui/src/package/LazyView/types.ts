import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

type HTMLDivAttribute = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface LazyViewProps extends HTMLDivAttribute {
  fallback?: ReactNode;
}
