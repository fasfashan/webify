import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import SectionSeven from "./components/SectionSeven";
function App() {
  return (
    <>
      <div className="max-w-6xl m-auto ">
        <Header />
        <HeroSection />
      </div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
    </>
  );
}

export default App;
