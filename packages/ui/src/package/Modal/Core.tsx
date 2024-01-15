import { MouseEvent, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './style.module.css';
import { combineClass } from '@untitled/util';
import { ModalProps } from './types';
import useScrollBlock from './useScrollBlock';

export default function Modal({
  open,
  onClose,
  children,
  className,
  ...props
}: ModalProps) {
  // noinspection TypeScriptValidateTypes
  const shadowRef = useRef<HTMLDivElement>(null);

  const onClickShadow = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === shadowRef.current) {
      onClose && onClose();
    }
  };

  useScrollBlock(open);

  return open
    ? createPortal(
        <div
          ref={shadowRef}
          className={combineClass('prx-shadow', styles.shadow)}
          onClick={onClickShadow}
        >
          <div
            className={combineClass('prx-modal', styles.core, className)}
            {...props}
          >
            {children}
          </div>
        </div>,
        document.body,
      )
    : null;
}
