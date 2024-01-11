import React from 'react';
import styles from '../style.module.css';
import { combineClass } from '@util';
import { TBodyProps } from '../types';

export default function Body({ children, className, ...props }: TBodyProps) {
  return (
    <tbody
      className={combineClass('prx-table-body', styles.body, className)}
      {...props}
    >
      {children}
    </tbody>
  );
}
