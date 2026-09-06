import { RefObject, useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
}

/** Tracks the pointer relative to the center of `containerRef` (or the viewport, if omitted). */
export function useMousePositionRef(containerRef?: RefObject<HTMLElement | null>) {
  const positionRef = useRef<Point>({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (x: number, y: number) => {
      const container = containerRef?.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        positionRef.current = {
          x: x - rect.left - rect.width / 2,
          y: y - rect.top - rect.height / 2,
        };
      } else {
        positionRef.current = { x, y };
      }
    };

    const handleMouseMove = (event: MouseEvent) => updatePosition(event.clientX, event.clientY);
    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) updatePosition(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [containerRef]);

  return positionRef;
}
