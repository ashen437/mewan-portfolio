import { brandsWorkedWith } from "../../data/portfolioData";
import { useReveal } from "../../hooks/useReveal";

const BrandTile = ({ name }: { name: string }) => {
  const revealRef = useReveal<HTMLDivElement>();
  return (
    <div className="brand-tile" ref={revealRef} data-reveal>
      {name}
    </div>
  );
};

const Brands = () => {
  const headRef = useReveal<HTMLElement>();
  return (
    <section id="brands" className="section work">
      <div className="wrap">
        <header className="sec-head center" ref={headRef} data-reveal>
          <span className="eyebrow">Client Roster</span>
          <h2 className="sec-title">Brands We've Worked With</h2>
        </header>
        <div className="brand-wall">
          {brandsWorkedWith.map((name) => (
            <BrandTile name={name} key={name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
