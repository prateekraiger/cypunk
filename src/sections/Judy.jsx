import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useRef } from "react";

const Judy = () => {
  const [activeHolo, setActiveHolo] = useState(null);
  const holoRef = useRef();

  useGSAP(() => {
    gsap.set(".judy-life", { marginTop: "-80vh" });

    gsap.to(
      ".judy-life .img-box",
      {
        scrollTrigger: {
          trigger: ".judy-life",
          start: "top center",
          end: "80% center",
          scrub: 2,
        },
        y: -300,
        duration: 1,
        ease: "power1.inOut",
      },
      "<"
    );

    // Cyberpunk hologram effects
    gsap.fromTo(".judy-profile", {
      opacity: 0,
      scale: 0.8,
      rotationY: -30
    }, {
      opacity: 1,
      scale: 1,
      rotationY: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".judy-life",
        start: "top 70%",
        end: "30% center",
        scrub: 1
      }
    });

    // Neural network animation
    gsap.to(".neural-line", {
      strokeDashoffset: -1000,
      duration: 3,
      repeat: -1,
      ease: "none"
    });

    // Data corruption effect
    gsap.to(".glitch-judy", {
      x: () => Math.random() * 4 - 2,
      y: () => Math.random() * 4 - 2,
      duration: 0.1,
      repeat: -1,
      yoyo: true,
      repeatDelay: Math.random() * 3 + 1
    });
  });

  const techSpecs = [
    { label: "BRAINDANCE_TECH", value: "EXPERT", status: "ONLINE" },
    { label: "NEURAL_INTERFACE", value: "v2.4.7", status: "STABLE" },
    { label: "ENCRYPTION_LVL", value: "MILITARY", status: "ACTIVE" },
    { label: "MOX_CLEARANCE", value: "ALPHA", status: "VERIFIED" }
  ];

  const biometricData = [
    { metric: "HEART_RATE", value: "72 BPM", color: "green" },
    { metric: "NEURAL_ACTIVITY", value: "ELEVATED", color: "cyan" },
    { metric: "STRESS_LEVEL", value: "MODERATE", color: "orange" },
    { metric: "SYNC_RATE", value: "98.7%", color: "magenta" }
  ];

  return (
    <section className="judy-life relative">
      {/* Neural Network Background */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 1000 1000">
        {[...Array(20)].map((_, i) => (
          <line
            key={i}
            className="neural-line stroke-cyan-400"
            strokeWidth="1"
            strokeDasharray="10,5"
            x1={Math.random() * 1000}
            y1={Math.random() * 1000}
            x2={Math.random() * 1000}
            y2={Math.random() * 1000}
          />
        ))}
      </svg>

      <div className="flex flex-col gap-5 items-end img-box lg:1/2 ps-10 mt-96">
        {/* Enhanced Judy Images with Cyberpunk Frames */}
        <div className="judy-1 relative group">
          <div className="cyber-border overflow-hidden">
            <img 
              src="/images/Judy-1.webp" 
              className="glitch-judy transition-all duration-500 group-hover:scale-110 group-hover:hue-rotate-15"
              alt="Judy Alvarez"
            />
            
            {/* Holographic overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 via-transparent to-magenta-400/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            {/* Bio readout */}
            <div className="absolute top-2 left-2 font-mono text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div>[SCAN_MODE: ACTIVE]</div>
              <div>[ID: JUDY_ALVAREZ]</div>
              <div>[STATUS: HOSTILE]</div>
            </div>
          </div>
        </div>
        
        <div className="judy-3 relative group">
          <div className="cyber-border overflow-hidden">
            <img 
              src="/images/Judy-3.webp" 
              className="glitch-judy transition-all duration-500 group-hover:scale-110 group-hover:hue-rotate-30"
              alt="Judy Alvarez Tech"
            />
            
            {/* Tech interface overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-black/80 p-4 rounded border border-cyan-400 font-mono text-cyan-400 text-xs">
                <div className="text-center mb-2 text-sm">TECH_ANALYSIS</div>
                <div>BD_SKILL: EXPERT</div>
                <div>HACK_LVL: 8/10</div>
                <div>THREAT: MODERATE</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 judy-life-content relative z-10">
        {/* Enhanced Character Profile */}
        <div className="max-w-xl lg:ps-32 ps-10 judy-profile">
          {/* Character Header */}
          <div className="glassmorphism p-6 rounded-lg border border-magenta-400/30 mb-8">
            <h1 className="text-6xl font-cyberpunk cyber-glow-magenta mb-2">JUDY ALVAREZ</h1>
            
            {/* Role and Status */}
            <div className="flex items-center space-x-4 mb-4 font-mono text-sm">
              <span className="text-magenta-400">[ROLE: BD_TECHNICIAN]</span>
              <span className="text-green-400">[STATUS: ACTIVE]</span>
            </div>
            
            <h2 className="text-magenta-400 text-xl md:text-2xl mb-4 font-mono">
              &gt; NEURAL.ARCHITECT_PROTOCOL
            </h2>
            
            <div className="border-l-2 border-magenta-400 pl-4 text-white/90 font-mono text-lg leading-relaxed">
              <span className="text-orange-400">[PROFILE]</span> A skilled braindance technician with a strong moral compass and anarchist tendencies.
            </div>
          </div>

          {/* Tech Specifications */}
          <div className="glassmorphism p-4 rounded-lg border border-cyan-400/30 mb-6">
            <h3 className="text-cyan-400 font-mono text-sm mb-3">TECHNICAL_SPECIFICATIONS</h3>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {techSpecs.map((spec, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-cyan-400">{spec.label}:</span>
                  <span className={`text-${spec.status === 'ONLINE' || spec.status === 'ACTIVE' || spec.status === 'VERIFIED' ? 'green' : 'orange'}-400`}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Character Bio */}
          <div className="space-y-4 text-white/90 font-mono leading-relaxed">
            <div className="border-l-2 border-cyan-400 pl-4">
              <span className="text-cyan-400">[ORIGIN]</span> Born in Laguna Bend, Judy is a deeply empathetic and independent individual. She uses her technical skills to help others, rejecting corporate offers.
            </div>
            
            <div className="border-l-2 border-green-400 pl-4">
              <span className="text-green-400">[AFFILIATION]</span> A member of the Mox gang, she fights for the marginalized in Night City.
            </div>
          </div>
        </div>

        {/* Central Character Image with Enhanced Effects */}
        <div className="judy-2 relative my-8">
          <div className="cyber-border overflow-hidden group">
            <img 
              src="/images/Judy-2.webp" 
              className="glitch-judy transition-all duration-700 group-hover:scale-105"
              alt="Judy Alvarez Main"
            />
            
            {/* Biometric Display */}
            <div className="absolute top-4 right-4 glassmorphism p-3 rounded opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="text-xs font-mono text-cyan-400 space-y-1">
                <div className="text-center mb-2 text-sm">BIOMETRIC_DATA</div>
                {biometricData.map((data, index) => (
                  <div key={index} className="flex justify-between space-x-4">
                    <span className={`text-${data.color}-400`}>{data.metric}:</span>
                    <span className="text-white">{data.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Neural Activity Visualization */}
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="h-8 border border-cyan-400 rounded bg-black/50 flex items-center px-2 space-x-1">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-cyan-400 rounded-full animate-pulse"
                    style={{
                      height: `${Math.random() * 100 + 10}%`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  ></div>
                ))}
              </div>
              <div className="text-xs font-mono text-cyan-400 mt-1 text-center">
                NEURAL_PATTERN_ANALYSIS
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Character Analysis */}
        <div className="max-w-xl lg:ps-32 ps-10">
          <div className="glassmorphism p-4 rounded-lg border border-orange-400/30">
            <div className="border-l-2 border-orange-400 pl-4 text-white/90 font-mono leading-relaxed">
              <span className="text-orange-400">[PSYCHOLOGICAL_PROFILE]</span> Judy's anarchist spirit and inability to tolerate injustice often lead her into trouble, but these traits are also her greatest virtues. She is driven by a desire to improve the lives of Night City's residents.
            </div>
            
            {/* Threat Assessment */}
            <div className="mt-4 pt-4 border-t border-orange-400/30">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-orange-400">THREAT_LEVEL:</span>
                <span className="text-yellow-400">MODERATE</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-orange-400">RELIABILITY:</span>
                <span className="text-green-400">HIGH</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-orange-400">CORPORATE_RISK:</span>
                <span className="text-red-400">EXTREME</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scanning overlay */}
      <div className="absolute inset-0 scan-lines pointer-events-none opacity-10"></div>
    </section>
  );
};

export default Judy;
