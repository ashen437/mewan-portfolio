import { useEffect, useState } from "react";
import { hero } from "../../data/portfolioData";
import { useReveal, useImageReveal } from "../../hooks/useReveal";
import { cn } from "../../lib/utils";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const sqOutlineRef = useReveal<HTMLDivElement>();
  const sqFillRef = useReveal<HTMLDivElement>();
  const circleRef = useReveal<HTMLDivElement>();
  const imgRef = useImageReveal<HTMLDivElement>();

  useEffect(() => {
    const raf = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className={cn("hero", loaded && "loaded")}>
      <div className="blueprint-grid" aria-hidden="true"></div>
      <div className="float-shape sq-outline" ref={sqOutlineRef} data-reveal></div>
      <div className="float-shape sq-fill" ref={sqFillRef} data-reveal></div>
      <div className="float-shape circle-outline" ref={circleRef} data-reveal></div>

      <div className="wrap hero-inner">
        <div className="hero-left">
          <div className="status">
            <div className="status-tick">
              <span className="dot"></span>
              <span className="line"></span>
            </div>
            <span className="status-label">{hero.statusLabel}</span>
          </div>

          <h1 className="hero-title">
            <span className="mask">
              <span className="rise" style={{ ["--d" as string]: ".05s" }}>
                Architecture
              </span>
            </span>
            <span className="mask">
              <span className="rise line-two" style={{ ["--d" as string]: ".18s" }}>
                <span className="underlined">That</span>
                <span className="outline-word">Breathes</span>
              </span>
            </span>
          </h1>

          <div className="hero-sub">
            <span className="accent-bar" aria-hidden="true"></span>
            <p>
              I'm Marlowe Fenn — a spatial designer shaping buildings that hold light, weather,
              and the people inside them. Quiet, sustainable, built to endure.
            </p>
          </div>

          <div className="hero-stats">
            {hero.stats.map((stat) => (
              <div className="stat-card" key={stat.cap}>
                <div className="stat-num">{stat.num}</div>
                <div className="stat-cap">{stat.cap}</div>
              </div>
            ))}
          </div>

          <div className="hero-cta">
            <a href="#work" className="btn btn-ink wipe">
              <span className="wipe-bg" aria-hidden="true"></span>
              <span className="lbl">Explore Work</span>
              <span className="arrow">&rarr;</span>
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Talk
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="frame">
            <span className="corner tl" aria-hidden="true"></span>
            <span className="corner br" aria-hidden="true"></span>
            <div className="img-reveal angled" ref={imgRef} data-image-reveal>
              <img
                src="/images/hero.jpg"
                alt="A sunlit modern residence with deep concrete eaves"
                loading="eager"
              />
              <span className="reveal-overlay angled"></span>
            </div>
            <div className="award-card">
              <div className="award-eyebrow">{hero.award.eyebrow}</div>
              <div className="award-title">{hero.award.title}</div>
              <div className="award-sub">{hero.award.sub}</div>
            </div>
            <span className="ghost-square" aria-hidden="true"></span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-rail">
          <span className="scroll-tick"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
