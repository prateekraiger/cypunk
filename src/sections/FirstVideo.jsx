import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from "react"

const FirstVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useGSAP(() => {
    gsap.set('.first-vd-wrapper', { marginTop: '-150vh', opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.first-vd-wrapper',
        start: 'top top',
        end: '+=200% top',
        scrub: true,
        pin: true,
      }
    })

    tl.to('.hero-section', { delay: 0.5, opacity: 0, ease: 'power1.inOut' });
    tl.to('.first-vd-wrapper', { opacity: 1, duration: 2, ease: 'power1.inOut' });

    // Cyberpunk video interface animations
    gsap.to('.video-interface', {
      opacity: 1,
      duration: 1,
      delay: 1.5
    });

    gsap.to('.data-ticker', {
      x: '-100%',
      duration: 10,
      repeat: -1,
      ease: 'none'
    });

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, { currentTime: videoRef.current.duration, duration: 3, ease: 'power1.inOut' }, '<');
    }
  }, []);

  const handlePlayToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="first-vd-wrapper relative">
      <div className="h-dvh relative overflow-hidden">
        <video 
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output1.mp4"
          className="first-vd"
        />
        
        {/* Cyberpunk Video Interface Overlay */}
        <div className="video-interface absolute inset-0 pointer-events-none opacity-0">
          {/* Top HUD */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
            <div className="glassmorphism p-3 rounded font-mono text-xs text-cyan-400">
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <span>REC 00:45:23</span>
              </div>
              <div className="text-green-400">FEED: LIVE_NEURAL_LINK</div>
            </div>
            
            <div className="glassmorphism p-3 rounded font-mono text-xs text-cyan-400">
              <div>LOCATION: NIGHT_CITY</div>
              <div>SECTOR: WATSON</div>
              <div className="text-yellow-400">THREAT_LEVEL: HIGH</div>
            </div>
          </div>

          {/* Bottom Interface */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            {/* Data Stream Ticker */}
            <div className="overflow-hidden mb-4">
              <div className="data-ticker flex space-x-8 text-green-400 font-mono text-xs whitespace-nowrap">
                <span>NEURAL_DATA_STREAM_ACTIVE</span>
                <span>BIOMETRIC_READINGS_STABLE</span>
                <span>SECURITY_PROTOCOLS_ENGAGED</span>
                <span>MAINFRAME_CONNECTION_SECURE</span>
                <span>CYBERNETIC_ENHANCEMENT_ONLINE</span>
              </div>
            </div>

            {/* Video Controls */}
            <div className="glassmorphism rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={handlePlayToggle}
                    className="cyber-button px-4 py-2 text-sm pointer-events-auto"
                  >
                    {isPlaying ? 'PAUSE' : 'PLAY'}
                  </button>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-cyan-400 font-mono text-xs">NEURAL_FEED</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 font-mono text-xs">
                  <div className="text-cyan-400">CODEC: H.264_NEURAL</div>
                  <div className="text-green-400">QUALITY: 4K_HDR</div>
                  <div className="text-yellow-400">ENCRYPTION: MILITARY</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-3">
                <div className="w-full h-1 bg-gray-800 rounded">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-magenta-400 rounded transition-all duration-300 w-1/3"></div>
                </div>
                <div className="flex justify-between mt-1 text-xs font-mono text-cyan-400">
                  <span>00:45:23</span>
                  <span>02:17:56</span>
                </div>
              </div>
            </div>
          </div>

          {/* Side Panel Data */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <div className="glassmorphism p-3 rounded font-mono text-xs text-cyan-400 space-y-2">
              <div className="text-center text-sm mb-2 text-magenta-400">BIOMETRICS</div>
              <div className="flex justify-between">
                <span>HR:</span>
                <span className="text-green-400">72 BPM</span>
              </div>
              <div className="flex justify-between">
                <span>BP:</span>
                <span className="text-yellow-400">120/80</span>
              </div>
              <div className="flex justify-between">
                <span>TEMP:</span>
                <span className="text-cyan-400">36.7°C</span>
              </div>
              <div className="flex justify-between">
                <span>STRESS:</span>
                <span className="text-orange-400">MODERATE</span>
              </div>
            </div>
          </div>

          {/* Corner Brackets */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-400"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-400"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400"></div>
        </div>

        {/* Scan Lines Effect */}
        <div className="absolute inset-0 scan-lines pointer-events-none opacity-20"></div>
        
        {/* Cyberpunk Glitch Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/5 via-transparent to-magenta-400/5 pointer-events-none"></div>
      </div>
    </section>
  )
}

export default FirstVideo