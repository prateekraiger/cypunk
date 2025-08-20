// Cyberpunk 2077 Character Database
export const CYBERPUNK_CHARACTERS = {
  V: {
    id: 'v',
    name: 'V',
    role: 'Mercenary',
    faction: 'Freelancer',
    location: 'Night City',
    threat_level: 'EXTREME',
    status: 'ACTIVE',
    bio: 'A legendary mercenary navigating the dangerous streets of Night City. Enhanced with cutting-edge cyberware.',
    stats: {
      reflexes: 95,
      technical: 88,
      cool: 92,
      body: 90,
      intelligence: 87
    },
    cyberware: [
      'Mantis Blades',
      'Kiroshi Optics Mk.3',
      'Zetatech Sandevistan',
      'Biomonitor'
    ],
    images: [
      '/images/v-1.webp',
      '/images/v-2.webp',
      '/images/v-3.webp'
    ]
  },
  
  JUDY: {
    id: 'judy',
    name: 'Judy Alvarez',
    role: 'Braindance Technician',
    faction: 'Mox',
    location: 'Lizzie\'s Bar, Watson',
    threat_level: 'MODERATE',
    status: 'ACTIVE',
    bio: 'Elite braindance editor and member of the Mox gang. Expert in neural interface technology and digital forensics.',
    stats: {
      reflexes: 75,
      technical: 98,
      cool: 85,
      body: 65,
      intelligence: 95
    },
    cyberware: [
      'Neural Interface Mk.2',
      'Cyberdeck - Stephenson Tech',
      'Memory Boost',
      'Interface Plugs'
    ],
    images: [
      '/images/Judy-1.webp',
      '/images/Judy-2.webp',
      '/images/Judy-3.webp'
    ]
  },

  JOHNNY: {
    id: 'johnny',
    name: 'Johnny Silverhand',
    role: 'Rockerboy / Digital Ghost',
    faction: 'Samurai (Former)',
    location: 'Cyberspace / V\'s Mind',
    threat_level: 'LEGENDARY',
    status: 'CONSTRUCT',
    bio: 'Former rockerboy turned digital ghost. Leader of the band Samurai and anti-corporate terrorist. Now exists as an engram.',
    stats: {
      reflexes: 88,
      technical: 70,
      cool: 98,
      body: 85,
      intelligence: 90
    },
    cyberware: [
      'Cybernetic Arm (Silver)',
      'Neural Interface',
      'Optic Enhancement',
      'Voice Modulator'
    ],
    images: [
      '/images/v-1.webp', // Using V's images as placeholder for Johnny
      '/images/v-2.webp',
      '/images/v-3.webp'
    ]
  },

  PANAM: {
    id: 'panam',
    name: 'Panam Palmer',
    role: 'Nomad / Driver',
    faction: 'Aldecaldos',
    location: 'Badlands',
    threat_level: 'HIGH',
    status: 'ACTIVE',
    bio: 'Fierce nomad from the Aldecaldos family. Expert driver and mechanic with a rebellious streak and unwavering loyalty.',
    stats: {
      reflexes: 90,
      technical: 95,
      cool: 80,
      body: 88,
      intelligence: 82
    },
    cyberware: [
      'Vehicle Link',
      'Targeting System',
      'Comm Enhancement',
      'Reflex Boost'
    ],
    images: [
      '/images/Judy-1.webp', // Using Judy's images as placeholder for Panam
      '/images/Judy-2.webp',
      '/images/Judy-3.webp'
    ]
  },

  JACKIE: {
    id: 'jackie',
    name: 'Jackie Welles',
    role: 'Mercenary',
    faction: 'Valentinos',
    location: 'Heywood',
    threat_level: 'HIGH',
    status: 'DECEASED',
    bio: 'V\'s former partner and best friend. A passionate mercenary with dreams of making it to the big leagues in Night City.',
    stats: {
      reflexes: 85,
      technical: 75,
      cool: 90,
      body: 95,
      intelligence: 78
    },
    cyberware: [
      'Subdermal Armor',
      'Grip Enhancement',
      'Pain Inhibitor',
      'Adrenaline Booster'
    ],
    images: [
      '/images/v-1.webp', // Using V's images as placeholder for Jackie
      '/images/v-2.webp', 
      '/images/v-3.webp'
    ]
  },

  ROGUE: {
    id: 'rogue',
    name: 'Rogue Amendiares',
    role: 'Fixer',
    faction: 'Afterlife',
    location: 'Afterlife Bar',
    threat_level: 'LEGENDARY',
    status: 'ACTIVE',
    bio: 'Night City\'s most powerful fixer. Former member of Johnny Silverhand\'s crew, now runs the Afterlife bar and mercenary network.',
    stats: {
      reflexes: 80,
      technical: 88,
      cool: 98,
      body: 75,
      intelligence: 95
    },
    cyberware: [
      'Enhanced Neural Processor',
      'Encrypted Comm System',
      'Biometric Scanner',
      'Data Fortress Access'
    ],
    images: [
      '/images/Judy-1.webp', // Using Judy's images as placeholder for Rogue
      '/images/Judy-2.webp',
      '/images/Judy-3.webp'
    ]
  }
};

// Character access helpers
export const getCharacter = (id) => CYBERPUNK_CHARACTERS[id.toUpperCase()];
export const getAllCharacters = () => Object.values(CYBERPUNK_CHARACTERS);
export const getCharactersByFaction = (faction) => 
  getAllCharacters().filter(char => char.faction === faction);
export const getActiveCharacters = () => 
  getAllCharacters().filter(char => char.status === 'ACTIVE');