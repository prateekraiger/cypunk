// Cyberpunk 2077 Theme Constants

export const CYBERPUNK_COLORS = {
  primary: {
    cyan: '#00FFFF',
    magenta: '#FF00FF', 
    yellow: '#FFFF00',
    red: '#FF0040'
  },
  neon: {
    blue: '#0080FF',
    green: '#00FF00',
    orange: '#FF4500',
    purple: '#8A2BE2',
    pink: '#FF1493'
  },
  dark: {
    bg: '#0A0A0A',
    surface: '#1A1A1A',
    overlay: '#2A2A2A',
    border: '#333333'
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#CCCCCC',
    accent: '#00FFFF',
    warning: '#FF4500',
    error: '#FF0040'
  }
};

export const CYBERPUNK_FONTS = {
  display: 'Orbitron, monospace',
  body: 'Roboto Mono, monospace',
  terminal: 'VT323, monospace',
  tech: 'Space Mono, monospace'
};

export const CYBERPUNK_ANIMATIONS = {
  glitch: {
    duration: 0.1,
    ease: 'power2.inOut'
  },
  scan: {
    duration: 2,
    ease: 'power1.inOut'
  },
  typing: {
    duration: 0.05,
    ease: 'none'
  },
  fade: {
    duration: 0.5,
    ease: 'power2.out'
  }
};

export const CYBERPUNK_EFFECTS = {
  glitchText: [
    'ṅḝụŗḁḷ ɨṅŧḝṟƒḁčḝ',
    'ṇɇữɍⱥł ɨɳŧɇɍfⱥȼɇ',
    'neural interface',
    'ɲɇᵾɍⱥł ɨɳŧɇɍfⱥȼɇ'
  ],
  scanLines: '▓▓▓▓▓▓▓▓▓▓',
  matrixChars: '01ĦḩŞşĢğçÇ',
  dataStream: ['>>> INITIALIZING...', '>>> CONNECTING...', '>>> NEURAL LINK ESTABLISHED'],
  errorCodes: ['ERR_404', 'TIMEOUT', 'ACCESS_DENIED', 'VIRUS_DETECTED']
};

export const CYBERPUNK_UI_ELEMENTS = {
  borders: {
    simple: '1px solid #00FFFF',
    neon: '2px solid #00FFFF',
    glitch: '1px dashed #FF00FF'
  },
  gradients: {
    primary: 'linear-gradient(45deg, #00FFFF, #FF00FF)',
    dark: 'linear-gradient(135deg, #0A0A0A, #1A1A1A)',
    neon: 'linear-gradient(90deg, #00FFFF, #FF1493, #00FF00)'
  },
  shadows: {
    neon: '0 0 20px #00FFFF',
    glow: '0 0 40px #FF00FF',
    text: '2px 2px 4px rgba(0,0,0,0.8)'
  }
};