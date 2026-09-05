import { brand, contactCta, socialLinks } from "../../data/portfolioData";
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

        <ul className="contact-details">
          <li>
            <span className="contact-label">Email</span>
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
          </li>
          <li>
            <span className="contact-label">Phone</span>
            <a href={brand.phoneHref}>{brand.phone}</a>
          </li>
          {socialLinks.map((social) => (
            <li key={social.href}>
              <span className="contact-label">{social.label}</span>
              <a href={social.href} target="_blank" rel="noreferrer">
                {social.handle}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ContactCTA;
