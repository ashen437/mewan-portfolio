import { about } from "../../data/portfolioData";
import { useReveal, useImageReveal } from "../../hooks/useReveal";
import { mergeRefs } from "../../lib/utils";

const About = () => {
  const portraitWrapRef = useReveal<HTMLDivElement>();
  const imgRef = useImageReveal<HTMLDivElement>();
  const copyRef = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="section about">
      <div className="wrap about-grid">
        <div
          className="img-reveal framed about-portrait"
          ref={mergeRefs(portraitWrapRef, imgRef)}
          data-image-reveal
          data-reveal
        >
          <img src={about.portrait} alt="Portrait of Marlowe Fenn" />
          <span className="reveal-overlay"></span>
        </div>
        <div className="about-copy" ref={copyRef} data-reveal>
          <span className="eyebrow">About Me</span>
          <h2 className="sec-title sm">{about.heading}</h2>
          <div className="about-text">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="credentials">
            {about.credentials.map((c) => (
              <li key={c.strong}>
                <span className="check">✓</span>
                <span>
                  <strong>{c.strong}</strong> {c.rest}
                </span>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-yellow">
            Work With Me <span className="arrow">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
