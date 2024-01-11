import { DetailedHTMLProps, HTMLAttributes } from 'react';

type HTMLInputAttribute = DetailedHTMLProps<
  HTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface RadioProps
  extends Omit<
    HTMLInputAttribute,
    'type' | 'name' | 'disabled' | 'checked' | 'value'
  > {
  name?: string;
  disabled?: boolean;
  checked?: boolean;
  value?: string;
}
