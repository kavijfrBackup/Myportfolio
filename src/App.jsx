import PageSEO from "./components/PageSEO";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Stuff from "./pages/Stuff";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
                    title="Stuff | kavijfr"
                    description="Experiments, creative ideas, and other stuff by Kavija."
                    canonical="https://kavija.me/stuff"
                  />

                  <Stuff />
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