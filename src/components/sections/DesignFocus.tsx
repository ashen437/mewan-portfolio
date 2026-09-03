import { focusAreas } from "../../data/portfolioData";
import { useReveal } from "../../hooks/useReveal";

const icons = {
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      <line x1="2" y1="12" x2="22" y2="12"></line>
    </svg>
  ),
  grid: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="1"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  ),
};

const FocusCard = ({ area }: { area: (typeof focusAreas)[number] }) => {
  const revealRef = useReveal<HTMLDivElement>();
  return (
    <div className="focus-card" ref={revealRef} data-reveal>
      <div className="icon-chip">{icons[area.icon]}</div>
      <h3 className="focus-title">{area.title}</h3>
      <p>{area.desc}</p>
      <ul className="dot-list">
        {area.items.map((item) => (
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
          <span className="eyebrow">What I Do</span>
          <h2 className="sec-title">Design Focus</h2>
        </header>
        <div className="focus-grid">
          {focusAreas.map((area) => (
            <FocusCard area={area} key={area.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignFocus;
