import { services } from "../../data/portfolioData";
import { useReveal } from "../../hooks/useReveal";

const icons = {
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"></circle>
      <circle cx="12" cy="12" r="5"></circle>
      <circle cx="12" cy="12" r="1"></circle>
    </svg>
  ),
  film: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="13" rx="1"></rect>
      <path d="M3 7l3-4h4l-3 4"></path>
      <path d="M10 7l3-4h4l-3 4"></path>
      <path d="M17 7l2-3"></path>
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  ),
};

const ServiceCard = ({ service }: { service: (typeof services)[number] }) => {
  const revealRef = useReveal<HTMLDivElement>();
  return (
    <div className="focus-card" ref={revealRef} data-reveal>
      <div className="icon-chip">{icons[service.icon]}</div>
      <h3 className="focus-title">{service.title}</h3>
      <p>{service.desc}</p>
      <ul className="dot-list">
        {service.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const DesignFocus = () => {
  const headRef = useReveal<HTMLElement>();
  return (
    <section className="section focus">
      <div className="wrap">
        <header className="sec-head center" ref={headRef} data-reveal>
          <span className="eyebrow">What We Do</span>
          <h2 className="sec-title">Our Services</h2>
        </header>
        <div className="focus-grid">
          {services.map((service) => (
            <ServiceCard service={service} key={service.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignFocus;
