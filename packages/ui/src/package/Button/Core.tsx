import React from 'react';
import styles from './style.module.css';
import { combineClass } from '@util';
import { ButtonProps } from './types';

export default function Button({
  varient = 'fill',
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={combineClass('prx-button', styles.core, className)}
      data-vx={varient}
      data-full={fullWidth}
      {...props}
    >
      {children}
    </button>
  );
}
