import { productionCredits } from "../../data/portfolioData";
import { useReveal, useImageReveal } from "../../hooks/useReveal";

const CreditCard = ({ title, type, image }: { title: string; type: string; image: string }) => {
  const revealRef = useReveal<HTMLDivElement>();
  const imgRevealRef = useImageReveal<HTMLDivElement>();
  return (
    <div className="credit-card" ref={revealRef} data-reveal>
      <div className="credit-media img-reveal" ref={imgRevealRef} data-image-reveal>
        <img src={image} alt={`${title} still`} loading="lazy" width={1920} height={1080} />
        <span className="reveal-overlay"></span>
      </div>
      <div className="credit-body">
        <div className="tags">
          <span className="tag tag-yellow">{type}</span>
        </div>
        <h3 className="credit-title">{title}</h3>
      </div>
    </div>
  );
};

const CreditGroup = ({ group }: { group: (typeof productionCredits)[number] }) => {
  const titleRef = useReveal<HTMLHeadingElement>();
  return (
    <div>
      <h3 className="credit-group-title" ref={titleRef} data-reveal>
        {group.role}
      </h3>
      <div className="credit-grid">
        {group.items.map((item) => (
          <CreditCard title={item.title} type={item.type} image={item.image} key={`${group.role}-${item.title}`} />
        ))}
      </div>
    </div>
  );
};

const Work = () => {
  const headRef = useReveal<HTMLElement>();
  return (
    <section id="work" className="section work">
      <div className="wrap">
        <header className="sec-head" ref={headRef} data-reveal>
          <span className="eyebrow">Our Credits</span>
          <h2 className="sec-title">Film &amp; TV Work</h2>
        </header>

        <div className="credit-groups">
          {productionCredits.map((group) => (
            <CreditGroup group={group} key={group.role} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
