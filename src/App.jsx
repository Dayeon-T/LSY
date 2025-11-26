import Navbar from "./components/Navbar/Navbar";
import Intro from "./sections/Intro";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Career from "./sections/Career";
import Education from "./sections/Education";
import Velog from "./sections/Velog";
import Footer from "./sections/Footer";
import "./styles/global.css";
import NameLogo from "./components/IntroAnimation/NameLogo";

function App() {
  return (
    <>
      <section id="intro" style={{ minHeight: "30vh" }}>
        <Intro />
      </section>

      <Navbar />

      <section id="skills" style={{ minHeight: "30vh" }}>
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="career">
        <Career />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="velog">
        <Velog />
      </section>

      <Footer />
    </>
  );
}

export default App;
