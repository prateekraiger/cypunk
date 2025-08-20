import { useState } from 'react';

const NeonCard = ({ 
  children, 
  className = '',
  glowColor = 'cyan',
  intensity = 'medium',
  hoverable = true,
  scanLines = false 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const glowColors = {
    cyan: {
      border: 'border-cyan-400',
      glow: 'shadow-[0_0_20px_#00FFFF]',
      hoverGlow: 'hover:shadow-[0_0_40px_#00FFFF]'
    },
    purple: {
      border: 'border-purple-500', 
      glow: 'shadow-[0_0_20px_#8A2BE2]',
      hoverGlow: 'hover:shadow-[0_0_40px_#8A2BE2]'
    },
    red: {
      border: 'border-red-500',
      glow: 'shadow-[0_0_20px_#FF0040]',
      hoverGlow: 'hover:shadow-[0_0_40px_#FF0040]'
    },
    green: {
      border: 'border-green-400',
      glow: 'shadow-[0_0_20px_#00FF00]',
      hoverGlow: 'hover:shadow-[0_0_40px_#00FF00]'
    }
  };

  const intensityLevels = {
    low: 'border opacity-80',
    medium: 'border-2',
    high: 'border-4'
  };

  const currentGlow = glowColors[glowColor];
  const currentIntensity = intensityLevels[intensity];

  return (
    <div
      className={`
        ${currentGlow.border}
        ${currentIntensity}
        ${currentGlow.glow}
        ${hoverable ? currentGlow.hoverGlow : ''}
        bg-black/70
        backdrop-blur-sm
        p-6
        relative
        overflow-hidden
        transition-all duration-300
        ${hoverable ? 'transform hover:scale-105' : ''}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Scan lines effect */}
      {scanLines && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="h-full w-full bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent bg-[length:100%_4px] animate-pulse" />
        </div>
      )}
      
      {/* Corner brackets */}
      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400" />
      <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400" />
      
      {/* Animated border sweep */}
      {isHovered && hoverable && (
        <div className="absolute inset-0 border-2 border-transparent">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[sweep_2s_infinite]" />
          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-cyan-400 to-transparent animate-[sweep_2s_infinite_reverse]" />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default NeonCard;