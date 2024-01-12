import styles from './style.module.css';
import { combineClass } from '@util';
import { ScrollViewProps } from './types';

export default function ScrollView({
  className,
  children,
  ...props
}: ScrollViewProps) {
  return (
    <div
      className={combineClass('prx-scroll', styles.core, className)}
      {...props}
    >
      {children}
    </div>
  );
}
