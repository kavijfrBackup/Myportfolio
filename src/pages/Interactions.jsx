import { Link } from "react-router-dom";
import Plasma from "../components/Plasma";
import dashboardImg from "../assets/isuru/dashboard.png";
import "./Interactions.css";

function Interactions() {
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
          <div className="work-list">

            <Link
              to="/interactions/isuru-villa"
              className="work-item active"
            >
              <div className="work-index">01</div>

              <div className="work-main">
                <div className="work-topline">
                  <h2>Isuru Villa</h2>
                  <span className="work-status">Completed</span>
                </div>

                <p className="work-subtitle">
                  Villa Management System
                </p>

                <div className="work-meta">
                  <span>Commercial Project</span>
                  <span>Desktop Application</span>
                  <span>2026</span>
                </div>

                <div className="work-tech">
                  React · Electron · Spring Boot · PostgreSQL
                </div>

                <div className="work-link">
                  View Case Study →
                </div>
              </div>
            </Link>

          </div>

          <div className="work-preview">
            <div className="preview-frame">
              <img
                src={dashboardImg}
                alt="Isuru Villa management system dashboard preview"
              />
            </div>

            <div className="preview-caption">
              <span>Featured Interaction</span>
              <p>
                A completed desktop management system built for the day-to-day
                operations of Isuru Villa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Interactions;