import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import CharacterProfile from '../components/cyberpunk/CharacterProfile';
import { CYBERPUNK_CHARACTERS } from '../constants/characters';
import NeonCard from '../components/ui/NeonCard';

const Panam = () => {
  const sectionRef = useRef(null);
  const character = CYBERPUNK_CHARACTERS.PANAM;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Desert heat shimmer effect
      gsap.to(".heat-shimmer", {
        scaleY: 1.02,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });

      // Vehicle elements floating animation
      gsap.to(".floating-element", {
        y: -10,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.5
      });

      // Section reveal
      gsap.fromTo(sectionRef.current,
        { 
          opacity: 0,
          x: -100 
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-orange-900/30 via-black to-yellow-900/20 py-20 px-4 relative overflow-hidden"
    >
      {/* Desert Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,69,0,0.1),transparent_70%)]" />
      <div className="heat-shimmer absolute inset-0 bg-gradient-to-t from-transparent via-orange-500/5 to-transparent" />
      
      {/* Floating vehicle elements */}
      <div className="floating-element absolute top-32 right-20 w-16 h-16 border border-orange-400/50 rotate-45" />
      <div className="floating-element absolute bottom-40 left-16 w-12 h-12 border border-yellow-400/50 rotate-12" />
      <div className="floating-element absolute top-1/2 right-1/3 w-8 h-8 bg-orange-400/30 rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 mb-4">
            NOMAD WARRIOR
          </h1>
          <div className="text-xl text-gray-400 font-mono">
            {">>> BADLANDS NETWORK ACCESSED..."}
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto mt-4" />
        </div>

        {/* Character Profile */}
        <CharacterProfile 
          character={character}
          className="mb-12"
        />

        {/* Nomad Culture Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <NeonCard glowColor="orange" intensity="medium" className="p-8">
            <h3 className="text-2xl font-bold text-orange-400 mb-6">ALDECALDOS FAMILY</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                The Aldecaldos are one of the most respected nomad families in the Badlands. 
                They value loyalty, freedom, and family above all else.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">200+</div>
                  <div className="text-sm text-gray-400">Family Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">50+</div>
                  <div className="text-sm text-gray-400">Vehicles</div>
                </div>
              </div>
            </div>
          </NeonCard>

          <NeonCard glowColor="yellow" intensity="medium" className="p-8">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">BADLANDS EXPERTISE</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300">Expert Vehicle Mechanic</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300">Combat Driver</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300">Wasteland Survivor</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300">Family Leader</span>
              </div>
            </div>
          </NeonCard>
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <NeonCard glowColor="red" intensity="high" className="max-w-4xl mx-auto p-12">
            <blockquote className="text-2xl text-gray-300 italic mb-4">
              "Out here, we got each other's backs. That's what family means."
            </blockquote>
            <cite className="text-orange-400 font-bold">- Panam Palmer</cite>
          </NeonCard>
        </div>

        {/* Technical Specs */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/60 border-2 border-orange-500 p-6 shadow-[0_0_20px_#FF4500]">
            <h4 className="text-lg font-bold text-orange-400 mb-3">VEHICLE MASTERY</h4>
            <p className="text-gray-300 text-sm">
              Can repair, modify, and operate any vehicle in the Badlands. 
              Specializes in combat modifications and stealth systems.
            </p>
          </div>

          <div className="bg-black/60 border-2 border-yellow-500 p-6 shadow-[0_0_20px_#FFD700]">
            <h4 className="text-lg font-bold text-yellow-400 mb-3">COMBAT TACTICS</h4>
            <p className="text-gray-300 text-sm">
              Trained in guerrilla warfare and hit-and-run tactics. 
              Expert marksman with both conventional and tech weapons.
            </p>
          </div>

          <div className="bg-black/60 border-2 border-red-500 p-6 shadow-[0_0_20px_#FF0040]">
            <h4 className="text-lg font-bold text-red-400 mb-3">LEADERSHIP</h4>
            <p className="text-gray-300 text-sm">
              Rising leader within the Aldecaldos family. 
              Respected for her courage and determination to protect her people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Panam;