import { videoGallery, type GalleryVideo } from "../../data/portfolioData";
import { useReveal } from "../../hooks/useReveal";
import Floating, { FloatingElement } from "../ui/Floating";

const PlayIcon = () => (
  <svg className="gallery-play-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const GalleryCard = ({ video }: { video: GalleryVideo }) => (
  <FloatingElement depth={video.depth} className="gallery-card-wrap">
    <a className="gallery-card" href={video.url} target="_blank" rel="noopener noreferrer">
      <span className="gallery-card-media" style={{ aspectRatio: video.aspectRatio }}>
        {video.thumbnail ? <img src={video.thumbnail} alt="" loading="lazy" /> : <span className="gallery-card-fallback" />}
        <span className="gallery-tag">{video.tag}</span>
        <span className="gallery-play">
          <PlayIcon />
        </span>
      </span>
      <span className="gallery-card-title">{video.title}</span>
    </a>
  </FloatingElement>
);

const Projects = () => {
  const headRef = useReveal<HTMLElement>();

  return (
    <section id="projects" className="section projects">
      <div className="wrap">
        <header className="sec-head" ref={headRef} data-reveal>
          <span className="eyebrow">Selected Work</span>
          <h2 className="sec-title">Video Gallery</h2>
        </header>

        <Floating className="gallery-stage" sensitivity={1} easingFactor={0.08}>
          {videoGallery.map((video) => (
            <GalleryCard key={video.id} video={video} />
          ))}
        </Floating>
      </div>
    </section>
  );
};

export default Projects;
