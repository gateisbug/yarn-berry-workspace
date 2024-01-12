import { CSSProperties } from 'react';
import styles from './style.module.css';
import { combineClass } from '@util';
import {  } from '@untitled/util';
import { BadgeProps } from './types';

export default function Badge({
  content,
  varient = 'standard',
  show = true,
  max = 99,
  vertical = 'top',
  horizontal = 'right',
  children,
  className,
  style,
  ...props
}: BadgeProps) {
  const _content = (() => {
    const text = varient === 'standard' ? content : '';

    if (typeof text === 'number' && text > max) {
      return `${max}+`;
    }

    return text ?? '';
  })();

  // noinspection TypeScriptValidateTypes
  const _style: CSSProperties = (() => {
    const transform = (() => {
      if (vertical === 'top') {
        if (horizontal === 'right') return 'translate(50%, -50%)';
        else return 'translate(-50%, -50%)';
      } else {
        if (horizontal === 'right') return 'translate(50%, 50%)';
        else return 'translate(-50%, 50%)';
      }
    })();

    return {
      ...style,
      top: vertical === 'top' ? 0 : undefined,
      bottom: vertical === 'bottom' ? 0 : undefined,
      right: horizontal === 'right' ? 0 : undefined,
      left: horizontal === 'left' ? 0 : undefined,
      transform,
    };
  })();

  return (
    <span className={combineClass('prx-badge-box', styles.box)}>
      {children}
      {show && (
        <span
          className={combineClass('prx-badge', styles.core, className)}
          data-vx={varient}
          style={_style}
          {...props}
        >
          {_content}
        </span>
      )}
    </span>
  );
}
