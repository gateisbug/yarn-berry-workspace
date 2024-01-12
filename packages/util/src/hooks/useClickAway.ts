import { useEffect, useRef, LegacyRef } from 'react';

export default function useClickAway<T = HTMLElement>(
  onClickAway?: () => void,
) {
  // noinspection TypeScriptValidateTypes
  const ref = useRef<HTMLElement>(null);

  const _onClickAway = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
      onClickAway && onClickAway();
    }
  };

  useEffect(() => {
    document.addEventListener('click', _onClickAway);

    return () => {
      document.removeEventListener('click', _onClickAway);
    };
  }, [ref, onClickAway]);

  return ref as LegacyRef<T>;
}
