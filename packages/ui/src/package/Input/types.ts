import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type HTMLInputAttribute = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type InputTypes =
  | 'text'
  | 'password'
  | 'url'
  | 'email'
  | 'date'
  | 'number';

export interface InputProps
  extends Omit<HTMLInputAttribute, 'type' | 'children'> {
  type?: InputTypes;
}
