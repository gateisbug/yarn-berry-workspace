import styles from './style.module.css';
import { combineClass } from '@untitled/util';
import { InputProps, InputTypes } from './types';

export default function Input({
  type = 'text',
  readOnly = false,
  className,
  ...props
}: InputProps) {
  return (
    <input
      type={type as InputTypes}
      className={combineClass('prx-input', styles.core, className)}
      readOnly={readOnly}
      {...props}
    />
  );
}
