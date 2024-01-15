import styles from './style.module.css';
import { combineClass } from '@untitled/util';
import { InputBoxProps } from './types';

export default function InputBox({
  children,
  className,
  ...props
}: InputBoxProps) {
  return (
    <label
      className={combineClass('prx-inputbox', styles.core, className)}
      {...props}
    >
      {children}
    </label>
  );
}
