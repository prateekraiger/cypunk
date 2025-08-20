import { useState, useEffect } from 'react'

const NavBar = () => {
  const [time, setTime] = useState(new Date())
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    })
  }

  return (
    <nav className="cyberpunk-nav">
      {/* Left Side - Logo and System Status */}
      <div className="flex items-center space-x-6">
        <div className="relative">
          <img 
            src="/images/nav-logo.svg" 
            className="scale-100 cyber-glow-cyan transition-all duration-300 hover:scale-105" 
            alt="Cyberpunk Logo"
          />
          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>
        </div>
        
        {/* System Status Indicators */}
        <div className="hidden md:flex items-center space-x-4 font-mono text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400">ONLINE</span>
          </div>
          <div className="text-cyan-400">|</div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400">NEURAL LINK</span>
          </div>
        </div>
      </div>

      {/* Center - Navigation Links */}
      <div className="hidden lg:flex items-center space-x-8 font-mono text-base">
        {['INTERFACE', 'CHARACTERS', 'SYSTEMS', 'DATA'].map((item, index) => (
          <button
            key={item}
            className="relative px-3 py-2 text-cyan-400 hover:text-white transition-all duration-300 group"
          >
            <span className="relative z-10">{item}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform skew-x-12"></div>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
          </button>
        ))}
      </div>

      {/* Right Side - Time and Menu */}
      <div className="flex items-center space-x-6">
        {/* Digital Clock */}
        <div className="hidden md:flex flex-col items-end font-mono">
          <div className="text-cyan-400 text-base cyber-glow-cyan">
            {formatTime(time)}
          </div>
          <div className="text-sm text-cyan-400/60">
            {time.toLocaleDateString('en-US', { 
              month: 'short', 
              day: '2-digit', 
              year: 'numeric' 
            })}
          </div>
        </div>

        {/* Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative cyber-button p-3 border-2 border-cyan-400 hover:border-magenta-400 transition-all duration-300"
        >
          <div className="w-6 h-6 relative">
            <div className={`absolute w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></div>
            <div className={`absolute w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'top-3'}`}></div>
            <div className={`absolute w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></div>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md lg:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8 font-mono text-2xl">
            {['INTERFACE', 'CHARACTERS', 'SYSTEMS', 'DATA'].map((item, index) => (
              <button
                key={item}
                className="relative px-6 py-4 text-cyan-400 hover:text-white transition-all duration-300 group glitch-text"
                data-text={item}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
            
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
              <div className="text-cyan-400 text-lg cyber-glow-cyan">
                {formatTime(time)}
              </div>
              <div className="text-sm text-cyan-400/60 font-mono">
                SYSTEM INTERFACE ACTIVE
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scanning Line Effect */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 animate-pulse"></div>
    </nav>
  )
}

export default NavBar