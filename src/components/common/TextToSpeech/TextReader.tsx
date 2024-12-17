// import { Play, Pause, RotateCcw, FastForward, Rewind } from 'lucide-react';
// import { VoiceSelector } from './VoiceSelector';
// import { useTextToSpeech } from './useTextToSpeech';
// import { SpeedControl } from './SpeedControl';
// import { TextReaderProps } from './Speech';
// import { getTextFromNode } from './textChunker';
// import Button from '../Button';
// import Div from '../Div/Div';

// export function TextReader({ children }: TextReaderProps) {
//   const { isPlaying, speak, pause, resume, stop, setRate, setVoice, availableVoices, currentVoice, rate } =
//     useTextToSpeech();

//   const handlePlayPause = () => {
//     if (isPlaying) {
//       pause();
//     } else {
//       const textContent = getTextFromNode(children);
//       isPlaying ? resume() : speak(textContent);
//     }
//   };

//   const handleRestart = () => {
//     const textContent = getTextFromNode(children);
//     stop();
//     speak(textContent);
//   };

//   return (
//     <Div className="w-full mx-auto bg-white overflow-hidden">
//       <Div className="flex items-center justify-between px-6 py-2 bg-gray-50 border-b border-gray-200">
//         <Div className="flex items-center space-x-2">
//           <Button variant={'ghost'} onClick={() => setRate(Math.max(0.5, rate - 0.25))} aria-label="Slow down">
//             <Rewind className="size-3 text-muted-foreground" />
//           </Button>

//           <Button variant={'primary'} onClick={handlePlayPause} aria-label={isPlaying ? 'Pause' : 'Play'} rounded>
//             {isPlaying ? <Pause className="size-3" /> : <Play className="size-3" />}
//           </Button>

//           <Button variant={'ghost'} onClick={() => setRate(Math.min(2, rate + 0.25))} aria-label="Speed up">
//             <FastForward className="size-3 text-muted-foreground" />
//           </Button>

//           <Button
//             variant={'ghost'}
//             onClick={handleRestart}
//             aria-label="Restart"
//             className="hover:bg-gray-200 transition-colors"
//           >
//             <RotateCcw className="size-3 text-muted-foreground" />
//           </Button>
//         </Div>

//         <Div className="flex items-center space-x-4">
//           <SpeedControl currentRate={rate} onSpeedChange={setRate} />
//           <VoiceSelector voices={availableVoices} currentVoice={currentVoice} onVoiceChange={setVoice} />
//         </Div>
//       </Div>

//       <Div className="prose prose-sm p-6 bg-white">{children}</Div>
//     </Div>
//   );
// }

// export default TextReader;

import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  FastForward, 
  Rewind, 
  Volume2, 
  Volume1, 
  VolumeX 
} from 'lucide-react';
import { VoiceSelector } from './VoiceSelector';
import { useTextToSpeech } from './useTextToSpeech';
import { SpeedControl } from './SpeedControl';
import { TextReaderProps } from './Speech';
import { getTextFromNode } from './textChunker';
import Button from '../Button';
import Div from '../Div';
import Tooltip from '../Tooltip/Tooltip';

export function TextReader({ children, className = '' }: TextReaderProps) {
  const { 
    isPlaying, 
    speak, 
    pause, 
    stop, 
    setRate, 
    setVoice, 
    availableVoices, 
    currentVoice, 
    rate,
    volume,
    setVolume
  } = useTextToSpeech();

  const [isHovered, setIsHovered] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      pause();
    } else {
      const textContent = getTextFromNode(children);
      speak(textContent);
    }
  };

  const handleRestart = () => {
    const textContent = getTextFromNode(children);
    stop();
    speak(textContent);
  };

  const getVolumeIcon = () => {
    if (volume === 0) return <VolumeX className="size-4 text-muted-foreground" />;
    if (volume < 0.5) return <Volume1 className="size-4 text-muted-foreground" />;
    return <Volume2 className="size-4 text-muted-foreground" />;
  };

  return (
    <Div 
      className={`w-full mx-auto bg-white overflow-hidden rounded-lg shadow-md transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-b border-gray-200">
        <Div className="flex items-center space-x-2">
          <Tooltip content="Slow down">
            <Button 
              variant={'ghost'} 
              onClick={() => setRate(Math.max(0.5, rate - 0.25))} 
              aria-label="Slow down"
              disabled={rate <= 0.5}
            >
              <Rewind className="size-4 text-muted-foreground" />
            </Button>
          </Tooltip>
          
          <Tooltip content={isPlaying ? 'Pause' : 'Play'}>
            <Button 
              variant={'primary'} 
              onClick={handlePlayPause} 
              aria-label={isPlaying ? 'Pause' : 'Play'} 
              rounded
            >
              {isPlaying ? <Pause className="size-4" /> : <Play className="size-4" />}
            </Button>
          </Tooltip>
          
          <Tooltip content="Speed up">
            <Button 
              variant={'ghost'} 
              onClick={() => setRate(Math.min(2, rate + 0.25))} 
              aria-label="Speed up"
              disabled={rate >= 2}
            >
              <FastForward className="size-4 text-muted-foreground" />
            </Button>
          </Tooltip>
          
          <Tooltip content="Restart">
            <Button
              variant={'ghost'}
              onClick={handleRestart}
              aria-label="Restart"
              className="hover:bg-gray-200 transition-colors"
            >
              <RotateCcw className="size-4 text-muted-foreground" />
            </Button>
          </Tooltip>

          <Tooltip content="Volume">
            <Button 
              variant={'ghost'} 
              onClick={() => setVolume(volume === 0 ? 1 : 0)} 
              aria-label="Toggle Mute"
            >
              {getVolumeIcon()}
            </Button>
          </Tooltip>
        </Div>
        
        <Div className="flex items-center space-x-4">
          <SpeedControl 
            currentRate={rate} 
            onSpeedChange={setRate} 
          />
          
          <VoiceSelector 
            voices={availableVoices} 
            currentVoice={currentVoice} 
            onVoiceChange={setVoice} 
          />
        </Div>
      </Div>
      
      <Div 
        className={`p-6 bg-white transition-all duration-300 ${
          isHovered ? 'opacity-90' : 'opacity-100'
        }`}
      >
        {children}
      </Div>
    </Div>
  );
}

export default TextReader;