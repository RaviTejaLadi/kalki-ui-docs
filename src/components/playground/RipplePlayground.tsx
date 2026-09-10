import { useState } from 'react';
import { Box, Ripple } from 'kalki-ui';
import PlaygroundShell, { OptionGroup } from './PlaygroundShell';

type DurationOption = '400' | '850' | '1200' | '1500';
type ColorOption = 'rgba(255,255,255,0.7)' | '#e74c3c' | '#3b82f6' | '#000';

const DURATIONS: DurationOption[] = ['400', '850', '1200', '1500'];
const COLORS: ColorOption[] = ['rgba(255,255,255,0.7)', '#e74c3c', '#3b82f6', '#000'];

const RipplePlayground = () => {
  const [duration, setDuration] = useState<DurationOption>('850');
  const [color, setColor] = useState<ColorOption>('rgba(255,255,255,0.7)');

  const generateCode = () => `<Box
  width="220px"
  height="120px"
  backgroundColor="#3498db"
  rounded
  style={{ position: "relative" }}
>
  <Box style={{ padding: "20px", color: "white" }}>Click me!</Box>
  <Ripple duration={${duration}} color="${color}" />
</Box>`;

  return (
    <PlaygroundShell
      preview={
        <Box
          width="220px"
          height="120px"
          backgroundColor="#3498db"
          rounded
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          <Box style={{ padding: '20px', color: 'white' }}>Click me!</Box>
          <Ripple duration={Number(duration)} color={color} />
        </Box>
      }
      controls={
        <>
          <OptionGroup label="Duration (ms)" options={DURATIONS} value={duration} onChange={setDuration} />
          <OptionGroup label="Color" options={COLORS} value={color} onChange={setColor} />
        </>
      }
      code={generateCode()}
    />
  );
};

export default RipplePlayground;
