import React from 'react';
import styles from './style.module.css';
import { combineClass } from '@util';
import { ChipProps } from './types';

export default function Chip({
  varient = 'fill',
  className,
  children,
  ...props
}: ChipProps) {
  return (
    <span
      className={combineClass('prx-chip', styles.core, className)}
      data-vx={varient}
      {...props}
    >
      {children}
    </span>
  );
}
