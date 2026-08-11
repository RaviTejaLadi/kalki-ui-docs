// import { useState, useEffect, useRef, useCallback } from 'react';
// import type { TextToSpeechState, TextToSpeechControls } from './Speech';
// import { splitTextIntoChunks } from './splitTextIntoChunks';

// export function useTextToSpeech(): TextToSpeechState & TextToSpeechControls & {
//   availableVoices: SpeechSynthesisVoice[];
// } {
//   const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
//   const [currentVoice, setCurrentVoice] = useState<SpeechSynthesisVoice | null>(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [rate, setRate] = useState(1);

//   const textChunksRef = useRef<string[]>([]);
//   const currentChunkIndexRef = useRef<number>(0);
//   const synth = window.speechSynthesis;

//   useEffect(() => {
//     const updateVoices = () => {
//       const availableVoices = synth.getVoices();
//       setVoices(availableVoices);
//       if (!currentVoice && availableVoices.length > 0) {
//         setCurrentVoice(availableVoices[0]);
//       }
//     };

//     updateVoices();
//     if (speechSynthesis.onvoiceschanged !== undefined) {
//       speechSynthesis.onvoiceschanged = updateVoices;
//     }

//     return () => {
//       synth.cancel();
//     };
//   }, [currentVoice]);

//   const speakChunk = useCallback((text: string) => {
//     const utterance = new SpeechSynthesisUtterance(text);

//     if (currentVoice) {
//       utterance.voice = currentVoice;
//     }
//     utterance.rate = rate;

//     utterance.onstart = () => setIsPlaying(true);
//     utterance.onend = () => {
//       if (currentChunkIndexRef.current < textChunksRef.current.length - 1) {
//         currentChunkIndexRef.current++;
//         speakChunk(textChunksRef.current[currentChunkIndexRef.current]);
//       } else {
//         setIsPlaying(false);
//         currentChunkIndexRef.current = 0;
//       }
//     };
//     utterance.onpause = () => setIsPlaying(false);
//     utterance.onresume = () => setIsPlaying(true);

//     synth.speak(utterance);
//   }, [currentVoice, rate]);

//   const speak = useCallback((text: string) => {
//     synth.cancel();
//     textChunksRef.current = splitTextIntoChunks(text);
//     currentChunkIndexRef.current = 0;
//     speakChunk(textChunksRef.current[0]);
//     setIsPlaying(true);
//   }, [speakChunk]);

//   const pause = useCallback(() => {
//     synth.pause();
//     setIsPlaying(false);
//   }, []);

//   const resume = useCallback(() => {
//     synth.resume();
//     setIsPlaying(true);
//   }, []);

//   const stop = useCallback(() => {
//     synth.cancel();
//     setIsPlaying(false);
//     currentChunkIndexRef.current = 0;
//   }, []);

//   const handleSetRate = useCallback((newRate: number) => {
//     setRate(newRate);
//     if (isPlaying) {
//       const currentText = textChunksRef.current.join(' ');
//       stop();
//       speak(currentText);
//     }
//   }, [isPlaying, speak, stop]);

//   const handleSetVoice = useCallback((voice: SpeechSynthesisVoice) => {
//     setCurrentVoice(voice);
//     if (isPlaying) {
//       const currentText = textChunksRef.current.join(' ');
//       stop();
//       speak(currentText);
//     }
//   }, [isPlaying, speak, stop]);

//   return {
//     isPlaying,
//     currentVoice,
//     rate,
//     speak,
//     pause,
//     resume,
//     stop,
//     setRate: handleSetRate,
//     setVoice: handleSetVoice,
//     availableVoices: voices,
//   };
// }

import { useState, useEffect, useRef, useCallback } from 'react';
import type { TextToSpeechState, TextToSpeechControls } from './Speech';
import { splitTextIntoChunks } from './splitTextIntoChunks';

export function useTextToSpeech(): TextToSpeechState &
  TextToSpeechControls & {
    availableVoices: SpeechSynthesisVoice[];
    volume: number;
    setVolume: (volume: number) => void;
  } {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [currentVoice, setCurrentVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [rate, setRate] = useState(1);
  const [volume, setVolume] = useState(1); // Added volume state with default of 1 (max)

  const textChunksRef = useRef<string[]>([]);
  const currentChunkIndexRef = useRef<number>(0);
  const synth = window.speechSynthesis;

  useEffect(() => {
    const updateVoices = () => {
      const availableVoices = synth.getVoices();
      setVoices(availableVoices);
      if (!currentVoice && availableVoices.length > 0) {
        setCurrentVoice(availableVoices[0]);
      }
    };

    updateVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = updateVoices;
    }

    return () => {
      synth.cancel();
    };
  }, [currentVoice]);

  const speakChunk = useCallback(
    (text: string) => {
      const utterance = new SpeechSynthesisUtterance(text);

      if (currentVoice) {
        utterance.voice = currentVoice;
      }
      utterance.rate = rate;
      utterance.volume = volume; // Add volume setting

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => {
        if (currentChunkIndexRef.current < textChunksRef.current.length - 1) {
          currentChunkIndexRef.current++;
          speakChunk(textChunksRef.current[currentChunkIndexRef.current]);
        } else {
          setIsPlaying(false);
          currentChunkIndexRef.current = 0;
        }
      };
      utterance.onpause = () => setIsPlaying(false);
      utterance.onresume = () => setIsPlaying(true);

      synth.speak(utterance);
    },
    [currentVoice, rate, volume]
  );

  const speak = useCallback(
    (text: string) => {
      synth.cancel();
      textChunksRef.current = splitTextIntoChunks(text);
      currentChunkIndexRef.current = 0;
      speakChunk(textChunksRef.current[0]);
      setIsPlaying(true);
    },
    [speakChunk]
  );

  const pause = useCallback(() => {
    synth.pause();
    setIsPlaying(false);
  }, []);

  const resume = useCallback(() => {
    synth.resume();
    setIsPlaying(true);
  }, []);

  const stop = useCallback(() => {
    synth.cancel();
    setIsPlaying(false);
    currentChunkIndexRef.current = 0;
  }, []);

  const handleSetRate = useCallback(
    (newRate: number) => {
      setRate(newRate);
      if (isPlaying) {
        const currentText = textChunksRef.current.join(' ');
        stop();
        speak(currentText);
      }
    },
    [isPlaying, speak, stop]
  );

  const handleSetVoice = useCallback(
    (voice: SpeechSynthesisVoice) => {
      setCurrentVoice(voice);
      if (isPlaying) {
        const currentText = textChunksRef.current.join(' ');
        stop();
        speak(currentText);
      }
    },
    [isPlaying, speak, stop]
  );

  const handleSetVolume = useCallback(
    (newVolume: number) => {
      // Ensure volume is between 0 and 1
      const sanitizedVolume = Math.max(0, Math.min(1, newVolume));
      setVolume(sanitizedVolume);

      if (isPlaying) {
        const currentText = textChunksRef.current.join(' ');
        stop();
        speak(currentText);
      }
    },
    [isPlaying, speak, stop]
  );

  return {
    isPlaying,
    currentVoice,
    rate,
    volume,
    speak,
    pause,
    resume,
    stop,
    setRate: handleSetRate,
    setVoice: handleSetVoice,
    setVolume: handleSetVolume,
    availableVoices: voices,
  };
}
