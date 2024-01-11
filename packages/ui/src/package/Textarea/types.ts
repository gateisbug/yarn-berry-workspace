import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

type HTMLTextAreaAttibute = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export interface TextareaProps extends Omit<HTMLTextAreaAttibute, 'value'> {
  value?: string;
  maxHeight?: number;
  autoResize?: boolean;
}
