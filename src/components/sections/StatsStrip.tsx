import { statsStrip } from "../../data/portfolioData";
import { useCountUp } from "../../hooks/useCountUp";
import { useReveal } from "../../hooks/useReveal";

const StatItem = ({ count, suffix, cap }: { count: number; suffix: string; cap: string }) => {
  const { value, ref } = useCountUp(count, 1300);
  return (
    <div className="stat">
      <div className="big-num" ref={ref}>
        {value}
        {suffix}
      </div>
      <div className="cap">{cap}</div>
    </div>
  );
};

const StatsStrip = () => {
  const revealRef = useReveal<HTMLElement>();
  return (
    <section className="stats-strip" ref={revealRef} data-reveal>
      <div className="wrap stats-grid">
        {statsStrip.map((stat) => (
          <StatItem key={stat.cap} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default StatsStrip;
