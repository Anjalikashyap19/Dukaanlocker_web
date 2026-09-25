import { useRef, useEffect } from 'react';

/**
 * SpotlightText
 *
 * Micro-interaction for the Features section:
 * Two identical text layers overlaid with a cursor-driven radial gradient mask.
 * Base layer stays dark/muted; bright highlight layer illuminates only near the cursor.
 */
export default function SpotlightText({
  text = 'your business documents stay protected while you stay focused on your business',
  className = '',
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for touch-only devices or reduced motion
    const isTouchOnly = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouchOnly || isReducedMotion) return;

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
    };

    const handlePointerEnter = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
      container.style.setProperty('--spotlight-opacity', '1');
    };

    const handlePointerLeave = () => {
      container.style.setProperty('--spotlight-opacity', '0');
    };

    container.addEventListener('pointermove', handlePointerMove, { passive: true });
    container.addEventListener('pointerenter', handlePointerEnter, { passive: true });
    container.addEventListener('pointerleave', handlePointerLeave, { passive: true });

    return () => {
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerenter', handlePointerEnter);
      container.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`spotlight-text ${className}`}
    >
      {/* Base layer: Subdued dark text */}
      <div className="spotlight-text__base">
        {text}
      </div>

      {/* Highlight layer: Bright text visible only via radial spotlight mask */}
      <div className="spotlight-text__highlight" aria-hidden="true">
        {text}
      </div>
    </div>
  );
}
