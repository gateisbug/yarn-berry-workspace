import { useEffect, useRef, useState } from 'react';

export default function useIntersectionObserver() {
  // noinspection TypeScriptValidateTypes
  const elementRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver>();

  const [isLoading, setIsLoading] = useState(false);

  const intersectionObserver = (
    entries: IntersectionObserverEntry[],
    io: IntersectionObserver,
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        setIsLoading(true);
      }
    });
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(intersectionObserver);
    elementRef.current && observer.current?.observe(elementRef.current);
  }, []);

  return { elementRef, isLoading };
}
