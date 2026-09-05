import { about } from "../../data/portfolioData";
import { useReveal, useImageReveal } from "../../hooks/useReveal";

const About = () => {
  const visualRef = useImageReveal<HTMLDivElement>();
  const copyRef = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="section about">
      <div className="wrap about-grid">
        <div className="about-visual img-reveal" ref={visualRef} data-image-reveal>
          <img src="/images/production.png" alt="A T-Frame Media production in progress" loading="lazy" />
          <span className="reveal-overlay"></span>
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
