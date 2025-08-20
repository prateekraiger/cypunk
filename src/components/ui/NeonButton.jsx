import { useState } from 'react';
import { CYBERPUNK_COLORS } from '../../constants/cyberpunk-theme';

const NeonButton = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  disabled = false,
  glitch = false,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    primary: {
      bg: 'bg-transparent',
      border: 'border-2 border-cyan-400',
      text: 'text-cyan-400',
      glow: 'shadow-[0_0_20px_#00FFFF]',
      hover: 'hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_40px_#00FFFF]'
    },
    secondary: {
      bg: 'bg-transparent',
      border: 'border-2 border-purple-500',
      text: 'text-purple-500',
      glow: 'shadow-[0_0_20px_#8A2BE2]',
      hover: 'hover:bg-purple-500 hover:text-black hover:shadow-[0_0_40px_#8A2BE2]'
    },
    danger: {
      bg: 'bg-transparent',
      border: 'border-2 border-red-500',
      text: 'text-red-500',
      glow: 'shadow-[0_0_20px_#FF0040]',
      hover: 'hover:bg-red-500 hover:text-black hover:shadow-[0_0_40px_#FF0040]'
    }
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const currentVariant = variants[variant];
  const currentSize = sizes[size];

  const glitchEffect = glitch && isHovered ? 'animate-pulse' : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        ${currentVariant.bg}
        ${currentVariant.border}
        ${currentVariant.text}
        ${currentVariant.glow}
        ${currentVariant.hover}
        ${currentSize}
        ${glitchEffect}
        font-mono font-bold
        transition-all duration-300
        transform hover:scale-105
        disabled:opacity-50 disabled:cursor-not-allowed
        uppercase tracking-wider
        relative
        overflow-hidden
        ${className}
      `}
    >
      <span className="relative z-10">{children}</span>
      {glitch && isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -skew-x-12 -translate-x-full animate-[shimmer_1.5s_infinite]" />
      )}
    </button>
  );
};

export default NeonButton;