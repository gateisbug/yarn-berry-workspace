import React from 'react';
import styles from './style.module.css';
import { combineClass } from '@util';
import { SkeletonProps } from './types';

export default function Skeleton({
  varient = 'text',
  className,
  ...props
}: SkeletonProps) {
  return (
    <span
      className={combineClass('prx-skeleton', styles.core, className)}
      data-vx={varient}
      {...props}
    />
  );
}
