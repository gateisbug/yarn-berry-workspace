import styles from '../style.module.css';
import { combineClass } from '@untitled/util';
import { BoxProps } from '../types';

export default function Box({
  children,
  setOpen,
  onClick,
  className,
  ...props
}: BoxProps) {
  const _onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setOpen && setOpen(false);
    // noinspection TypeScriptValidateTypes
    onClick && onClick(e);
  };

  return (
    <div
      className={combineClass('prx-select-box', styles.box, className)}
      onClick={_onClick}
      {...props}
    >
      {children}
    </div>
  );
}
