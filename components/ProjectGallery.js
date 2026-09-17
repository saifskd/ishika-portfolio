import { assetPath } from '../lib/paths';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { FiX } from 'react-icons/fi';
import Project from './Project';
import { availableProjects, filters } from '../data/portfolioData';

export default function ProjectGallery() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  const trigger = useRef(null);
  const activeImage = useRef(null);
  useEffect(() => {
    if (!selected) return;
    dialog.current.showModal();
    if (selected.imageIndex > 0) activeImage.current?.scrollIntoView({ block: 'start', behavior: 'instant' });
    const old = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = old; trigger.current?.focus({ preventScroll: true }); };
  }, [selected]);
  const visible = availableProjects.filter(p => filter === 'All' || p.filter === filter);
  const cards = visible.flatMap(project => (project.showAllArtworks ? project.images : [project.images[0]]).map((_, imageIndex) => ({ project, imageIndex })));
  function open(project, imageIndex) { trigger.current = document.activeElement; setSelected({ project, imageIndex }); }
  function close() { dialog.current?.close(); setSelected(null); }
  const project = selected?.project;
  return <>
    <div className="filters" aria-label="Filter projects">{filters.map(f => <button key={f} aria-pressed={f === filter} className={f === filter ? 'active' : ''} onClick={() => setFilter(f)}>{f}</button>)}</div>
    <p className="sr-only" aria-live="polite">{cards.length} artworks across {visible.length} projects displayed</p>
    <div className="project-grid">{cards.map(({ project, imageIndex }) => <Project key={`${project.id}-${imageIndex}`} project={project} imageIndex={imageIndex} onOpen={open} />)}</div>
    {project && <dialog ref={dialog} className="project-dialog" aria-labelledby="project-title" onCancel={close} onClick={e => { if (e.target === e.currentTarget) close(); }}>
      <div className="dialog-inner">
        <button autoFocus className="dialog-close icon-button" aria-label="Close project" onClick={close}><FiX /></button>
        <p className="eyebrow">{project.category} · Creative project</p>
        <h2 id="project-title">{project.title}</h2>
        <p className="dialog-subtitle">{project.subtitle}</p>
        <p className="dialog-description">{project.description}</p>
        {project.tools?.length > 0 && <p>{project.tools.join(' · ')}</p>}
        {project.images.map((image, index) => <figure ref={selected.imageIndex === index ? activeImage : null} key={assetPath(image.src)}>
          <Image src={assetPath(image.src)} width={image.width} height={image.height} alt={image.alt} sizes="(max-width: 800px) 92vw, 1000px" quality={95} />
          <figcaption>{image.title || image.alt}</figcaption>
        </figure>)}
        {project.video && <video controls preload="metadata" src={assetPath(project.video)} />}
        {project.url && <a className="text-link" href={project.url} target="_blank" rel="noreferrer">View project online ↗</a>}
      </div>
    </dialog>}
  </>;
}
