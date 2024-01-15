import styles from './style.module.css';
import { combineClass } from '@untitled/util';
import { CheckboxProps } from './types';

export default function Checkbox({
  children,
  value,
  name,
  checked,
  multiple = false,
  disabled = false,
  className,
  style,
  ...props
}: CheckboxProps) {
  // noinspection TypeScriptValidateTypes
  return (
    <label
      className={combineClass('prx-check-box', styles.box, className)}
      style={style}
    >
      <input
        type='checkbox'
        className={combineClass('prx-check-root', styles.root)}
        name={name}
        disabled={disabled}
        checked={checked}
        value={value}
        {...props}
      />
      <Mark multiple={multiple} />
      {children}
    </label>
  );
}

interface Props {
  multiple: boolean;
}

function Mark({ multiple }: Props) {
  return (
    <div
      className={combineClass('prx-check-mark', styles.mark)}
      data-multiple={multiple}
    >
      <svg focusable='false' aria-hidden='true' viewBox='0 0 24 24'>
        <path fill='currentColor' />
      </svg>
    </div>
  );
}
