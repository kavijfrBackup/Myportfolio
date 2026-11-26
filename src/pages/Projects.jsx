import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Plasma from "../components/Plasma";
import DepthCarousel from "../components/DepthCarousel";

const projects = [
  {
    wheelName: "ProjectFlow",
    title: "ProjectFlow",
    subtitle: "Enterprise Project & Workflow Management System",
    status: "In Development",
    category: "Full-Stack Enterprise Application",
    developmentModel: "Proprietary Software",
    developmentCompany: "Arqeno",
    role: "Software Engineer | Full-Stack Developer",
    description: [
      "ProjectFlow is a multi-tenant enterprise project and workflow management platform designed to streamline organizational collaboration, project planning, task management and agile sprint execution through a centralized digital workspace.",
      "The platform combines a modern frontend with enterprise-grade backend architecture, secure authentication, organization-level access control, REST APIs and structured database management."
    ],
    technologyGroups: [
      { label: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
      { label: "Backend", items: ["Java", "Spring Boot", "Spring Security", "REST APIs"] },
      { label: "Database and Infrastructure", items: ["PostgreSQL", "Supabase", "Flyway", "Docker"] },
      { label: "Security", items: ["JWT Authentication", "OAuth 2.0 Resource Server", "ES256 Signature Verification", "Role-Based Access Control"] },
      { label: "Testing", items: ["JUnit", "Spring Boot Integration Testing"] }
    ],
    capabilities: [
      "Multi-tenant organization management",
      "Organization membership and invitations",
      "Role-based access control",
      "Project and task management",
      "Task assignments and priorities",
      "Task comments and watchers",
      "Agile backlog and sprint planning",
      "Sprint lifecycle management",
      "Secure authentication and authorization",
      "Structured database migrations",
      "Automated backend testing"
    ],
    action: { type: "arqeno", url: "https://arqeno.work/products/projectflow/" }
  },
  {
    wheelName: "Dorm Maintenance",
    title: "Dorm Maintenance System",
    tech: ["Java", "Swing", "MySQL"],
    description:
      "A desktop application designed to streamline the process of handling maintenance requests in dormitories.",
    action: { type: "github", url: "https://github.com/kaviigfr/Dorms_MaintenanceS" }
  },
  {
    wheelName: "Inventory System",
    title: "Inventory and Order Management System",
    tech: ["Python", "Django", "HTML"],
    description:
      "A full-featured system built for grocery store operations, managing inventory, suppliers, customer orders and staff roles with efficiency and precision.",
    action: { type: "github", url: "https://github.com/kaviigfr/project_class" }
  },
  {
    wheelName: "Results Management",
    title: "Results Management System",
    tech: ["Python", "Tkinter", "SQLite"],
    description:
      "A student results management system for recording marks, grades and feedback while allowing students and parents to view academic results and report cards.",
    action: { type: "github", url: "https://github.com/kaviigfr/RMS" }
  },
  {
    wheelName: "LocalHub",
    title: "LocalHub",
    tech: ["Laravel", "React", "MySQL"],
    description:
      "A community marketplace and freelance platform where users can buy and sell items, offer services, communicate with each other, manage listings and reviews, and use role-based features.",
    action: { type: "github", url: "https://github.com/kaviigfr/localhub" }
  },
  {
    wheelName: "LocalHub DB",
    title: "LocalHub — DB Edition",
    tech: ["Node.js", "Express", "PostgreSQL"],
    description:
      "A database-focused version of LocalHub featuring PostgreSQL procedures, transactions, functions, triggers, indexing, role-based access, messaging, listings and reviews.",
    action: { type: "github", url: "https://github.com/kaviigfr/localhub-db" }
  },
  {
    wheelName: "Moodflix",
    title: "Moodflix",
    tech: ["React", "Vite", "API"],
    description:
      "A movie discovery experience built around mood-based browsing, allowing users to explore films through a modern and interactive interface.",
    action: { type: "github", url: "https://github.com/kavijfrBackup/Moodflix" }
  },
  {
    wheelName: "GitHub Viewer",
    title: "GitHub Account Viewer",
    tech: ["React", "GitHub REST API"],
    description:
      "A React app that looks up any GitHub username and displays their profile and recent repositories, styled as an interactive git-log timeline with language-colored commit dots. Built with component-based architecture using SearchBar, ProfileCard, RepoList and RepoRow, with React hooks handling async API calls, loading states and error handling.",
    action: { type: "github", url: "https://github.com/kavijfrBackup/github-account-viewer" }
  }
];

const carouselItems = projects.map(({ wheelName, image }) => ({ title: wheelName, image, alt: `${wheelName} screenshot` }));

const actions = {
  github: { host: "github.com", path: /^\/[^/]+\/[^/]+\/?$/, label: "View on GitHub", Icon: FaGithub },
  arqeno: { host: "arqeno.work", path: /^\/.+/, label: "View Project on Arqeno", Icon: ExternalLink }
};

function ProjectAction({ action }) {
  const config = actions[action?.type];
  let url;
  try {
    url = new URL(action?.url);
  } catch {
    return null;
  }
  if (!config || !url || url.protocol !== "https:" || url.hostname !== config.host || !config.path.test(url.pathname)) {
    return null;
  }

  const { Icon, label } = config;
  return (
    <a href={url.href} target="_blank" rel="noopener noreferrer" className="project-action">
      <Icon size={17} aria-hidden="true" />
      {label}
    </a>
  );
}

function TechnologyTags({ items }) {
  return (
    <ul className="project-tags" aria-label="Technology stack">
      {items.map(technology => <li key={technology}>{technology}</li>)}
    </ul>
  );
}

function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedProject = projects[selectedIndex];

  return (
    <section className="projects-page">
      <div className="projects-plasma" aria-hidden="true">
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

      <div className="projects-content">
        <header className="projects-heading">
          <h1>Projects</h1>
          <p className="projects-intro">A curated collection of things I've built.</p>
        </header>

        <DepthCarousel
          items={carouselItems}
          ariaLabel="Portfolio projects"
          onChange={setSelectedIndex}
        />

        <section className="project-details" aria-label="Selected project">
          <div aria-live="polite">
            <h2>{selectedProject.title}</h2>
            {selectedProject.subtitle && <p className="project-subtitle">{selectedProject.subtitle}</p>}
            {selectedProject.status && (
              <ul className="project-metadata" aria-label="Project facts">
                <li className="project-status">{selectedProject.status}</li>
                <li>{selectedProject.category}</li>
                <li>{selectedProject.developmentModel}</li>
                <li>{selectedProject.developmentCompany}</li>
              </ul>
            )}
            {selectedProject.role && (
              <p className="project-role"><strong>My Development Role</strong> · {selectedProject.role}</p>
            )}
            {[selectedProject.description].flat().map(paragraph => (
              <p className="project-description" key={paragraph}>{paragraph}</p>
            ))}
            {selectedProject.technologyGroups ? (
              <section className="project-extra">
                <h3>Technology Stack</h3>
                {selectedProject.technologyGroups.map(({ label, items }) => (
                  <div className="project-tech-group" key={label}>
                    <h4>{label}</h4>
                    <TechnologyTags items={items} />
                  </div>
                ))}
              </section>
            ) : <TechnologyTags items={selectedProject.tech} />}
            {selectedProject.capabilities && (
              <section className="project-extra">
                <h3>Core Capabilities in Development</h3>
                <ul className="project-capabilities">
                  {selectedProject.capabilities.map(capability => <li key={capability}>{capability}</li>)}
                </ul>
              </section>
            )}
          </div>
          <ProjectAction action={selectedProject.action} />
        </section>
      </div>
    </section>
  );
}

export default Projects;
