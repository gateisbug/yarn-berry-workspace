import styles from '../style.module.css';
import { combineClass } from '@util';
import { FormProps, SelectValueType } from '../types';
import { useEffect, useRef, useState } from 'react';

export default function Form({
  children,
  className,
  onChange,
  ...props
}: FormProps) {
  // noinspection TypeScriptValidateTypes
  const formRef = useRef<HTMLDivElement>(null);
  const openState = useState(false);
  const valueState = useState<SelectValueType>([]);

  const render = children ? children(openState[1], valueState) : null;

  useEffect(() => {
    const clickAway = (event: MouseEvent) => {
      if (
        formRef.current &&
        !formRef.current.contains(event.target as HTMLElement)
      ) {
        openState[1](false);
      }
    };

    document.addEventListener('click', clickAway);
    return () => {
      document.removeEventListener('click', clickAway);
    };
  }, []);

  useEffect(() => {
    onChange && onChange(valueState[0]);
  }, [valueState[0]]);

  return (
    <div
      ref={formRef}
      className={combineClass('prx-select-form', styles.form, className)}
      {...props}
      data-open={openState[0]}
    >
      {render}
    </div>
  );
}
