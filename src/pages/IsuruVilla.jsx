import Plasma from "../components/Plasma";
import "./Stuff.css";

import dashboardImg from "../assets/isuru/dashboard.png";
import addRecordImg from "../assets/isuru/add-record.png";
import roomsImg from "../assets/isuru/rooms.png";
import incomeImg from "../assets/isuru/income.png";
import auditImg from "../assets/isuru/audit.png";

function IsuruVilla() {
  return (
    <section className="stuff-page">
      {/* Background */}
      <div className="stuff-plasma">
        <Plasma
          color="#B497CF"
          speed={0.30}
          direction="forward"
          scale={1.1}
          opacity={0.45}
          mouseInteractive={false}
          renderScale={0.45}
          maxDpr={1}
          targetFps={24}
          iterations={50}
        />
      </div>

      {/* Main Content */}
      <div className="interaction-content">

        {/* HERO */}
        <section className="interaction-hero">
          <p className="interaction-kicker">01 / INTERACTION</p>

          <h1 className="interaction-title">
            ISURU
            <br />
            VILLA
          </h1>

          <p className="interaction-intro">
            A management platform designed and built around the daily
            operations of a working villa.
          </p>

          <div className="interaction-actions">
            <a href="#project" className="interaction-btn primary-btn">
              Explore Project ↓
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Isuru+Villa+22%2FA%2F3+Gurugoda+Poruwadanda+Horana"
              target="_blank"
              rel="noopener noreferrer"
              className="interaction-btn secondary-btn"
            >
              View on Maps ↗
            </a>
          </div>
        </section>

        {/* PROJECT FACTS */}
        <section className="project-facts" id="project">
          <div className="fact">
            <span>Client</span>
            <strong>Isuru Villa</strong>
          </div>

          <div className="fact">
            <span>Role</span>
            <strong>Full-Stack Developer</strong>
          </div>

          <div className="fact">
            <span>Type</span>
            <strong>Commercial Project</strong>
          </div>

          <div className="fact">
            <span>Platform</span>
            <strong>Desktop Application</strong>
          </div>

          <div className="fact">
            <span>Year</span>
            <strong>2026</strong>
          </div>

          <div className="fact">
            <span>Status</span>
            <strong>Completed</strong>
          </div>
        </section>

        {/* CONTEXT */}
        <section className="interaction-section">
          <p className="section-number">02</p>

          <div className="section-content">
            <p className="section-label">THE CONTEXT</p>

            <h2>
              Built around the way the villa actually operates.
            </h2>

            <p>
              Isuru Villa needed a more structured way to handle day-to-day
              operations including guests, stays, rooms, payments, cleaning
              status and administrative records.
            </p>

            <p>
              The goal was to bring those workflows together into one
              dedicated management system.
            </p>
          </div>
        </section>

        {/* SOLUTION */}
        <section className="interaction-section">
          <p className="section-number">03</p>

          <div className="section-content">
            <p className="section-label">THE SOLUTION</p>

            <h2>
              One system for the core operations.
            </h2>

            <p>
              The desktop application centralizes the villa's operational
              workflow into a single interface designed for everyday use.
            </p>
          </div>
        </section>

        {/* FEATURES */}
        <section className="features-section">
          <p className="section-label">CORE SYSTEM</p>

          <div className="feature-list">
            <div className="feature-row">
              <span>01</span>
              <h3>Guest & Stay Management</h3>
            </div>

            <div className="feature-row">
              <span>02</span>
              <h3>Room Management</h3>
            </div>

            <div className="feature-row">
              <span>03</span>
              <h3>Checkout Workflow</h3>
            </div>

            <div className="feature-row">
              <span>04</span>
              <h3>Cleaning Status</h3>
            </div>

            <div className="feature-row">
              <span>05</span>
              <h3>Income & Reporting</h3>
            </div>

            <div className="feature-row">
              <span>06</span>
              <h3>User Roles</h3>
            </div>

            <div className="feature-row">
              <span>07</span>
              <h3>Audit History</h3>
            </div>

            <div className="feature-row">
              <span>08</span>
              <h3>Backup & Recovery</h3>
            </div>
          </div>
        </section>

        <section className="product-showcase">
          <p className="section-label">04 / INSIDE THE PRODUCT</p>

          <div className="showcase-featured">
            <div className="showcase-image-wrap featured-image">
              <img
                src={dashboardImg}
                alt="Isuru Villa management system dashboard"
              />
            </div>

            <div className="showcase-copy">
              <span>01 / Operations Dashboard</span>
              <h2>A clear view of day-to-day villa activity.</h2>
              <p>
                The dashboard brings together current stays, room information,
                operational activity and key data in one central view.
              </p>
            </div>
          </div>

          <div className="showcase-grid">
            <article className="showcase-item">
              <div className="showcase-image-wrap">
                <img
                  src={addRecordImg}
                  alt="Isuru Villa stay creation screen"
                />
              </div>

              <div className="showcase-copy small">
                <span>02 / Stay Creation</span>
                <h3>Structured guest and reservation entry.</h3>
                <p>
                  Guest information, room selection, stay details and pricing are
                  handled through a dedicated workflow.
                </p>
              </div>
            </article>

            <article className="showcase-item">
              <div className="showcase-image-wrap">
                <img
                  src={roomsImg}
                  alt="Isuru Villa room management screen"
                />
              </div>

              <div className="showcase-copy small">
                <span>03 / Room Operations</span>
                <h3>Room status and availability in one place.</h3>
                <p>
                  Designed to make everyday room management easier to understand
                  and maintain.
                </p>
              </div>
            </article>

            <article className="showcase-item">
              <div className="showcase-image-wrap">
                <img
                  src={incomeImg}
                  alt="Isuru Villa income tracking screen"
                />
              </div>

              <div className="showcase-copy small">
                <span>04 / Financial Tracking</span>
                <h3>Better visibility into income.</h3>
                <p>
                  Financial information is presented clearly to support daily
                  operational tracking and reporting.
                </p>
              </div>
            </article>

            <article className="showcase-item">
              <div className="showcase-image-wrap">
                <img
                  src={auditImg}
                  alt="Isuru Villa audit log screen"
                />
              </div>

              <div className="showcase-copy small">
                <span>05 / Audit History</span>
                <h3>Accountability built into the system.</h3>
                <p>
                  Administrative actions are recorded so activity can be reviewed
                  when needed.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* BUILD */}
        <section className="build-section">
          <p className="section-label">05 / THE BUILD</p>

          <div className="stack-list">
            <div className="stack-row">
              <span>Frontend</span>
              <strong>React</strong>
            </div>

            <div className="stack-row">
              <span>Desktop Shell</span>
              <strong>Electron</strong>
            </div>

            <div className="stack-row">
              <span>Backend</span>
              <strong>Spring Boot</strong>
            </div>

            <div className="stack-row">
              <span>Database</span>
              <strong>PostgreSQL</strong>
            </div>
          </div>
        </section>

        {/* OUTCOME */}
        <section className="interaction-section">
          <p className="section-number">06</p>

          <div className="section-content">
            <p className="section-label">THE OUTCOME</p>

            <h2>
              A centralized operational system for the villa.
            </h2>

            <div className="outcome-list">
              <p>Centralized guest records</p>
              <p>Structured stay management</p>
              <p>Clear room and cleaning status</p>
              <p>Better financial visibility</p>
              <p>Role-based system access</p>
              <p>Reliable operational history</p>
            </div>
          </div>
        </section>

        {/* PROJECT EVOLUTION */}
        <section className="evolution-section">
          <p className="section-label">07 / PROJECT EVOLUTION</p>

          <h2>Isuru Villa</h2>

          <div className="project-timeline">
            <div className="timeline-item completed">
              <div className="timeline-marker"></div>

              <div className="timeline-details">
                <h3>Desktop Management System</h3>
                <p className="timeline-status">Completed · 2026</p>
                <p>
                  Internal management platform for day-to-day villa operations.
                </p>
              </div>
            </div>

            <div className="timeline-line"></div>

            <div className="timeline-item upcoming">
              <div className="timeline-marker"></div>

              <div className="timeline-details">
                <h3>Public Website</h3>
                <p className="timeline-status">Upcoming</p>
                <p>
                  Planned after completion of the villa's new building so the
                  final website can properly represent the updated property and
                  guest experience.
                </p>
              </div>
            </div>
          </div>
        </section>

      

      </div>
    </section>
  );
}

export default IsuruVilla;