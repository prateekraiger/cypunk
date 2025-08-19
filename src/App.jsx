import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import FirstVideo from "./sections/FirstVideo";
import V from "./sections/V";
import SecondVideo from "./sections/SecondVideo";
import Judy from "./sections/Judy.jsx";
import PostCard from "./sections/PostCard";
import Final from "./sections/Final";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />

      <FirstVideo />
      <V />

      <SecondVideo />
      <Judy />

      <PostCard />
      <Final />
    </main>
  );
};

export default App;
