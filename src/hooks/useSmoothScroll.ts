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

    const wrapper = document.querySelector<HTMLElement>("#smooth-wrapper");

    const scrollToHash = (hash: string, smooth: boolean) => {
      // #top is the fixed header, which lives outside the smoothed content.
      if (hash === "#top") {
        smoother.scrollTo(0, smooth);
        return true;
      }
      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return false;
      smoother.scrollTo(target, smooth, "top top");
      return true;
    };

    // ScrollSmoother pins #smooth-wrapper with overflow:hidden, so the browser's
    // native anchor jump scrolls the wrapper itself while the smoother stays at
    // its old position. The two offsets then stack and the page scrolls far past
    // the footer into empty space. Drive hash links from the smoother instead.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const link = (e.target as Element | null)?.closest?.<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;

      const hash = link.getAttribute("href") ?? "";
      if (hash.length < 2) return;
      if (!scrollToHash(hash, !reduceMotion)) return;

      e.preventDefault();
      history.replaceState(null, "", hash);
    };

    // Anything else that still scrolls the wrapper — focus moves, find-in-page —
    // gets snapped back so the smoother stays the single source of scroll truth.
    const onWrapperScroll = () => {
      if (wrapper && wrapper.scrollTop !== 0) wrapper.scrollTop = 0;
    };

    // Hashes that arrive without a click — history navigation, an edited URL —
    // are neutralised by the guard above, so re-apply them through the smoother.
    const onHashChange = () => {
      if (location.hash.length > 1) scrollToHash(location.hash, !reduceMotion);
    };

    // A hash already in the URL on load jumps natively before the smoother
    // exists, so undo that jump and re-apply it through the smoother.
    if (location.hash.length > 1) {
      if (wrapper) wrapper.scrollTop = 0;
      scrollToHash(location.hash, false);
    }

    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", onHashChange);
    wrapper?.addEventListener("scroll", onWrapperScroll);

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", onHashChange);
      wrapper?.removeEventListener("scroll", onWrapperScroll);
      smoother.kill();
    };
  }, []);
};

export default useSmoothScroll;
