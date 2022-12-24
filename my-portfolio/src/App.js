import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Experiences from "./Components/Experiences";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
