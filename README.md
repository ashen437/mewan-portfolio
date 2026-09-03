# GSAP Smooth Scrolling Implementation

This project uses GSAP for smooth scrolling and animations. Below is a guide on how to use the smooth scrolling features.

## Components

### SmoothScroll Component

The `SmoothScroll` component is a wrapper that applies smooth scrolling to all of its children. It's already integrated in the MainLayout component, so all pages automatically get smooth scrolling.

### Animation Utilities

The project includes several GSAP animation utilities:

1. **useGsapAnimations Hook**: A custom hook for applying GSAP animations to elements.
2. **gsapAnimations Utility**: A set of reusable animation functions for common animations.

## Using Animations in Components

### 1. Using the useGsapAnimations Hook

```tsx
import useGsapAnimations from '../../hooks/useGsapAnimations';

function MyComponent() {
  // Create a reference with the desired animation type
  const headingRef = useGsapAnimations<HTMLHeadingElement>({ fadeUp: true });
  
  // Use the reference in your JSX
  return (
    <h1 ref={headingRef}>This title will fade up when scrolled into view</h1>
  );
}
```

### 2. Available Animation Options

- `fadeIn`: Fade in element
- `fadeUp`: Fade in and move up
- `stagger`: Stagger animation for child elements
- `parallax`: Parallax effect
- `scale`: Scale in animation
- `customAnimation`: Custom animation function

### 3. Using Animation Utilities Directly

```tsx
import { useEffect, useRef } from 'react';
import { fadeInAnimation } from '../../utils/gsapAnimations';

function MyComponent() {
  const elementRef = useRef(null);
  
  useEffect(() => {
    if (elementRef.current) {
      // Apply animation
      fadeInAnimation(elementRef.current);
    }
  }, []);
  
  return <div ref={elementRef}>This will fade in smoothly</div>;
}
```

## ScrollTrigger Refreshing

If you create dynamic content that changes the page height, you may need to refresh the ScrollTrigger:

```tsx
import { refreshScrollTrigger } from '../../utils/gsapAnimations';

// After content is loaded or DOM changes
refreshScrollTrigger();
```

## Customizing Animations

To customize animations, you can use the scrollTriggerOptions parameter:

```tsx
const headingRef = useGsapAnimations<HTMLHeadingElement>({
  fadeUp: true,
  scrollTriggerOptions: {
    start: 'top 70%', // Start animation when top of element hits 70% down the viewport
    end: 'bottom 20%',
    toggleActions: 'play pause reverse reset',
  }
});
```

For more information on GSAP animations, refer to the [GSAP Documentation](https://greensock.com/docs/). 