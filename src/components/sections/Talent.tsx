import { talent } from "../../data/portfolioData";
import { useReveal } from "../../hooks/useReveal";
import { CoverflowCarousel } from "../ui/CoverflowCarousel";

const slides = talent.map((person) => ({
  src: person.image,
  alt: person.name,
  title: person.name,
}));

const Talent = () => {
  const headRef = useReveal<HTMLElement>();
  const carouselRef = useReveal<HTMLDivElement>();
  return (
    <section id="talent" className="section testimonials">
      <div className="wrap">
        <header className="sec-head center" ref={headRef} data-reveal>
          <span className="eyebrow">On-Screen Talent</span>
          <h2 className="sec-title">Cast We've Worked With</h2>
        </header>
        <div ref={carouselRef} data-reveal>
          <CoverflowCarousel slides={slides} showNavigation showPagination showCaption label="Cast we've worked with" />
        </div>
      </div>
    </section>
  );
};

export default Talent;
