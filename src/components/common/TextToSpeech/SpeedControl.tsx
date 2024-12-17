import Div from '../Div';
import Select, { SelectContent, SelectItem, SelectTrigger, SelectValue } from '../Select';

interface SpeedControlProps {
  currentRate: number;
  onSpeedChange: (rate: number) => void;
}

export const SpeedControl: React.FC<SpeedControlProps> = ({ currentRate, onSpeedChange }) => {
  const handleChange = (value: string) => {
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      onSpeedChange(parsedValue);
    }
  };

  return (
    <Div className="flex items-center space-x-2">
      <label htmlFor="speed-control" className="text-sm font-medium text-muted-foreground">
        Speed:
      </label>
      <Select id="speed-control" value={`${currentRate}x`} onValueChange={handleChange} className="w-[5rem]">
        <SelectTrigger className="h-[1.8rem]">
          <SelectValue placeholder="Playback Speed" />
        </SelectTrigger>
        <SelectContent>
          {['0.5', '0.75', '1', '1.25', '1.5', '1.75', '2'].map((rate) => (
            <SelectItem className="text-xs text-muted-foreground" key={rate} value={rate}>
              {rate}x
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Div>
  );
};
