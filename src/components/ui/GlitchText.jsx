import { useState, useEffect } from 'react';

const GlitchText = ({ 
  text, 
  className = '', 
  intensity = 'medium',
  trigger = 'hover',
  continuous = false 
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchChars = '!<>-_\\/[]{}—=+*^?#________';
  const intensitySettings = {
    low: { chars: 1, duration: 100, frequency: 200 },
    medium: { chars: 3, duration: 80, frequency: 150 },
    high: { chars: 5, duration: 60, frequency: 100 }
  };

  const settings = intensitySettings[intensity];

  const createGlitch = () => {
    const textArray = text.split('');
    const glitchedArray = [...textArray];
    
    // Replace random characters
    for (let i = 0; i < settings.chars; i++) {
      const randomIndex = Math.floor(Math.random() * textArray.length);
      const randomChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
      glitchedArray[randomIndex] = randomChar;
    }
    
    return glitchedArray.join('');
  };

  const startGlitch = () => {
    if (isGlitching) return;
    
    setIsGlitching(true);
    const glitchInterval = setInterval(() => {
      setDisplayText(createGlitch());
    }, settings.duration);

    setTimeout(() => {
      clearInterval(glitchInterval);
      setDisplayText(text);
      setIsGlitching(false);
    }, settings.frequency);
  };

  useEffect(() => {
    if (continuous) {
      const continuousInterval = setInterval(startGlitch, 2000);
      return () => clearInterval(continuousInterval);
    }
  }, [continuous, text]);

  const handleTrigger = () => {
    if (trigger === 'hover' || trigger === 'click') {
      startGlitch();
    }
  };

  return (
    <span
      className={`
        font-mono
        relative
        cursor-pointer
        ${isGlitching ? 'text-red-500' : ''}
        ${className}
      `}
      onMouseEnter={trigger === 'hover' ? handleTrigger : undefined}
      onClick={trigger === 'click' ? handleTrigger : undefined}
      style={{
        textShadow: isGlitching ? 
          '2px 0 #ff00c1, -2px 0 #00fff9, 0 0 0 #ff00c1' : 
          'none'
      }}
    >
      {displayText}
      {isGlitching && (
        <>
          <span 
            className="absolute top-0 left-0 text-cyan-400 opacity-80"
            style={{ transform: 'translate(-1px, 0)' }}
          >
            {displayText}
          </span>
          <span 
            className="absolute top-0 left-0 text-red-500 opacity-80"
            style={{ transform: 'translate(1px, 0)' }}
          >
            {displayText}
          </span>
        </>
      )}
    </span>
  );
};

export default GlitchText;