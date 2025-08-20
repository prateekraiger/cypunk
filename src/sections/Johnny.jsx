import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import CharacterProfile from '../components/cyberpunk/CharacterProfile';
import { CYBERPUNK_CHARACTERS } from '../constants/characters';
import TerminalWindow from '../components/ui/TerminalWindow';

const Johnny = () => {
  const sectionRef = useRef(null);
  const character = CYBERPUNK_CHARACTERS.JOHNNY;

  const terminalCommands = [
    {
      input: "access_engram --id=johnny_silverhand",
      output: [
        "WARNING: Accessing dangerous digital construct",
        "Subject: Johnny Silverhand",
        "Status: DIGITAL GHOST - EXTREME CAUTION",
        "Threat Assessment: LEGENDARY",
        "Note: Subject exhibits anti-corporate tendencies"
      ]
    },
    {
      input: "neural_compatibility_scan",
      output: [
        "Scanning host neural patterns...",
        "Compatibility: 28% (DANGEROUS)",
        "Risk of psychological contamination: HIGH",
        "Recommendation: Immediate extraction advised"
      ]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section entrance animation
      gsap.fromTo(sectionRef.current, 
        { 
          opacity: 0,
          y: 100 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Glitch effect for the section
      gsap.to(sectionRef.current, {
        textShadow: "2px 0 #ff00c1, -2px 0 #00fff9",
        duration: 0.1,
        repeat: -1,
        yoyo: true,
        repeatDelay: Math.random() * 3 + 2
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black py-20 px-4 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(138,43,226,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] opacity-5" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 border border-purple-500/30 rotate-45 animate-spin-slow" />
      <div className="absolute bottom-20 right-10 w-48 h-48 border border-red-500/30 rotate-12 animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-cyan-400 mb-4">
            DIGITAL GHOST
          </h1>
          <div className="text-xl text-gray-400 font-mono">
            {">>> ACCESSING ENGRAM DATA..."}
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-purple-500 mx-auto mt-4" />
        </div>

        {/* Terminal Window */}
        <div className="mb-12">
          <TerminalWindow 
            title="ENGRAM_SCANNER.exe"
            commands={terminalCommands}
            className="max-w-2xl mx-auto"
          />
        </div>

        {/* Character Profile */}
        <CharacterProfile 
          character={character}
          className="animate-fade-in-up"
        />

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Samurai Band Info */}
          <div className="bg-black/60 border-2 border-red-500 p-6 shadow-[0_0_20px_#FF0040]">
            <h3 className="text-xl font-bold text-red-400 mb-3">SAMURAI</h3>
            <p className="text-gray-300 text-sm">
              Former lead guitarist and vocalist of the legendary rockerboy band Samurai. 
              Known for hits like "Never Fade Away" and "Chippin' In".
            </p>
          </div>

          {/* Anti-Corp Activity */}
          <div className="bg-black/60 border-2 border-purple-500 p-6 shadow-[0_0_20px_#8A2BE2]">
            <h3 className="text-xl font-bold text-purple-400 mb-3">TERRORIST</h3>
            <p className="text-gray-300 text-sm">
              Led numerous attacks against Arasaka Corporation. 
              Responsible for the 2023 bombing of Arasaka Tower.
            </p>
          </div>

          {/* Current Status */}
          <div className="bg-black/60 border-2 border-cyan-500 p-6 shadow-[0_0_20px_#00FFFF]">
            <h3 className="text-xl font-bold text-cyan-400 mb-3">CONSTRUCT</h3>
            <p className="text-gray-300 text-sm">
              Exists as a digital consciousness within the Relic biochip. 
              Seeks to complete his unfinished war against the corporations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Johnny;