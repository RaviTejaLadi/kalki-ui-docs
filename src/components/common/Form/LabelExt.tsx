import React from 'react';
import { Info } from 'lucide-react';
import Label, { LabelProps } from './Label';
import Tooltip from './Tooltip';

interface LabelExtProps extends Omit<LabelProps, 'children'> {
  label: string;
  info?: string;
}

const LabelExt: React.FC<LabelExtProps> = ({ label, info, htmlFor, className, ...props }) => {
  return (
    <div className="flex items-center gap-1">
      <Label htmlFor={htmlFor} className={className} {...props}>
        {label}
      </Label>
      {info && (
        <Tooltip content={info}>
          <Info className="text-[var(--icon-color)] size-3 cursor-pointer" />
        </Tooltip>
      )}
    </div>
  );
};

export default LabelExt;
