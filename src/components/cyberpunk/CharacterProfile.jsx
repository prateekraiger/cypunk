import { useState } from 'react';
import NeonCard from '../ui/NeonCard';
import GlitchText from '../ui/GlitchText';
import NeonButton from '../ui/NeonButton';

const CharacterProfile = ({ character, className = '' }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showStats, setShowStats] = useState(false);

  if (!character) return null;

  const {
    name,
    role,
    faction,
    location,
    threat_level,
    status,
    bio,
    stats,
    cyberware,
    images
  } = character;

  const getThreatColor = (level) => {
    switch (level) {
      case 'EXTREME': return 'text-red-500';
      case 'LEGENDARY': return 'text-purple-500';
      case 'HIGH': return 'text-orange-500';
      case 'MODERATE': return 'text-yellow-500';
      default: return 'text-green-500';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': return 'text-green-400';
      case 'DECEASED': return 'text-red-500';
      case 'CONSTRUCT': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${className}`}>
      {/* Character Images */}
      <div className="space-y-4">
        <NeonCard glowColor="cyan" intensity="medium">
          <img 
            src={images[selectedImage]} 
            alt={name}
            className="w-full h-96 object-cover rounded"
            onError={(e) => {
              e.target.src = '/images/placeholder-character.webp';
            }}
          />
          <div className="flex justify-center space-x-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-3 h-3 rounded-full border-2 transition-colors ${
                  selectedImage === index 
                    ? 'bg-cyan-400 border-cyan-400' 
                    : 'border-cyan-400 hover:bg-cyan-400/50'
                }`}
              />
            ))}
          </div>
        </NeonCard>
        
        {/* Quick Stats */}
        <NeonCard glowColor="purple" intensity="low" scanLines>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Threat Level:</span>
              <div className={`font-bold ${getThreatColor(threat_level)}`}>
                <GlitchText text={threat_level} intensity="low" />
              </div>
            </div>
            <div>
              <span className="text-gray-400">Status:</span>
              <div className={`font-bold ${getStatusColor(status)}`}>
                {status}
              </div>
            </div>
          </div>
        </NeonCard>
      </div>

      {/* Character Information */}
      <div className="space-y-4">
        {/* Header */}
        <NeonCard glowColor="cyan" intensity="high">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-cyan-400 mb-2">
              <GlitchText text={name} intensity="medium" />
            </h2>
            <div className="text-lg text-purple-400 mb-1">{role}</div>
            <div className="text-sm text-gray-400">
              {faction} • {location}
            </div>
          </div>
        </NeonCard>

        {/* Bio */}
        <NeonCard glowColor="green" intensity="low">
          <h3 className="text-xl font-bold text-green-400 mb-3">PROFILE</h3>
          <p className="text-gray-300 leading-relaxed">{bio}</p>
        </NeonCard>

        {/* Stats Toggle */}
        <div className="flex space-x-4">
          <NeonButton 
            onClick={() => setShowStats(!showStats)}
            variant={showStats ? 'primary' : 'secondary'}
            glitch
          >
            {showStats ? 'Hide Stats' : 'Show Stats'}
          </NeonButton>
        </div>

        {/* Stats */}
        {showStats && (
          <div className="space-y-4">
            <NeonCard glowColor="red" intensity="medium" scanLines>
              <h3 className="text-xl font-bold text-red-400 mb-4">ATTRIBUTES</h3>
              <div className="space-y-3">
                {Object.entries(stats).map(([stat, value]) => (
                  <div key={stat} className="flex items-center justify-between">
                    <span className="text-gray-300 capitalize font-mono">
                      {stat.replace('_', ' ')}
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-red-500 to-cyan-400 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${value}%` }}
                        />
                      </div>
                      <span className="text-cyan-400 font-mono text-sm w-8">
                        {value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </NeonCard>

            <NeonCard glowColor="purple" intensity="low">
              <h3 className="text-xl font-bold text-purple-400 mb-4">CYBERWARE</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {cyberware.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-purple-900/20 border border-purple-500/30 rounded px-3 py-2 text-sm text-purple-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </NeonCard>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterProfile;