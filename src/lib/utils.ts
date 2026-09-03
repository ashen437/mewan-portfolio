import type { MutableRefObject, RefCallback } from 'react';

/**
 * Combines multiple class names into a single string, filtering out falsy values.
 */
export function cn(...classes: (string | undefined | boolean | null)[]) {
  return classes.filter(Boolean).join(' ');
}

/** Combines multiple refs pointing at the same DOM node into a single ref callback. */
export function mergeRefs<T>(
  ...refs: (MutableRefObject<T | null> | RefCallback<T> | null | undefined)[]
): RefCallback<T> {
  return (node) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === 'function') ref(node);
      else ref.current = node;
    });
  };
} 