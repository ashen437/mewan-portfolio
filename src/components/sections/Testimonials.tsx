import { testimonials } from "../../data/portfolioData";
import { useReveal } from "../../hooks/useReveal";

const QuoteCard = ({ item }: { item: (typeof testimonials)[number] }) => {
  const revealRef = useReveal<HTMLElement>();
  return (
    <figure className="quote-card" ref={revealRef} data-reveal>
      <div className="quote-head">
        <img src={item.avatar} alt="" className="avatar" />
        <figcaption>
          <span className="q-name">{item.name}</span>
          <span className="q-role">{item.role}</span>
        </figcaption>
      </div>
      <blockquote>"{item.quote}"</blockquote>
      <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
    </figure>
  );
};

const Testimonials = () => {
  const headRef = useReveal<HTMLElement>();
  return (
    <section className="section testimonials">
      <div className="wrap">
        <header className="sec-head center" ref={headRef} data-reveal>
          <span className="eyebrow">Client Feedback</span>
          <h2 className="sec-title">What Clients Say</h2>
        </header>
        <div className="quote-grid">
          {testimonials.map((item) => (
            <QuoteCard item={item} key={item.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
