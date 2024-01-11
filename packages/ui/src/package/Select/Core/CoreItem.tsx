import React from 'react';
import { combineClass } from '@util';
import { ItemProps } from '../types';

export default function Item({
  multiple = false,
  children,
  className,
  value,
  setValue,
  onClick,
  ...props
}: ItemProps) {
  const _onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (value !== undefined && setValue !== undefined) {
      if (Array.isArray(value)) {
        setValue(value);
      } else {
        if (multiple) {
          setValue((prev) => {
            const curr = [...prev];
            const fIndex = curr.findIndex((v) => v === value);
            fIndex === -1 ? curr.push(value) : curr.splice(fIndex, 1);
            return curr;
          });
        } else {
          setValue([value]);
        }
      }
    }

    // noinspection TypeScriptValidateTypes
    onClick && onClick(e);
  };

  return (
    <div
      className={combineClass('prx-select-item', className)}
      onClick={_onClick}
      {...props}
    >
      {children}
    </div>
  );
}
