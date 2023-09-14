import "./App.css";
import About from "./components/About/About";
import Cause from "./components/Causes/Cause";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import FeaturedProjects from "./components/Projects/Projects";
import Team from "./components/Team/Team";
import Volunteer from "./components/Volunteer/Volunteer";
import OurWork from "./components/Work/OurWork";
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Cause />
      <Volunteer />
      <OurWork />
      <FeaturedProjects />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
