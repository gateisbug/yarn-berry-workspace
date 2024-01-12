import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import styles from './style.module.css';
import { combineClass } from '@util';
import { TextareaProps } from './types';

export default function Textarea({
  value,
  className,
  maxHeight,
  onChange,
  autoResize = true,
  rows = 1,
  style,
  ...props
}: TextareaProps) {
  // noinspection TypeScriptValidateTypes
  const ref = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState<string>(value ?? '');

  const _onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    if (onChange) {
      // noinspection TypeScriptValidateTypes
      onChange(e);
    }
  };

  const autoResizing = useCallback(() => {
    const textarea = ref.current;
    if (!textarea) return;

    textarea.style.height = 'auto';
    const newHeight = maxHeight
      ? Math.min(textarea.scrollHeight, maxHeight)
      : textarea.scrollHeight;

    textarea.style.height = newHeight + 'px';
  }, [autoResize, ref, maxHeight]);

  useEffect(() => {
    if (!autoResize) return;

    autoResizing();
  }, [text]);

  const overflowY = (() => {
    if (!ref.current || !maxHeight) return 'hidden';

    return text.length > 0 && ref.current?.scrollHeight > maxHeight
      ? 'auto'
      : 'hidden';
  })();

  // noinspection JSAnnotator,TypeScriptValidateTypes
  return (
    <textarea
      ref={ref}
      className={combineClass('prx-textarea', styles.core, className)}
      onChange={_onChange}
      style={{
        overflowY,
        ...style,
      }}
      value={value}
      rows={rows}
      {...props}
    ></textarea>
  );
}
