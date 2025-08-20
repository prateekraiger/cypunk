import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";

import { useMaskSettings } from "../../constants";

const Hero = () => {
  const { initialMaskPos, initialMaskSize, maskPos, maskSize } =
    useMaskSettings();
  
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showInterface, setShowInterface] = useState(false);

  useEffect(() => {
    // Simulate system boot sequence
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setShowInterface(true), 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    // Cyberpunk loading animation
    gsap.set(".cyber-loader", { opacity: 1 });
    gsap.set(".hero-main-content", { opacity: 0 });
    
    // Boot sequence animation
    const bootTl = gsap.timeline();
    
    bootTl.to(".boot-line", {
      opacity: 1,
      duration: 0.1,
      stagger: 0.05,
      ease: "none"
    })
    .to(".cyber-loader", {
      opacity: 0,
      duration: 0.5,
      delay: 2,
      onComplete: () => {
        gsap.set(".hero-main-content", { opacity: 1 });
      }
    });

    // Main hero animation
    gsap.set(".mask-wrapper", {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
    });

    gsap.set(".mask-logo", { marginTop: "-100vh", opacity: 0 });
    gsap.set(".entrance-message", { marginTop: "0vh" });

    // Cyberpunk glitch effects
    gsap.to(".cyber-title", {
      textShadow: "0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        scrub: 1,
        end: "+=200%",
        pin: true,
      },
    });

    tl.to(".fade-out", { opacity: 0, stagger: 0.1, ease: "power1.inOut" })
      .to(".scale-out", { scale: 1, ease: "power1.inOut" })
      .to(".mask-wrapper", { maskSize, ease: "power1.inOut", duration: 1.5 }, "<")
      .to(".mask-logo", { marginTop: "0vh", opacity: 1, ease: "bounce.out", duration: 1 }, "<+0.5")
      .to(
        ".overlay-logo",
        {
          opacity: 1,
          onComplete: () => {
            gsap.to(".overlay-logo", { opacity: 0 });
          },
        },
        "<"
      )
      .to(
        ".entrance-message",
        {
          duration: 1,
          ease: "power1.inOut",
          maskImage:
            "radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)",
        },
        "<"
      );

    // Continuous cyberpunk effects
    gsap.to(".data-stream", {
      y: "100vh",
      duration: 3,
      repeat: -1,
      stagger: 0.5,
      ease: "none"
    });

    gsap.to(".glitch-overlay", {
      opacity: 0.1,
      duration: 0.1,
      repeat: -1,
      yoyo: true,
      repeatDelay: Math.random() * 5 + 2
    });
  });

  const bootMessages = [
    "INITIALIZING NEURAL INTERFACE...",
    "LOADING CYBERNETIC SYSTEMS...",
    "CONNECTING TO MAINFRAME...",
    "ESTABLISHING SECURE CONNECTION...",
    "ACTIVATING VISUAL CORTEX...",
    "SYSTEM READY"
  ];

  return (
    <section className="hero-section relative overflow-hidden">
      {/* Cyberpunk Loading Screen */}
      {!showInterface && (
        <div className="cyber-loader absolute inset-0 z-50 bg-black flex flex-col justify-center items-center font-mono">
          <div className="text-center space-y-4">
            <div className="text-4xl font-cyberpunk text-cyan-400 cyber-glow-cyan mb-8">
              CYBERPUNK INTERFACE
            </div>
            
            {/* Boot Messages */}
            <div className="space-y-2 mb-8">
              {bootMessages.map((message, index) => (
                <div 
                  key={index}
                  className={`boot-line text-green-400 text-sm opacity-0 ${index === bootMessages.length - 1 ? 'text-cyan-400 text-lg' : ''}`}
                >
                  &gt; {message}
                </div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="w-80 h-2 border border-cyan-400 relative">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 to-magenta-400 transition-all duration-300 cyber-glow"
                style={{ width: `${Math.min(loadingProgress, 100)}%` }}
              ></div>
            </div>
            <div className="text-cyan-400 text-sm">
              {Math.floor(loadingProgress)}% COMPLETE
            </div>
          </div>

          {/* Matrix-style data streams */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="data-stream absolute text-green-400 font-mono text-xs opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              >
                {Math.random().toString(36).substring(7)}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Hero Content */}
      <div className="hero-main-content">
        {/* Background with cyberpunk effects */}
        <div className="size-full mask-wrapper relative">
          <img
            src="/images/hero-bg.webp"
            alt="background"
            className="scale-out"
          />
          
          {/* Cyberpunk overlay effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
          
          {/* Glitch overlay */}
          <div className="glitch-overlay absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-magenta-400/10 opacity-0"></div>
          
          {/* Grid overlay */}
          <div className="absolute inset-0 hex-pattern opacity-30"></div>
          
          <img
            src="/images/hero-text.webp"
            alt="hero-logo"
            className="title-logo fade-out cyber-title"
          />
        </div>

        <div>
          <img
            src="/images/big-hero-text.svg"
            alt="logo"
            className="size-full object-cover mask-logo"
          />
        </div>

        <div className="fake-logo-wrapper">
          <img src="/images/big-hero-text.svg" className="overlay-logo" />
        </div>

        {/* Cyberpunk UI Elements */}
        <div className="absolute top-20 left-10 space-y-2 font-mono text-xs text-cyan-400">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>NEURAL LINK: ACTIVE</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span>INTERFACE: ONLINE</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span>SECURITY: ENCRYPTED</span>
          </div>
        </div>

        {/* Cyberpunk HUD Elements */}
        <div className="absolute bottom-20 right-10 space-y-4 font-mono text-xs text-cyan-400">
          <div className="glassmorphism p-3 rounded-lg">
            <div className="text-green-400 mb-1">SYSTEM STATUS</div>
            <div className="space-y-1">
              <div>CPU: 100%</div>
              <div>MEM: 87.3%</div>
              <div>NET: SECURE</div>
            </div>
          </div>
        </div>

        {/* Scanning lines */}
        <div className="absolute inset-0 scan-lines pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Hero;
