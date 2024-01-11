import { useEffect } from 'react';

export default function useScrollBlock(trigger: boolean, style?: string) {
  useEffect(() => {
    const idx = document.body.getAttribute('data-index') ?? '0';
    const index = Number(idx);

    if (trigger) {
      if (index === 0) {
        document.body.setAttribute(
          'style',
          style ?? 'padding-right: 17px; overflow: hidden',
          // 'position: fixed; overflow-y: scroll',
        );
        document.body.setAttribute('data-index', '1');
      } else {
        document.body.setAttribute('data-index', (index + 1).toString());
      }
    } else {
      if (index <= 1) {
        document.body.removeAttribute('style');
        document.body.removeAttribute('data-index');
      } else {
        document.body.setAttribute('data-index', (index - 1).toString());
      }
    }
  }, [trigger, style]);
}
