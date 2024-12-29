import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Cards from "./components/Cards/Cards";
import OurServices from "./components/OurServices/OurServices";
import Counters from "./components/Counters/Counters";
import Details from "./components/Details/Details";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <HeroSection />
      <Cards />
      <OurServices />
      <Counters />
      <Details />
    </div>
  );
}

export default App;
