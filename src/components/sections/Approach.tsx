import { approachSteps } from "../../data/portfolioData";
import { useReveal } from "../../hooks/useReveal";

const Approach = () => {
  const revealRef = useReveal<HTMLElement>();
  return (
    <section id="approach" className="section approach" ref={revealRef} data-reveal>
      <div className="flank">My Approach</div>
      <div className="steps">
        {approachSteps.map((step) => (
          <div className="step" key={step.num}>
            <div className="step-num">{step.num}</div>
            <h4 className="step-label">{step.label}</h4>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
      <div className="flank">My Approach</div>
    </section>
  );
};

export default Approach;
