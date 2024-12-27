import { useContext, useEffect, KeyboardEvent } from 'react';
import { AccordionContext } from '../context/AccordionContext';
import { backgroundColorMap } from '../utils/backgroundColorMap';
import { sizesMap } from '../utils/sizesMap';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils';
import { AccordionHeaderProps } from '../types';

/**
 * A component that represents the header part of an accordion item.
 *
 * @component
 * @example
 * ```tsx
 * <AccordionHeader eventKey="1">
 *   Accordion Title
 * </AccordionHeader>
 * ```
 *
 * @param props - The component props
 * @param props.children - The content to be displayed in the header
 * @param props.eventKey - Unique identifier for the accordion item
 * @param props.icon - Optional custom icon component to replace the default chevron
 * @param props.open - Controls whether the accordion item is initially expanded
 * @param props.className - Additional CSS classes to apply to the header
 * @param props.style - Additional inline styles to apply to the header
 *
 * @throws {Error} Throws an error if used outside of an Accordion context
 *
 * @requires AccordionContext
 * @requires ChevronDown
 */
export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  children,
  eventKey,
  icon,
  open,
  className,
  style,
  ...rest
}) => {
  const context = useContext(AccordionContext);
  if (!context) throw new Error('AccordionHeader must be used within an Accordion');

  const { activeKeys, toggleItem, openItem, variant, size } = context;
  const isActive = activeKeys.has(eventKey);

  useEffect(() => {
    if (open && !isActive) {
      openItem(eventKey);
    }
  }, [open, eventKey, openItem, isActive]);

  const backgroundColor = isActive ? backgroundColorMap[variant] : 'bg-transparent';
  const dimensions = sizesMap[size];

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleItem(eventKey);
    }
  };
  return (
    <div
      className={cn(
        'flex justify-between font-medium items-center cursor-pointer text-foreground dark:text-foreground p-4 transition-colors duration-300',
        isActive ? 'text-white' : 'text-black',
        backgroundColor,
        dimensions,
        className
      )}
      tabIndex={0}
      role="button"
      onClick={() => toggleItem(eventKey)}
      onKeyDown={handleKeyDown}
      style={style}
      {...rest}
    >
      {children}
      {icon || <ChevronDown className={cn('transition-transform size-4', isActive ? 'rotate-180' : '')} />}
    </div>
  );
};
