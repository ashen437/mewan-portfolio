import { brand, contactCta } from "../../data/portfolioData";
import { useReveal } from "../../hooks/useReveal";

const ContactCTA = () => {
  const revealRef = useReveal<HTMLElement>();
  return (
    <section id="contact" className="section contact" ref={revealRef} data-reveal>
      <div className="wrap narrow center">
        <h2 className="sec-title light">{contactCta.heading}</h2>
        <p className="contact-copy">{contactCta.copy}</p>
        <div className="hero-cta center-cta">
          <a href={`mailto:${brand.email}`} className="btn btn-yellow">
            Get in Touch <span className="arrow">&rarr;</span>
          </a>
          <a href="#work" className="btn btn-outline-light">
            View All Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
