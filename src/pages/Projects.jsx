import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import SideRays from "../components/SideRays";
import OptionWheel from "../components/OptionWheel";
import SpotlightCard from "../components/SpotlightCard";

const projects = [
  {
    wheelName: "Dorm Maintenance",
    title: "Dorm Maintenance System",
    tech: ["Java", "Swing", "MySQL"],
    description:
      "A desktop application designed to streamline the process of handling maintenance requests in dormitories.",
    github: "https://github.com/kaviigfr/Dorms_MaintenanceS",
    preview: null
  },
  {
    wheelName: "Inventory System",
    title: "Inventory and Order Management System",
    tech: ["Python", "Django", "HTML"],
    description:
      "A full-featured system built for grocery store operations, managing inventory, suppliers, customer orders and staff roles with efficiency and precision.",
    github: "https://github.com/kaviigfr/project_class",
    preview: null
  },
  {
    wheelName: "Results Management",
    title: "Results Management System",
    tech: ["Python", "Tkinter", "SQLite"],
    description:
      "A student results management system for recording marks, grades and feedback while allowing students and parents to view academic results and report cards.",
    github: "https://github.com/kaviigfr/RMS",
    preview: null
  },
  {
    wheelName: "LocalHub",
    title: "LocalHub",
    tech: ["Laravel", "React", "MySQL"],
    description:
      "A community marketplace and freelance platform where users can buy and sell items, offer services, communicate with each other, manage listings and reviews, and use role-based features.",
    github: "https://github.com/kaviigfr/localhub",
    preview: "https://localhub.kavija.me"
  },
  {
    wheelName: "LocalHub DB",
    title: "LocalHub — DB Edition",
    tech: ["Node.js", "Express", "PostgreSQL"],
    description:
      "A database-focused version of LocalHub featuring PostgreSQL procedures, transactions, functions, triggers, indexing, role-based access, messaging, listings and reviews.",
    github: "https://github.com/kaviigfr/localhub-db",
    preview: null
  },
  {
    wheelName: "Moodflix",
    title: "Moodflix",
    tech: ["React", "Vite", "API"],
    description:
      "A movie discovery experience built around mood-based browsing, allowing users to explore films through a modern and interactive interface.",
    github: "https://github.com/kavijfrBackup/Moodflix",
    preview: "https://moodflix.kavija.me"
  },
  {
    wheelName: "GitHub Viewer",
    title: "GitHub Account Viewer",
    tech: ["React", "GitHub REST API"],
    description:
      "A React app that looks up any GitHub username and displays their profile and recent repositories, styled as an interactive git-log timeline with language-colored commit dots. Built with component-based architecture using SearchBar, ProfileCard, RepoList and RepoRow, with React hooks handling async API calls, loading states and error handling.",
    github: "https://github.com/kavijfrBackup/github-account-viewer",
    preview: "https://gh.kavija.me"
  }
];

function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedProject = projects[selectedIndex];

  return (
    <section className="projects-page">
      <div className="projects-rays">
        <SideRays
          speed={1.6}
          rayColor1="#B497CF"
          rayColor2="#6C63FF"
          intensity={1.4}
          spread={1.7}
          origin="top-right"
          tilt={-8}
          saturation={1.2}
          blend={0.65}
          falloff={1.8}
          opacity={0.65}
        />
      </div>

      <div className="projects-content">
        <div className="projects-heading">
          <p className="projects-eyebrow">A curated collection of things I've built.</p>
        </div>

        <div className="projects-showcase">
          <div className="project-wheel-wrapper">
            <OptionWheel
              items={projects.map(project => project.wheelName)}
              defaultSelected={0}
              onChange={index => setSelectedIndex(index)}
              textColor="#666666"
              activeColor="#ffffff"
              side="left"
              fontSize={2.3}
              spacing={1.55}
              curve={1}
              tilt={7}
              blur={1.2}
              fade={0.22}
              minOpacity={0.06}
              smoothing={180}
              inset={40}
              loop
              draggable
              soundUrl="/sounds/wheel-tick.mp3"
              soundVolume={10.30}
            />
          </div>

          <SpotlightCard
            className="project-detail-card"
            spotlightColor="rgba(180, 151, 207, 0.18)"
          >
            <div key={selectedProject.title} className="project-detail-inner">
              <p className="project-number">
                0{selectedIndex + 1} / 0{projects.length}
              </p>

              <div className="project-tags">
                {selectedProject.tech.map(item => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <h2>{selectedProject.title}</h2>

              <p className="project-description">
                {selectedProject.description}
              </p>

              <div className="project-actions">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-action"
                >
                  <FaGithub size={17} />
                  GitHub
                </a>

                {selectedProject.preview && (
                  <a
                    href={selectedProject.preview}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action project-action-primary"
                  >
                    <ExternalLink size={17} />
                    Preview
                  </a>
                )}
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}

export default Projects;