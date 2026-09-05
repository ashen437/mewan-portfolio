import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/** Wraps the page in GSAP's ScrollSmoother for an eased, momentum-style scroll on desktop. */
const useSmoothScroll = () => {
  useEffect(() => {
    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: reduceMotion ? 0 : 1.2,
      smoothTouch: false,
      effects: false,
    });

    return () => {
      smoother.kill();
    };
  }, []);
};

export default useSmoothScroll;
