import { talent } from "../../data/portfolioData";
import { useReveal } from "../../hooks/useReveal";

const TalentTile = ({ name }: { name: string }) => {
  const revealRef = useReveal<HTMLDivElement>();
  return (
    <div className="talent-tile" ref={revealRef} data-reveal>
      <div className="talent-name">{name}</div>
    </div>
  );
};

const Talent = () => {
  const headRef = useReveal<HTMLElement>();
  return (
    <section id="talent" className="section testimonials">
      <div className="wrap">
        <header className="sec-head center" ref={headRef} data-reveal>
          <span className="eyebrow">On-Screen Talent</span>
          <h2 className="sec-title">Cast We've Worked With</h2>
        </header>
        <div className="talent-grid">
          {talent.map((name) => (
            <TalentTile name={name} key={name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Talent;
