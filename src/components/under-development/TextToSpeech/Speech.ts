export interface TextToSpeechState {
  isPlaying: boolean;
  currentVoice: SpeechSynthesisVoice | null;
  rate: number;
}

export interface TextToSpeechControls {
  speak: (text: string) => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
  setRate: (rate: number) => void;
  setVoice: (voice: SpeechSynthesisVoice) => void;
}

export interface TextReaderProps {
  children: React.ReactNode;
  className?: string;
}
