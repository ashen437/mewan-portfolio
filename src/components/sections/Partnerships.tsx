import { businessPartnerships, marketingConsultantClients } from "../../data/portfolioData";
import { useReveal } from "../../hooks/useReveal";

const PartnerCard = ({ partnership }: { partnership: (typeof businessPartnerships)[number] }) => {
  const revealRef = useReveal<HTMLDivElement>();
  return (
    <div className="partner-card" ref={revealRef} data-reveal>
      <div className="partner-company">{partnership.company}</div>
      <div className="partner-with">with {partnership.partner}</div>
    </div>
  );
};

const Partnerships = () => {
  const headRef = useReveal<HTMLElement>();
  const consultantRef = useReveal<HTMLDivElement>();
  return (
    <section id="partnerships" className="section focus">
      <div className="wrap">
        <header className="sec-head" ref={headRef} data-reveal>
          <span className="eyebrow">Beyond Production</span>
          <h2 className="sec-title sm">Business Partnerships</h2>
        </header>

        <div className="partners-grid">
          {businessPartnerships.map((p) => (
            <PartnerCard partnership={p} key={p.company} />
          ))}
        </div>

        <div ref={consultantRef} data-reveal>
          <h3 className="credit-group-title">Marketing Consultant For</h3>
          <div className="consultant-list">
            {marketingConsultantClients.map((client) => (
              <span className="consultant-tag" key={client}>
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
