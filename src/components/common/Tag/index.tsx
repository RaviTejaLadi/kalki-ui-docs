import React, { forwardRef } from 'react';
import { cn } from '@/utils';
import { tagVariants } from './tagVariants';
import { TagProps } from './types';
import { TagText } from './TagText';
import { TagClose } from './TagClose';
import { TagIcon } from './TagIcon';

/**
 * A customizable tag component that can be used to display labels, badges, or other similar elements.
 *
 * @component
 * @param {Object} props - The component props
 * @param {ReactNode} props.children - The content to be displayed inside the tag
 * @param {string} [props.variant] - The visual style variant of the tag
 * @param {string} [props.size] - The size of the tag
 * @param {string} [props.className] - Additional CSS class names to be applied
 * @param {Ref<HTMLSpanElement>} ref - The forwarded ref to access the underlying span element
 *
 * @example
 * ```tsx
 * <Tag variant="primary" size="md">
 *   Label
 * </Tag>
 * ```
 */
const Tag = forwardRef<HTMLSpanElement, TagProps>(({ children, variant, size, className, ...rest }, ref) => {
  return (
    <span ref={ref} className={cn(tagVariants({ variant, size }), className)} {...rest}>
      {children}
    </span>
  );
});

Tag.displayName = 'Tag';

export default Object.assign(Tag as React.ForwardRefExoticComponent<TagProps & React.RefAttributes<HTMLDivElement>>, {
  Icon: TagIcon,
  Text: TagText,
  Close: TagClose,
});
export { TagIcon, TagClose, TagText };
