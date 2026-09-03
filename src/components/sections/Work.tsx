import { featureProject, gridProjects } from "../../data/portfolioData";
import { useReveal, useImageReveal } from "../../hooks/useReveal";

const tagClass = (i: number) => (i === 0 ? "tag tag-yellow" : "tag");

const FeatureProject = () => {
  const revealRef = useReveal<HTMLElement>();
  const imgRef = useImageReveal<HTMLDivElement>();
  return (
    <article className="feature-project group" ref={revealRef} data-reveal>
      <a href="#work" className="block">
        <div className="img-reveal framed" ref={imgRef} data-image-reveal>
          <img src={featureProject.image} alt={featureProject.alt} className="zoom" />
          <span className="reveal-overlay"></span>
        </div>
        <div className="feature-meta">
          <div>
            <div className="tags">
              {featureProject.tags.map((tag, i) => (
                <span className={tagClass(i)} key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="proj-name big">{featureProject.name}</h3>
            <p className="proj-desc">{featureProject.desc}</p>
          </div>
          <span className="view-link">
            View Project <span className="arrow">&rarr;</span>
          </span>
        </div>
      </a>
    </article>
  );
};

const GridProject = ({ project }: { project: (typeof gridProjects)[number] }) => {
  const revealRef = useReveal<HTMLElement>();
  const imgRef = useImageReveal<HTMLDivElement>();
  return (
    <article className="grid-project group" ref={revealRef} data-reveal>
      <a href="#work" className="block">
        <div className="img-reveal framed" ref={imgRef} data-image-reveal>
          <img src={project.image} alt={project.alt} className="zoom small" />
          <span className="reveal-overlay"></span>
        </div>
        <div className="tags">
          {project.tags.map((tag, i) => (
            <span className={tagClass(i)} key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <h3 className="proj-name">{project.name}</h3>
        <p className="proj-desc">{project.desc}</p>
        <span className="view-link">
          View Project <span className="arrow">&rarr;</span>
        </span>
      </a>
    </article>
  );
};

const Work = () => {
  const headRef = useReveal<HTMLElement>();
  const ctaRef = useReveal<HTMLDivElement>();
  return (
    <section id="work" className="section work">
      <div className="wrap">
        <header className="sec-head" ref={headRef} data-reveal>
          <span className="eyebrow">Selected Projects</span>
          <h2 className="sec-title">Recent Work</h2>
        </header>

        <FeatureProject />

        <div className="proj-grid">
          {gridProjects.map((project) => (
            <GridProject project={project} key={project.name} />
          ))}
        </div>

        <div className="centered" ref={ctaRef} data-reveal>
          <a href="#work" className="btn btn-ink solid">
            View All Projects <span className="arrow">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
