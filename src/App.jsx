import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import CyberpunkLoader from "./components/CyberpunkLoader";
import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import FirstVideo from "./sections/FirstVideo";
import V from "./sections/V";
import SecondVideo from "./sections/SecondVideo";
import Judy from "./sections/Judy.jsx";
import Johnny from "./sections/Johnny";
import Panam from "./sections/Panam";
import PostCard from "./sections/PostCard";
import Final from "./sections/Final";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling during loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <CyberpunkLoader onComplete={handleLoadingComplete} />}

      <main
        className={`transition-opacity duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <NavBar />
        <Hero />

        <V />

        <Judy />

        <Johnny />

        <Panam />

        <PostCard />
      </main>
    </>
  );
};

export default App;
