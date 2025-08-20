import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

const V = () => {
  const [selectedTab, setSelectedTab] = useState('profile');
  
  useGSAP(() => {
    gsap.set(".v", { marginTop: "-80vh" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".v",
          start: "top 90%",
          end: "10% center",
          scrub: 2,
        },
      })
      .to(".first-vd", { opacity: 0, duration: 1, ease: "power1.inOut" });

    gsap.to(
      ".v .img-box",
      {
        scrollTrigger: {
          trigger: ".v",
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

    // Cyberpunk character card animations
    gsap.fromTo(".character-card", {
      opacity: 0,
      y: 50,
      rotationX: -15
    }, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".v",
        start: "top 80%",
        end: "50% center",
        scrub: 1
      }
    });

    // Glitch effect for character images
    gsap.to(".v-image", {
      filter: "hue-rotate(360deg)",
      duration: 10,
      repeat: -1,
      ease: "none"
    });

    // Data stream effect
    gsap.to(".data-line", {
      x: "100vw",
      duration: 3,
      repeat: -1,
      stagger: 0.5,
      ease: "none"
    });
  });

  const characterData = {
    profile: {
      title: "NEURAL PROFILE",
      stats: [
        { label: "REFLEXES", value: 85, color: "cyan" },
        { label: "BODY", value: 72, color: "green" },
        { label: "INTELLIGENCE", value: 94, color: "magenta" },
        { label: "TECHNICAL", value: 68, color: "orange" }
      ]
    },
    cybernetics: {
      title: "AUGMENTATIONS",
      stats: [
        { label: "NEURAL INTERFACE", value: 100, color: "cyan" },
        { label: "OPTIC IMPLANTS", value: 87, color: "green" },
        { label: "SUBDERMAL ARMOR", value: 65, color: "magenta" },
        { label: "REACTION TIME", value: 93, color: "orange" }
      ]
    },
    status: {
      title: "SYSTEM STATUS",
      stats: [
        { label: "HEALTH", value: 100, color: "green" },
        { label: "STAMINA", value: 78, color: "cyan" },
        { label: "STRESS", value: 34, color: "orange" },
        { label: "SYNC RATE", value: 96, color: "magenta" }
      ]
    }
  };

  return (
    <section className="v relative">
      {/* Background data streams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="data-line absolute text-cyan-400/20 font-mono text-xs"
            style={{
              top: `${20 + i * 15}%`,
              left: '-100px',
              animationDelay: `${i * 0.8}s`
            }}
          >
            {'> NEURAL_DATA_STREAM_' + String(i + 1).padStart(3, '0') + '_ENCRYPTED'}
          </div>
        ))}
      </div>

      <div className="max-w-lg v-content relative z-10">
        {/* Character Header with Cyberpunk Styling */}
        <div className="character-card glassmorphism p-6 mb-8 rounded-lg border border-cyan-400/30">
          <h1 className="text-8xl font-cyberpunk cyber-glow-cyan mb-4">V</h1>
          
          {/* Character Subtitle */}
          <h2 className="text-cyan-400 text-2xl md:text-3xl mb-6 font-mono">
            &gt; MERCENARY.PROTOCOL_ACTIVATED
          </h2>
          
          {/* Bio Display */}
          <div className="space-y-4 text-white/90 font-mono text-lg leading-relaxed">
            <div className="border-l-2 border-cyan-400 pl-4">
              <span className="text-green-400">[OBJECTIVE]</span> A mercenary outlaw going after a one-of-a-kind implant that is the key to immortality.
            </div>
            
            <div className="border-l-2 border-magenta-400 pl-4">
              <span className="text-magenta-400">[PROFILE]</span> V is a customizable character, so you can choose their gender, appearance, and backstory. They are a mercenary who gets caught up in the underworld of Night City.
            </div>
          </div>

          {/* Character Stats Interface */}
          <div className="mt-8">
            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-4">
              {Object.keys(characterData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-4 py-2 font-mono text-xs uppercase transition-all duration-300 ${
                    selectedTab === tab
                      ? 'bg-cyan-400/20 text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-cyan-400/60 hover:text-cyan-400'
                  }`}
                >
                  {tab.replace('_', ' ')}
                </button>
              ))}
            </div>

            {/* Stats Display */}
            <div className="space-y-3">
              <h3 className="text-cyan-400 font-mono text-sm">
                {characterData[selectedTab].title}
              </h3>
              {characterData[selectedTab].stats.map((stat, index) => (
                <div key={stat.label} className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className={`text-${stat.color}-400`}>{stat.label}</span>
                    <span className="text-white">{stat.value}%</span>
                  </div>
                  <div className="w-full h-1 bg-gray-800 rounded">
                    <div
                      className={`h-full bg-${stat.color}-400 rounded transition-all duration-1000 cyber-glow`}
                      style={{ width: `${stat.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Character Image with Cyberpunk Frame */}
        <div className="character-card v-2 relative">
          <div className="cyber-border rounded-lg overflow-hidden">
            <img src="/images/v-2.webp" className="v-image w-full h-full object-cover" alt="V Character" />
            
            {/* Image Overlay UI */}
            <div className="absolute top-2 left-2 right-2 flex justify-between text-xs font-mono text-cyan-400">
              <span>[SUBJECT_ID: V-2077]</span>
              <span>[STATUS: ONLINE]</span>
            </div>
            
            <div className="absolute bottom-2 left-2 right-2 text-xs font-mono text-green-400">
              <div className="flex justify-between">
                <span>BIOMETRIC: CONFIRMED</span>
                <span>NEURAL: STABLE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Character Gallery with Enhanced Cyberpunk Styling */}
      <div className="space-y-5 mt-96 img-box">
        <div className="character-card v-1 relative group">
          <div className="cyber-border overflow-hidden">
            <img src="/images/v-1.webp" className="v-image transition-all duration-500 group-hover:scale-105" alt="V Character Alt 1" />
            
            {/* Hover Info Panel */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <div className="text-center text-cyan-400 font-mono">
                <div className="text-lg mb-2">COMBAT MODE</div>
                <div className="text-sm">THREAT LEVEL: HIGH</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="character-card v-3 relative group">
          <div className="cyber-border overflow-hidden">
            <img src="/images/v-3.webp" className="v-image transition-all duration-500 group-hover:scale-105" alt="V Character Alt 2" />
            
            {/* Hover Info Panel */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <div className="text-center text-magenta-400 font-mono">
                <div className="text-lg mb-2">STEALTH MODE</div>
                <div className="text-sm">DETECTION: MINIMAL</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scanning overlay */}
      <div className="absolute inset-0 scan-lines pointer-events-none opacity-20"></div>
    </section>
  );
};

export default V;
