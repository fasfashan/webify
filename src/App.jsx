import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
function App() {
  return (
    <>
      <div className="max-w-6xl m-auto">
        <Header />
        <HeroSection />
      </div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </>
  );
}

export default App;
