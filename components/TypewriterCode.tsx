'use client';

import { useState, useEffect } from 'react';

const codeLines = [
  "import NeuraForge from 'ai-studio'",
  "",
  "const solution = NeuraForge.create({",
  "  problem: 'complex-ai-task',",
  "  performance: 'enterprise-grade'",
  "})"
];

interface CodeLine {
  lineNumber: string;
  content: string;
  isComplete: boolean;
}

export default function TypewriterCode() {
  const [displayedLines, setDisplayedLines] = useState<CodeLine[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentLineIndex < codeLines.length) {
        const currentLine = codeLines[currentLineIndex];
        
        if (currentCharIndex < currentLine.length) {
          // Add next character to current line
          setDisplayedLines(prev => {
            const newLines = [...prev];
            const lineNumber = String(currentLineIndex + 1).padStart(2, '0');
            
            if (newLines[currentLineIndex]) {
              newLines[currentLineIndex] = {
                lineNumber,
                content: currentLine.substring(0, currentCharIndex + 1),
                isComplete: false
              };
            } else {
              newLines.push({
                lineNumber,
                content: currentLine.substring(0, currentCharIndex + 1),
                isComplete: false
              });
            }
            return newLines;
          });
          setCurrentCharIndex(prev => prev + 1);
        } else {
          // Complete current line and move to next
          setDisplayedLines(prev => {
            const newLines = [...prev];
            if (newLines[currentLineIndex]) {
              newLines[currentLineIndex].isComplete = true;
            }
            return newLines;
          });
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }
      } else {
        // Finished typing, wait then restart
        setTimeout(() => {
          setDisplayedLines([]);
          setCurrentLineIndex(0);
          setCurrentCharIndex(0);
        }, 3000);
      }
    }, currentCharIndex === 0 ? 500 : 80);

    return () => clearTimeout(timer);
  }, [currentLineIndex, currentCharIndex]);

  const formatCodeLine = (content: string) => {
    return content.split(' ').map((word, wordIndex) => {
      let className = 'text-white';
      if (['import', 'from', 'const', 'new'].includes(word)) className = 'text-blue-300';
      if (word.startsWith("'") && word.endsWith("'")) className = 'text-green-300';
      if (['NeuraForge', 'create'].includes(word.replace(/[^a-zA-Z]/g, ''))) className = 'text-yellow-300';
      
      return (
        <span key={wordIndex} className={className}>
          {word}
          {wordIndex < content.split(' ').length - 1 ? ' ' : ''}
        </span>
      );
    });
  };

  return (
    <div className="space-y-3 font-mono text-sm">
      {/* Fixed height container to prevent CLS - exactly 6 lines */}
      <div className="h-[156px] overflow-hidden">
        {displayedLines.map((line, index) => (
          <div key={index} className="text-purple-300 h-[26px] flex items-center">
            <span className="text-gray-500 w-8 flex-shrink-0">{line.lineNumber}</span>
            <span className="ml-4 flex-1">
              {formatCodeLine(line.content)}
              {index === displayedLines.length - 1 && !line.isComplete && (
                <span className="animate-pulse text-purple-400">|</span>
              )}
            </span>
          </div>
        ))}
        
        {/* Fill remaining lines with fixed height placeholders */}
        {Array.from({ length: Math.max(0, 6 - displayedLines.length) }).map((_, index) => (
          <div key={`empty-${index}`} className="text-purple-300 h-[26px] flex items-center">
            <span className="text-gray-500 w-8 flex-shrink-0">
              {String(displayedLines.length + index + 1).padStart(2, '0')}
            </span>
            <span className="ml-4 flex-1"></span>
          </div>
        ))}
      </div>
    </div>
  );
}