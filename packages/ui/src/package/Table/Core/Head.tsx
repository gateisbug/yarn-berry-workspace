import styles from '../style.module.css';
import { combineClass } from '@untitled/util';
import { THeadProps } from '../types';

export default function Head({ children, className, ...props }: THeadProps) {
  return (
    <thead
      className={combineClass('prx-table-head', styles.head, className)}
      {...props}
    >
      {children}
    </thead>
  );
}
