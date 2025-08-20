import { useState, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const CyberpunkLoader = ({ onComplete, duration = 3000 }) => {
  const [progress, setProgress] = useState(0)
  const [currentMessage, setCurrentMessage] = useState(0)

  const messages = [
    "INITIALIZING QUANTUM CORE...",
    "LOADING NEURAL PATHWAYS...",
    "ESTABLISHING DATA LINKS...",
    "ACTIVATING VISUAL CORTEX...",
    "INTERFACE READY"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = Math.min(prev + Math.random() * 10 + 5, 100)
        
        // Update message based on progress
        const messageIndex = Math.floor((newProgress / 100) * (messages.length - 1))
        setCurrentMessage(messageIndex)
        
        if (newProgress >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 500)
        }
        
        return newProgress
      })
    }, 100)

    return () => clearInterval(interval)
  }, [onComplete, messages.length])

  useGSAP(() => {
    // Animate loader elements
    gsap.fromTo('.loader-text', {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1
    })

    // Glitch effect for title
    gsap.to('.loader-title', {
      textShadow: '2px 0 #FF00FF, -2px 0 #00FFFF',
      duration: 0.1,
      repeat: -1,
      yoyo: true,
      repeatDelay: 2
    })

    // Matrix rain effect
    gsap.to('.matrix-char', {
      y: '100vh',
      opacity: 0,
      duration: 2,
      repeat: -1,
      stagger: 0.1,
      ease: 'none'
    })
  })

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col justify-center items-center overflow-hidden">
      {/* Matrix Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="matrix-char absolute text-green-400 font-mono text-sm opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              top: '-20px'
            }}
          >
            {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
          </div>
        ))}
      </div>

      {/* Main Loader Content */}
      <div className="text-center space-y-8 z-10">
        {/* Title */}
        <h1 className="loader-title loader-text text-4xl md:text-6xl font-cyberpunk text-cyan-400 cyber-glow-cyan">
          CYBERPUNK
        </h1>

        {/* Subtitle */}
        <div className="loader-text text-magenta-400 text-xl font-mono">
          NEURAL INTERFACE
        </div>

        {/* Current Message */}
        <div className="loader-text text-green-400 text-sm font-mono h-6">
          &gt; {messages[currentMessage]}
        </div>

        {/* Progress Bar */}
        <div className="loader-text w-80 space-y-2">
          <div className="flex justify-between text-xs font-mono text-cyan-400">
            <span>LOADING</span>
            <span>{Math.floor(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-gray-800 border border-cyan-400 relative overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 via-magenta-400 to-green-400 transition-all duration-300 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Loading Animation */}
        <div className="loader-text flex justify-center space-x-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 border-2 border-cyan-400 rounded-full"
              style={{
                animation: `pulse-glow 1.5s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`
              }}
            ></div>
          ))}
        </div>

        {/* System Info */}
        <div className="loader-text grid grid-cols-2 gap-4 text-xs font-mono text-cyan-400/60 mt-8">
          <div>CORE: QUANTUM</div>
          <div>VER: 2077.1</div>
          <div>MEM: 2.1TB</div>
          <div>NET: ENCRYPTED</div>
        </div>
      </div>

      {/* Scan Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="scan-lines w-full h-full"></div>
      </div>

      {/* Corner UI Elements */}
      <div className="absolute top-4 left-4 text-xs font-mono text-cyan-400/40">
        [SYS_INIT]
      </div>
      <div className="absolute top-4 right-4 text-xs font-mono text-cyan-400/40">
        [SECURE_MODE]
      </div>
      <div className="absolute bottom-4 left-4 text-xs font-mono text-cyan-400/40">
        [NEURAL_LINK]
      </div>
      <div className="absolute bottom-4 right-4 text-xs font-mono text-cyan-400/40">
        [ONLINE]
      </div>
    </div>
  )
}

export default CyberpunkLoader