import React, { useState } from 'react';
import Form, { FormGroup, Slider } from '@/components/common/Form';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic Slider',
    desc: 'A slider for selecting a numeric value between 0 and 100.',
    code: `
import React, { useState } from 'react';
import Form, { FormGroup, Slider } from "kalki-ui";

export default function SliderExample() {
  const [experience, setExperience] = useState(50);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExperience(parseInt(e.target.value, 10));
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <FormGroup label="Experience Level" labelFor="experience">
        <div className="flex flex-col space-y-2">
          <Slider
            id="experience"
            name="experience"
            min={0}
            max={100}
            step={1}
            value={experience}
            onChange={handleChange}
          />
          <div className="text-sm text-gray-500">{experience}%</div>
        </div>
      </FormGroup>
    </Form>
  );
}
    `,
    snippet: (() => {
      const SliderExample = () => {
        const [experience, setExperience] = useState(50);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setExperience(parseInt(e.target.value, 10));
        };

        return (
          <Form onSubmit={(e) => e.preventDefault()}>
            <FormGroup label="Experience Level" labelFor="experience">
              <div className="flex flex-col space-y-2">
                <Slider
                  id="experience"
                  name="experience"
                  min={0}
                  max={100}
                  step={1}
                  value={experience}
                  onChange={handleChange}
                />
                <div className="text-sm text-gray-500">{experience}%</div>
              </div>
            </FormGroup>
          </Form>
        );
      };

      return <SliderExample />;
    })(),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const rows = [
  ['min', 'number', '0', 'Minimum value of the slider.'],
  ['max', 'number', '100', 'Maximum value of the slider.'],
  ['step', 'number', '1', 'Step interval between values.'],
  ['defaultValue', 'number', '50', 'Initial value when uncontrolled.'],
  ['value', 'number', '—', 'Controlled current value of the slider.'],
  ['onChange', '(event) => void', '—', 'Callback fired when the slider value changes.'],
];
