import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Project({ project, imageIndex = 0, onOpen }) {
  const image = project.images[imageIndex];
  const title = project.showAllArtworks ? `${project.title} — ${image.title}` : project.title;
  return (
    <article className="project-card" id={imageIndex ? `${project.id}-${imageIndex}` : project.id}>
      <button className="project-open" onClick={() => onOpen(project, imageIndex)} aria-label={`View project: ${title}`}>
        <div className="project-image">
          <Image src={image.src} width={image.width} height={image.height} alt={image.alt} sizes="(max-width: 600px) 92vw, (max-width: 1100px) 44vw, 29vw" quality={90} />
          <span className="project-view">View project <FiArrowUpRight /></span>
        </div>
        <div className="project-meta">
          <span className="eyebrow">{project.showAllArtworks ? `${project.category} · ${project.images.length} artworks` : project.category}</span>
          <h3>{project.showAllArtworks ? image.title : project.title}</h3>
          <FiArrowUpRight className="project-arrow" />
        </div>
      </button>
    </article>
  );
}

