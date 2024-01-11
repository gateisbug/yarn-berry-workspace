import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

type HTMLDivAttribute = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type SetStateType<T> = (value: T | ((prev: T) => T)) => void;
export type StateType<T> = [T, SetStateType<T>];

export type SelectValueType = Array<string | number>;

export interface FieldProps extends HTMLDivAttribute {
  setOpen?: SetStateType<boolean>;
  placeholder?: string;
}
export interface BoxProps extends HTMLDivAttribute {
  setOpen?: SetStateType<boolean>;
}
export interface ItemProps extends HTMLDivAttribute {
  multiple?: boolean;
  value?: string | number | Array<string | number>;
  setValue?: SetStateType<SelectValueType>;
}

export interface FormProps
  extends Omit<HTMLDivAttribute, 'children' | 'onChange'> {
  onChange?: (values: Array<string | number>) => void;
  children?: (
    setOpen: SetStateType<boolean>,
    valueState: StateType<SelectValueType>,
  ) => ReactNode;
}
