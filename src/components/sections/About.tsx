import { about } from "../../data/portfolioData";
import { useReveal } from "../../hooks/useReveal";

const About = () => {
  const visualRef = useReveal<HTMLDivElement>();
  const copyRef = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="section about">
      <div className="wrap about-grid">
        <div className="about-visual" ref={visualRef} data-reveal>
          <div className="blueprint-grid" aria-hidden="true"></div>
          {about.highlights.map((h) => (
            <div className="about-visual-row" key={h.label}>
              <div className="about-visual-num">{h.num}</div>
              <div className="about-visual-label">{h.label}</div>
            </div>
          ))}
        </div>
        <div className="about-copy" ref={copyRef} data-reveal>
          <span className="eyebrow">About Us</span>
          <h2 className="sec-title sm">{about.heading}</h2>
          <div className="about-text">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <a href="#contact" className="btn btn-yellow">
            Work With Us <span className="arrow">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
