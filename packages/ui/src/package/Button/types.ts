import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type HTMLButtonAttrbute = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonVarientType = 'fill' | 'line' | 'text';

export interface ButtonProps extends HTMLButtonAttrbute {
  varient?: ButtonVarientType;
  fullWidth?: boolean;
}
