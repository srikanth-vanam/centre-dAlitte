import "./App.css";
import About from "./components/About/About";
import Cause from "./components/Causes/Cause";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import FeaturedProjects from "./components/Projects/Projects";
import Team from "./components/Team/Team";
import Testimonial from "./components/Testimonial/Testimonial";
import Volunteer from "./components/Volunteer/Volunteer";
import OurWork from "./components/Work/OurWork";
import Contact from "./components/ContactPage/Contact";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
function App() {
  return (
    <div>
      <Route path="/" exact>
        <Header />
        <Hero />
        <About />
        <Cause />
        <Volunteer />
        <OurWork />
        <FeaturedProjects />
        <Testimonial />
        <Team />
        <Events />
        <Footer />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </div>
  );
}

export default App;
