import PageSEO from "./components/PageSEO";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Interactions from "./pages/Interactions";
import IsuruVilla from "./pages/IsuruVilla";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <PageSEO
                    title="kavijfr | Software Developer & Cinematographer"
                    description="Portfolio of Kavija, a software developer and cinematographer showcasing software projects, web applications, creative work, and experiments."
                    canonical="https://kavija.me/"
                  />

                  <Home />
                </>
              }
            />

            <Route
              path="/projects"
              element={
                <>
                  <PageSEO
                    title="Projects | kavijfr"
                    description="Explore software and web development projects by Kavija, including LocalHub, Moodflix, GitHub Account Viewer, management systems, and more."
                    canonical="https://kavija.me/projects"
                  />

                  <Projects />
                </>
              }
            />

            <Route
            path="/stuff"
            element={
              <>
                <PageSEO
                  title="Interactions | kavijfr"
                  description="Commercial work, collaborations, and real-world systems by Kavija."
                  canonical="https://kavija.me/stuff"
                />

                <Interactions />
              </>
            }
            />

            <Route
              path="/interactions/isuru-villa"
              element={
                <>
                  <PageSEO
                    title="Isuru Villa | kavijfr"
                    description="A commercial villa management system designed and developed for Isuru Villa."
                    canonical="https://kavija.me/interactions/isuru-villa"
                  />

                  <IsuruVilla />
                </>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;