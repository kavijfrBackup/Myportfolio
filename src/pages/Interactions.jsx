import { useEffect, useRef, useState } from "react";
import { CodeXml } from "lucide-react";
import BounceCards from "../components/BounceCards";
import BranchedMenu from "../components/BranchedMenu";
import LineSidebar from "../components/LineSidebar";
import Plasma from "../components/Plasma";
import { interactions } from "../data/interactions";
import "./Interactions.css";

const ACCENT = "#B497CF";
const projectNames = interactions.map(({ name }) => name);

function ScreenshotGallery({ project, onPreview }) {
  const galleryRef = useRef(null);
  const [width, setWidth] = useState(0);
  const hasScreenshots = project.screenshots.length > 0;

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const observer = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });
    observer.observe(gallery);
    return () => observer.disconnect();
  }, [hasScreenshots]);

  if (!hasScreenshots) {
    return <p className="work-gallery work-gallery-empty">Project previews will be added later.</p>;
  }

  const cardSize = Math.min(270, width * 0.49);
  const spread = Math.min(68, (width - cardSize) * 0.72 / Math.max(1, project.screenshots.length - 1));

  return (
    <div className="work-gallery" ref={galleryRef} role="group" aria-label="Project screenshots">
      {width > 0 && (
        <BounceCards
          key={project.id}
          images={project.screenshots}
          containerWidth={width}
          containerHeight={Math.max(124, Math.ceil(cardSize / 1.7 + 50))}
          cardSize={cardSize}
          aspectRatio={1.7}
          spread={spread}
          rotation={5}
          arc={9}
          animationDelay={0.1}
          hoverScale={1.09}
          pushDistance={Math.min(24, width * 0.045)}
          borderWidth={1}
          borderColor="#614d75"
          radius={9}
          onCardClick={index => onPreview(project.screenshots[index])}
        />
      )}
    </div>
  );
}

function ScreenshotDialog({ screenshot, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    dialogRef.current.showModal();
  }, []);

  return (
    <dialog
      className="work-dialog"
      ref={dialogRef}
      aria-label={screenshot.alt}
      onClose={onClose}
    >
      <header className="work-dialog-header">
        <p>{screenshot.alt}</p>
        <button type="button" onClick={() => dialogRef.current.close()}>
          Close
        </button>
      </header>
      <img src={screenshot.src} alt={screenshot.alt} />
    </dialog>
  );
}

function UpcomingDevelopments({ developments = [] }) {
  if (!developments.length) return null;

  return (
    <ul className="work-upcoming" aria-label="Upcoming developments">
      {developments.map(({ id, name, timeframe }) => (
        <li key={id}>
          <span className="work-upcoming-status">Upcoming</span>
          {" — "}{name}{" · "}{timeframe}
        </li>
      ))}
    </ul>
  );
}

function TechnologyStack({ groups, title }) {
  return (
    <div className="work-tech" role="group" aria-label={title ?? "Project technology stack"}>
      {title && <h3>{title}</h3>}
      {groups.map(({ label, items }) => (
        <p key={label ?? "technologies"}>
          {label && <strong>{label} · </strong>}
          {items.join(" · ")}
        </p>
      ))}
    </div>
  );
}

function ProjectDetails({ item, screenshots, onPreview, announce = true }) {
  const screenshot = screenshots.find(({ id }) => id === item.screenshotId);

  return (
    <div className="work-details" aria-live={announce ? "polite" : undefined}>
      <h3>{item.label}</h3>
      {item.heading && <p className="work-detail-heading">{item.heading}</p>}
      {item.description && <p>{item.description}</p>}
      {item.paragraphs?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      {item.points && (
        <ul>
          {item.points.map(point => <li key={point}>{point}</li>)}
        </ul>
      )}
      {screenshot && (
        <button type="button" className="work-detail-link" onClick={() => onPreview(screenshot)}>
          Enlarge screenshot <span aria-hidden="true">↗</span>
        </button>
      )}
    </div>
  );
}

function Interactions() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [menuItem, setMenuItem] = useState(null);
  const [screenshot, setScreenshot] = useState(null);
  const project = interactions[projectIndex];
  const defaultItem = project.menuSections[0].children[0];
  const selectedItem = menuItem || defaultItem;
  const selectedSection = project.menuSections.find(({ children }) => children.includes(selectedItem));
  const showInCenter = (selectedSection?.placement ?? project.menuPlacement) === "showcase";

  function selectProject(index) {
    if (index === projectIndex) return;
    setProjectIndex(index);
    setMenuItem(null);
    setScreenshot(null);
  }

  return (
    <section className="interactions-page">
      <div className="interactions-plasma">
        <Plasma
          color="#B497CF"
          speed={0.16}
          direction="forward"
          scale={1.1}
          opacity={0.28}
          mouseInteractive={false}
          renderScale={0.4}
          maxDpr={1}
          targetFps={20}
          iterations={20}
        />
      </div>

      <div className="interactions-content">
        <header className="interactions-header">
          <p className="interactions-eyebrow">Selected Work</p>

          <h1>Interactions</h1>

          <p className="interactions-intro">
            Commercial work, collaborations, and systems built for real-world use.
          </p>
        </header>

        <div className="work-rail">
          <LineSidebar
            ariaLabel="Interaction projects"
            items={projectNames}
            accentColor={ACCENT}
            defaultActive={0}
            markerLength={22}
            markerGap={9}
            maxShift={8}
            fontSize={1}
            onItemClick={selectProject}
          />

          <section className="work-main" aria-labelledby="work-project-name">
            <div className="work-topline">
              <h2 id="work-project-name">{project.name}</h2>
              <span className="work-status" data-tone={project.statusTone}>{project.status}</span>
            </div>
            <p className="work-subtitle">{project.subtitle}</p>
            <ul className="work-meta" aria-label="Project facts">
              <li>{project.category}</li>
              <li>{project.platform}</li>
              <li>{project.year}</li>
              {project.organization && <li>{project.organization}</li>}
            </ul>
            {project.role && (
              <p className="work-role">
                <span className="work-role-label">
                  <CodeXml size={16} aria-hidden="true" />
                  My Development Role
                </span>
                <strong>{project.role}</strong>
              </p>
            )}
            {project.developmentCompany && (
              <p className="work-attribution">Software engineering by {project.developmentCompany}</p>
            )}
            <UpcomingDevelopments developments={project.upcomingDevelopments} />
            {project.tagline && <p className="work-tagline">{project.tagline}</p>}
            {project.description && (
              <div className="work-project-description">
                {project.description.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              </div>
            )}

            <ScreenshotGallery key={project.id} project={project} onPreview={setScreenshot} />

            <TechnologyStack groups={project.technologies} title={project.technologyLabel} />
            {project.reference && (
              <a
                className="work-detail-link work-reference"
                href={project.reference.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.reference.label} <span aria-hidden="true">↗</span>
              </a>
            )}
          </section>

          <aside className="work-explorer" aria-label="Explore project">
            <BranchedMenu
              key={project.id}
              ariaLabel="Project sections"
              items={project.menuSections}
              defaultActive={defaultItem.value}
              onSelect={(_value, item) => setMenuItem(item)}
              accentColor={ACCENT}
              lineColor="#59486a"
              width={250}
              rowHeight={35}
            />
            {!showInCenter && (
              <ProjectDetails
                item={selectedItem}
                screenshots={project.screenshots}
                onPreview={setScreenshot}
              />
            )}
          </aside>

          <div className="work-case-study" aria-live="polite">
            {showInCenter && (
              <ProjectDetails
                announce={false}
                item={selectedItem}
                screenshots={project.screenshots}
                onPreview={setScreenshot}
              />
            )}
          </div>
        </div>
      </div>
      {screenshot && <ScreenshotDialog screenshot={screenshot} onClose={() => setScreenshot(null)} />}
    </section>
  );
}

export default Interactions;
