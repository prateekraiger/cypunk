import { useState, useEffect } from 'react';

const TerminalWindow = ({ 
  title = "NEURAL_INTERFACE.exe",
  commands = [],
  autoplay = true,
  typingSpeed = 50,
  className = ''
}) => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [allLines, setAllLines] = useState([]);

  useEffect(() => {
    if (!autoplay || commands.length === 0) return;

    if (currentCommandIndex < commands.length) {
      const command = commands[currentCommandIndex];
      if (typeof command === 'string') {
        typeCommand(command);
      } else {
        typeCommand(command.input, command.output);
      }
    }
  }, [currentCommandIndex, autoplay, commands]);

  const typeCommand = async (input, output = null) => {
    setIsTyping(true);
    
    // Type the command
    const fullCommand = `> ${input}`;
    for (let i = 0; i <= fullCommand.length; i++) {
      setCurrentText(fullCommand.slice(0, i));
      await new Promise(resolve => setTimeout(resolve, typingSpeed));
    }

    // Add command to history
    setAllLines(prev => [...prev, fullCommand]);
    setCurrentText('');

    // Add output if provided
    if (output) {
      await new Promise(resolve => setTimeout(resolve, 300));
      if (Array.isArray(output)) {
        for (const line of output) {
          setAllLines(prev => [...prev, line]);
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      } else {
        setAllLines(prev => [...prev, output]);
      }
    }

    setIsTyping(false);
    
    // Move to next command after delay
    setTimeout(() => {
      setCurrentCommandIndex(prev => prev + 1);
    }, 1000);
  };

  const defaultCommands = [
    {
      input: "neural_scan --target=night_city",
      output: [
        "Scanning neural networks...",
        "Found 847,392 active connections",
        "Threat level: EXTREME",
        "Recommendation: Proceed with caution"
      ]
    },
    {
      input: "access_database --profile=characters",
      output: [
        "Accessing character database...",
        "Authentication successful",
        "Loading profiles..."
      ]
    }
  ];

  const commandsToUse = commands.length > 0 ? commands : defaultCommands;

  return (
    <div className={`bg-black border-2 border-green-400 shadow-[0_0_20px_#00FF00] ${className}`}>
      {/* Terminal Header */}
      <div className="bg-green-400/20 border-b border-green-400 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-green-400 font-mono text-sm font-bold">{title}</span>
        </div>
        <div className="text-green-400 font-mono text-xs">
          {new Date().toLocaleTimeString()}
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-4 font-mono text-green-400 h-64 overflow-y-auto bg-black">
        <div className="text-xs">
          <div className="mb-2 text-green-300">
            Neural Interface Terminal v2.077
          </div>
          <div className="mb-4 text-green-300">
            Copyright (c) 2077 Arasaka Corporation
          </div>
          
          {/* Command History */}
          {allLines.map((line, index) => (
            <div key={index} className={`mb-1 ${line.startsWith('>') ? 'text-cyan-400' : 'text-green-400'}`}>
              {line}
            </div>
          ))}
          
          {/* Current typing line */}
          {isTyping && (
            <div className="text-cyan-400">
              {currentText}
              <span className="animate-pulse">_</span>
            </div>
          )}
          
          {/* Cursor when not typing */}
          {!isTyping && currentCommandIndex >= commandsToUse.length && (
            <div className="text-cyan-400 flex">
              <span>{'> '}</span>
              <span className="animate-pulse">_</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TerminalWindow;