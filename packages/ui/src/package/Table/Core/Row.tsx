import styles from '../style.module.css';
import { combineClass } from '@util';
import { TableRowProps } from '../types';

export default function Row({ children, className, ...props }: TableRowProps) {
  return (
    <tr
      className={combineClass('prx-table-row', styles.row, className)}
      {...props}
    >
      {children}
    </tr>
  );
}
