import { ReactNode } from 'react';
import { Card, CardContent } from 'kalki-ui';
import { SyntaxHighlighter } from '../shared/SyntaxHighLighter/SyntaxHighLighter';

type OptionGroupProps<T extends string> = {
  label: string;
  options: readonly T[] | T[];
  value: T;
  onChange: (value: T) => void;
};

export const OptionGroup = <T extends string>({ label, options, value, onChange }: OptionGroupProps<T>) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`px-3 py-1 text-xs rounded ${
            value === option
              ? 'bg-blue-100 border border-blue-500 text-blue-700'
              : 'border text-muted-foreground dark:border-gray-200/10 hover:bg-gray-100/10'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

type CheckboxOption = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

type CheckboxGridProps = {
  options: CheckboxOption[];
};

export const CheckboxGrid = ({ options }: CheckboxGridProps) => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    {options.map((option) => (
      <div key={option.label}>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={option.checked}
            onChange={(e) => option.onChange(e.target.checked)}
            className="rounded"
          />
          <span>{option.label}</span>
        </label>
      </div>
    ))}
  </div>
);

type PlaygroundShellProps = {
  preview: ReactNode;
  controls: ReactNode;
  code: string;
  previewClassName?: string;
};

const PlaygroundShell = ({ preview, controls, code, previewClassName }: PlaygroundShellProps) => (
  <div className="w-full my-3">
    <Card className="w-full mb-6">
      <CardContent className="flex flex-col gap-3 !p-3">
        <div className="w-full">
          <h3 className="mb-3 text-sm font-medium">Preview</h3>
          <div
            className={`flex items-center justify-center rounded-lg bg-gray-50 p-4 dark:bg-gray-900 ${
              previewClassName ?? ''
            }`}
          >
            {preview}
          </div>
        </div>
        <hr className="dark:border-gray-200/10" />
        <div className="flex flex-col gap-4">{controls}</div>
      </CardContent>
    </Card>

    <Card className="w-full">
      <CardContent className="!p-3">
        <SyntaxHighlighter code={code} language="jsx" />
      </CardContent>
    </Card>
  </div>
);

export default PlaygroundShell;

export const COLOR_VARIANTS = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'help',
  'light',
  'dark',
] as const;

export const BUTTON_VARIANTS = [...COLOR_VARIANTS, 'outline', 'ghost', 'link'] as const;

export const SIZES_XS_3XL = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] as const;
export const SIZES_SM_LG = ['sm', 'md', 'lg'] as const;
export const SIZES_SM_XL = ['sm', 'md', 'lg', 'xl'] as const;
export const SIZES_SM_2XL = ['sm', 'md', 'lg', 'xl', '2xl'] as const;
