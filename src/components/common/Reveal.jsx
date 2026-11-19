import { useLayoutEffect, useRef, useState } from 'react';

/**
 * Subtle scroll-reveal wrapper. Content is VISIBLE BY DEFAULT — hiding only
 * happens while the element is below the fold AND the browser supports
 * IntersectionObserver AND motion isn't reduced. If JS or the observer fails,
 * the element simply stays visible (progressive enhancement, no dependency).
 */
export default function Reveal({ as, delay = 0, className = '', children, ...rest }) {
  const Tag = as || 'div';
  const ref = useRef(null);
  const [state, setState] = useState('idle'); // idle | pending | visible

  useLayoutEffect(() => {
    const el = ref.current;
    const reduced =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!el || typeof IntersectionObserver === 'undefined' || reduced) {
      setState('visible');
      return undefined;
    }
    // Only animate elements that are actually below the viewport on mount.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setState('visible');
      return undefined;
    }
    setState('pending');
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setState('visible');
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const extra =
    state === 'visible' ? ' is-visible' : state === 'pending' ? ' is-pending' : '';

  return (
    <Tag
      ref={ref}
      className={`reveal${extra} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}