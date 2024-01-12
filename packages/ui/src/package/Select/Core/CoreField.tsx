import styles from '../style.module.css';
import { combineClass } from '@util';
import { FieldProps } from '../types';

export default function Field({
  children,
  setOpen,
  onClick,
  className,
  placeholder,
  ...props
}: FieldProps) {
  const _onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setOpen && setOpen((prev) => !prev);
    // noinspection TypeScriptValidateTypes
    onClick && onClick(e);
  };

  return (
    <div
      className={combineClass('prx-select-field', styles.field, className)}
      onClick={_onClick}
      {...props}
    >
      {children ?? (
        <span
          className={combineClass('prx-select-placeholder', styles.placeholder)}
        >
          {placeholder}
        </span>
      )}
    </div>
  );
}
