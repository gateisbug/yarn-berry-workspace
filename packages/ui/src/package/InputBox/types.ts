import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type HTMLLabelAttribute = DetailedHTMLProps<
  HTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;

export interface InputBoxProps extends HTMLLabelAttribute {}
