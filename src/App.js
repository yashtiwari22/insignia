import "./App.css";
import About from "./components/about/About";
import Download from "./components/download/Download";
import EndSection from "./components/endSection/EndSection";
import Features from "./components/features/Features";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <div className="container-large">
      <Header />
      <HeroSection />
      <About />
      <Features />
      <Download />
      <Testimonials />
      <EndSection />
    </div>
  );
}

export default App;
