import styles from '../style.module.css';
import { combineClass } from '@untitled/util';
import { TableContainerProps } from '../types';

export default function Container({
  children,
  className,
  ...props
}: TableContainerProps) {
  return (
    <table
      className={combineClass('prx-table', styles.table, className)}
      {...props}
    >
      {children}
    </table>
  );
}
