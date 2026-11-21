import AnimatedBackground from './components/common/AnimatedBackground';
import BottomNav from './components/layout/BottomNav';
import About from './sections/About';
import Contact from './sections/Contact';
import Education from './sections/Education';
// import Experience from './sections/Experience';
import Hero from './sections/Hero';
import ProblemSolving from './sections/ProblemSolving';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

function App() {
  return (
    <div className="relative min-h-dvh pb-24">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <AnimatedBackground />
      <main id="main">
        <Hero />
        <About />
        {/* <Experience /> */}
        <Education />
        <Skills />
        <Projects />
        <ProblemSolving />
        <Contact />
      </main>
      <BottomNav />
    </div>
  );
}

export default App;
