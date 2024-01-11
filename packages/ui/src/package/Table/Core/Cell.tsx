import React from 'react';
import styles from '../style.module.css';
import { combineClass } from '@util';
import { TableCellProps } from '../types';

export default function Cell({
  head = false,
  children,
  className,
  ...props
}: TableCellProps) {
  return !head ? (
    <td
      className={combineClass('prx-table-td', styles.td, className)}
      {...props}
    >
      {children}
    </td>
  ) : (
    <th
      className={combineClass('prx-table-th', styles.th, className)}
      {...props}
    >
      {children}
    </th>
  );
}
