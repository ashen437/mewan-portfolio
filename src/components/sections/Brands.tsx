import { brandsWorkedWith } from "../../data/portfolioData";
import { useReveal } from "../../hooks/useReveal";
import MarqueeAlongSvgPath from "../ui/MarqueeAlongSvgPath";

// A sweeping ribbon that curls into a loop. Both ends run past the viewBox and
// the frame clips them, so the wrap from 100% back to 0% happens out of sight.
// Travels left to right along the bottom, climbs the right side of the curl,
// runs back across the top, drops down the left side, then rejoins the bottom
// run and carries on right. Both ends sit outside the viewBox so the frame
// clips them and the wrap from 100% back to 0% never shows.
// Sits high in the viewBox so the tiles (which stand ~63 units off the line,
// more where they rake) just clear the top and bottom edges — no dead band.
const RIBBON_PATH = [
  "M-160,411",
  "C60,486 300,501 480,461",
  "C560,446 600,436 640,411",
  "C780,351 840,321 830,241",
  "C820,141 740,81 630,81",
  "C540,81 480,141 490,231",
  "C498,311 540,361 600,396",
  "C760,461 1000,436 1200,393",
  "C1330,366 1450,351 1560,341",
].join(" ");

const LogoCard = ({ name, logo }: { name: string; logo: string }) => (
  <div className="brand-logo-card">
    <img src={logo} alt={name} loading="lazy" />
  </div>
);

const Brands = () => {
  const headRef = useReveal<HTMLElement>();
  const marqueeRef = useReveal<HTMLDivElement>();
  return (
    <section id="brands" className="section work">
      <div className="wrap">
        <header className="sec-head center" ref={headRef} data-reveal>
          <span className="eyebrow">Client Roster</span>
          <h2 className="sec-title">Brands We've Worked With</h2>
        </header>
        <div ref={marqueeRef} data-reveal>
          <MarqueeAlongSvgPath
            className="brand-marquee"
            path={RIBBON_PATH}
            viewBox="0 0 1400 558"
            responsive
            baseVelocity={3}
            slowdownOnHover
            draggable
            grabCursor
            repeat={1}
          >
            {brandsWorkedWith.map((brand) => (
              <LogoCard name={brand.name} logo={brand.logo} key={brand.name} />
            ))}
          </MarqueeAlongSvgPath>
        </div>
      </div>
    </section>
  );
};

export default Brands;
