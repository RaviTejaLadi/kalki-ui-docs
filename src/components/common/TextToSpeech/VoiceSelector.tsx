import Div from '../Div/Div';
import Select, { SelectContent, SelectItem, SelectTrigger, SelectValue } from '../Select';

interface VoiceSelectorProps {
  voices: SpeechSynthesisVoice[];
  currentVoice: SpeechSynthesisVoice | null;
  onVoiceChange: (voice: SpeechSynthesisVoice) => void;
}

export function VoiceSelector({ voices, currentVoice, onVoiceChange }: VoiceSelectorProps) {
  const handleChange = (value: string) => {
    const selectedVoice = voices.find((voice) => voice.name === value);
    if (selectedVoice) {
      onVoiceChange(selectedVoice);
    }
  };
  return (
    <Div className="flex items-center space-x-2">
      <label htmlFor="voice-selector" className="text-sm font-medium text-muted-foreground">
        Voice:
      </label>
      <Select id="voice-selector" value={currentVoice?.name || ''} onValueChange={handleChange} className="w-[15rem]">
        <SelectTrigger className=" h-[1.8rem]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          {voices.map((voice) => (
            <SelectItem
              key={voice.name}
              className="text-xs text-muted-foreground"
              value={voice.name}
              title={`${voice.name} ${voice.lang}`}
            >
              {voice.name} ({voice.lang})
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Div>
  );
}
