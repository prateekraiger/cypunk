import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Creates a glitch animation effect
 * @param {string|Element} target - The target element or selector
 * @param {Object} options - Animation options
 */
export const createGlitchAnimation = (target, options = {}) => {
  const {
    duration = 0.1,
    repeat = -1,
    repeatDelay = 2,
    intensity = 'medium'
  } = options;

  const intensityMap = {
    low: { x: 1, y: 1 },
    medium: { x: 2, y: 2 },
    high: { x: 4, y: 4 }
  };

  const { x, y } = intensityMap[intensity];

  return gsap.to(target, {
    x: `random(-${x}, ${x})`,
    y: `random(-${y}, ${y})`,
    duration,
    repeat,
    repeatDelay,
    ease: 'none',
    textShadow: `
      ${x}px 0 #ff00c1, 
      -${x}px 0 #00fff9, 
      0 0 0 #ff00c1
    `
  });
};

/**
 * Creates a fade in up animation
 * @param {string|Element} target - The target element or selector
 * @param {Object} options - Animation options
 */
export const createFadeInUpAnimation = (target, options = {}) => {
  const {
    duration = 0.8,
    delay = 0,
    y = 30,
    ease = 'power2.out'
  } = options;

  return gsap.fromTo(target, 
    {
      opacity: 0,
      y: y
    },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease
    }
  );
};

/**
 * Creates a neon glow pulse animation
 * @param {string|Element} target - The target element or selector
 * @param {Object} options - Animation options
 */
export const createNeonPulseAnimation = (target, options = {}) => {
  const {
    color = '#00FFFF',
    duration = 2,
    intensity = 'medium'
  } = options;

  const intensityMap = {
    low: { blur: 10, spread: 20 },
    medium: { blur: 20, spread: 40 },
    high: { blur: 40, spread: 80 }
  };

  const { blur, spread } = intensityMap[intensity];

  return gsap.to(target, {
    boxShadow: `
      0 0 ${blur}px ${color},
      0 0 ${spread}px ${color},
      0 0 ${spread * 2}px ${color}
    `,
    duration,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });
};

/**
 * Creates a scan line animation
 * @param {string|Element} target - The target element or selector
 * @param {Object} options - Animation options
 */
export const createScanLineAnimation = (target, options = {}) => {
  const {
    duration = 2,
    color = '#00FFFF',
    opacity = 0.3
  } = options;

  // Create scan line element
  const scanLine = document.createElement('div');
  scanLine.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${color}, transparent);
    opacity: ${opacity};
    pointer-events: none;
    z-index: 10;
  `;

  const container = typeof target === 'string' ? document.querySelector(target) : target;
  container.style.position = 'relative';
  container.appendChild(scanLine);

  return gsap.to(scanLine, {
    y: container.offsetHeight,
    duration,
    repeat: -1,
    ease: 'none'
  });
};

/**
 * Creates a matrix rain effect
 * @param {string|Element} target - The target element or selector
 * @param {Object} options - Animation options
 */
export const createMatrixRainAnimation = (target, options = {}) => {
  const {
    characters = '01ĦḩŞşĢğçÇ',
    columns = 10,
    duration = 3,
    color = '#00FF00'
  } = options;

  const container = typeof target === 'string' ? document.querySelector(target) : target;
  const containerRect = container.getBoundingClientRect();

  for (let i = 0; i < columns; i++) {
    const column = document.createElement('div');
    column.style.cssText = `
      position: absolute;
      top: -100vh;
      left: ${(i / columns) * 100}%;
      width: ${100 / columns}%;
      font-family: 'VT323', monospace;
      font-size: 16px;
      color: ${color};
      text-align: center;
      pointer-events: none;
      opacity: 0.7;
    `;

    // Add random characters
    const char = characters[Math.floor(Math.random() * characters.length)];
    column.textContent = char.repeat(Math.floor(Math.random() * 10) + 5);

    container.appendChild(column);

    gsap.to(column, {
      y: containerRect.height + 100,
      duration: duration + Math.random() * 2,
      repeat: -1,
      delay: Math.random() * 2,
      ease: 'none'
    });
  }
};

/**
 * Creates a typing animation
 * @param {string|Element} target - The target element or selector
 * @param {string} text - The text to type
 * @param {Object} options - Animation options
 */
export const createTypingAnimation = (target, text, options = {}) => {
  const {
    speed = 50,
    cursor = true,
    cursorChar = '_'
  } = options;

  const element = typeof target === 'string' ? document.querySelector(target) : target;
  let currentText = '';
  let currentIndex = 0;

  const typeInterval = setInterval(() => {
    if (currentIndex < text.length) {
      currentText += text[currentIndex];
      element.textContent = currentText + (cursor ? cursorChar : '');
      currentIndex++;
    } else {
      clearInterval(typeInterval);
      if (cursor) {
        // Blinking cursor
        setInterval(() => {
          element.textContent = element.textContent.endsWith(cursorChar) 
            ? currentText 
            : currentText + cursorChar;
        }, 500);
      }
    }
  }, speed);

  return {
    stop: () => clearInterval(typeInterval)
  };
};

/**
 * Creates a hover glitch effect
 * @param {string|Element} target - The target element or selector  
 * @param {Object} options - Animation options
 */
export const createHoverGlitchEffect = (target, options = {}) => {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  let glitchAnimation;

  const handleMouseEnter = () => {
    glitchAnimation = createGlitchAnimation(element, { ...options, repeat: 5 });
  };

  const handleMouseLeave = () => {
    if (glitchAnimation) {
      glitchAnimation.kill();
      gsap.set(element, { x: 0, y: 0, textShadow: 'none' });
    }
  };

  element.addEventListener('mouseenter', handleMouseEnter);
  element.addEventListener('mouseleave', handleMouseLeave);

  return {
    destroy: () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      if (glitchAnimation) glitchAnimation.kill();
    }
  };
};