import { useEffect, useRef } from 'react';
import { 
  createGlitchAnimation, 
  createNeonPulseAnimation,
  createScanLineAnimation,
  createHoverGlitchEffect
} from '../utils/animations';

/**
 * Custom hook for applying cyberpunk visual effects
 * @param {Object} options - Effect options
 * @returns {Object} - Refs and control functions
 */
export const useCyberpunkEffects = (options = {}) => {
  const {
    glitch = false,
    neonPulse = false,
    scanLines = false,
    hoverGlitch = false,
    autoStart = true
  } = options;

  const elementRef = useRef(null);
  const animationsRef = useRef([]);

  useEffect(() => {
    if (!elementRef.current || !autoStart) return;

    const animations = [];

    // Apply glitch effect
    if (glitch) {
      const glitchAnim = createGlitchAnimation(elementRef.current, glitch === true ? {} : glitch);
      animations.push(glitchAnim);
    }

    // Apply neon pulse effect
    if (neonPulse) {
      const pulseAnim = createNeonPulseAnimation(elementRef.current, neonPulse === true ? {} : neonPulse);
      animations.push(pulseAnim);
    }

    // Apply scan lines
    if (scanLines) {
      const scanAnim = createScanLineAnimation(elementRef.current, scanLines === true ? {} : scanLines);
      animations.push(scanAnim);
    }

    // Apply hover glitch
    if (hoverGlitch) {
      const hoverEffect = createHoverGlitchEffect(elementRef.current, hoverGlitch === true ? {} : hoverGlitch);
      animations.push(hoverEffect);
    }

    animationsRef.current = animations;

    return () => {
      animations.forEach(animation => {
        if (animation.kill) {
          animation.kill();
        } else if (animation.destroy) {
          animation.destroy();
        }
      });
    };
  }, [glitch, neonPulse, scanLines, hoverGlitch, autoStart]);

  const startEffects = () => {
    if (elementRef.current && !autoStart) {
      // Manually start effects
      // Implementation for manual control
    }
  };

  const stopEffects = () => {
    animationsRef.current.forEach(animation => {
      if (animation.kill) {
        animation.kill();
      } else if (animation.destroy) {
        animation.destroy();
      }
    });
    animationsRef.current = [];
  };

  return {
    elementRef,
    startEffects,
    stopEffects
  };
};

/**
 * Hook for managing terminal typing effects
 * @param {Array} commands - Array of command objects
 * @param {Object} options - Typing options
 */
export const useTerminalTyping = (commands = [], options = {}) => {
  const {
    autoStart = true,
    typingSpeed = 50,
    commandDelay = 1000
  } = options;

  const terminalRef = useRef(null);
  const currentCommandRef = useRef(0);
  const isTypingRef = useRef(false);

  const typeCommand = async (command) => {
    if (!terminalRef.current || isTypingRef.current) return;

    isTypingRef.current = true;
    const terminal = terminalRef.current;
    
    // Type input
    const inputText = `> ${command.input}`;
    for (let i = 0; i <= inputText.length; i++) {
      terminal.textContent = inputText.slice(0, i) + '_';
      await new Promise(resolve => setTimeout(resolve, typingSpeed));
    }

    // Add command to history
    const commandLine = document.createElement('div');
    commandLine.textContent = inputText;
    commandLine.className = 'text-cyan-400 mb-1';
    terminal.appendChild(commandLine);

    // Type output if provided
    if (command.output) {
      await new Promise(resolve => setTimeout(resolve, 300));
      const outputs = Array.isArray(command.output) ? command.output : [command.output];
      
      for (const output of outputs) {
        const outputLine = document.createElement('div');
        outputLine.textContent = output;
        outputLine.className = 'text-green-400 mb-1';
        terminal.appendChild(outputLine);
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }

    isTypingRef.current = false;
  };

  const startTyping = async () => {
    if (commands.length === 0) return;

    for (let i = 0; i < commands.length; i++) {
      await typeCommand(commands[i]);
      await new Promise(resolve => setTimeout(resolve, commandDelay));
    }
  };

  useEffect(() => {
    if (autoStart && terminalRef.current) {
      startTyping();
    }
  }, [commands, autoStart]);

  return {
    terminalRef,
    startTyping,
    isTyping: isTypingRef.current
  };
};

/**
 * Hook for character profile animations
 * @param {Object} character - Character data
 * @param {Object} options - Animation options
 */
export const useCharacterProfileEffects = (character, options = {}) => {
  const {
    staggerDelay = 0.2,
    animateOnScroll = true
  } = options;

  const profileRef = useRef(null);
  const statsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!profileRef.current) return;

    // Animate profile appearance
    const timeline = gsap.timeline({ paused: true });
    
    timeline
      .from(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'power2.out'
      })
      .from(profileRef.current.querySelectorAll('.profile-info > *'), {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: staggerDelay,
        ease: 'power2.out'
      }, '-=0.4');

    if (animateOnScroll) {
      ScrollTrigger.create({
        trigger: profileRef.current,
        start: 'top 80%',
        onEnter: () => timeline.play()
      });
    } else {
      timeline.play();
    }

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [character, staggerDelay, animateOnScroll]);

  const animateStats = () => {
    if (!statsRef.current) return;

    // Animate stat bars
    const statBars = statsRef.current.querySelectorAll('.stat-bar');
    statBars.forEach((bar, index) => {
      const value = bar.dataset.value;
      gsap.fromTo(bar, 
        { width: '0%' },
        { 
          width: `${value}%`, 
          duration: 1.5,
          delay: index * 0.1,
          ease: 'power2.out'
        }
      );
    });
  };

  return {
    profileRef,
    statsRef,
    imageRef,
    animateStats
  };
};