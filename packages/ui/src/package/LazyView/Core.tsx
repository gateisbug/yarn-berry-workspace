import { combineClass } from '@untitled/util';
import { LazyViewProps } from './types';
import useIntersectionObserver from './useIntersectionObserver';

export default function LazyView({
  fallback,
  children,
  className,
  ...props
}: LazyViewProps) {
  const { elementRef, isLoading } = useIntersectionObserver();

  return (
    <div
      ref={elementRef}
      className={combineClass('prx-lazy-view', className)}
      {...props}
    >
      {isLoading ? children : fallback}
    </div>
  );
}
