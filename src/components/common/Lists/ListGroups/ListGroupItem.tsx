import { forwardRef } from 'react';
import { ListGroupItemProps } from './interface';
import { useListGroup } from './context';
import { itemVariants, textVariants } from './listGroupVariants';
import { cn } from '@/utils';
import { ChevronRight } from 'lucide-react';

export const ListGroupItem = forwardRef<HTMLLIElement, ListGroupItemProps>(
  ({ icon, label, description, disabled, onClick, className, ...props }, ref) => {
    const { variant, showArrows, showDividers } = useListGroup();

    return (
      <li
        ref={ref}
        className={cn(
          'relative flex items-center gap-3 px-3 py-2 transition-all duration-200',
          'outline-none',
          itemVariants[variant],
          textVariants[variant],
          disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
          showDividers && 'border-b',
          variant === 'dark' ? 'border-gray-700' : 'border-gray-200',
          className
        )}
        onClick={!disabled ? onClick : undefined}
        tabIndex={!disabled ? 0 : -1}
        role="button"
        {...props}
      >
        {icon && <span className="flex-shrink-0 mr-2 w-5 h-5">{icon}</span>}
        <div className="flex-grow min-w-0">
          <div className="font-medium truncate">{label}</div>
          {description && (
            <div
              className={cn('text-xs opacity-75 line-clamp-1', variant === 'dark' ? 'text-gray-300' : 'text-gray-600')}
            >
              {description}
            </div>
          )}
        </div>
        {showArrows && !disabled && (
          <ChevronRight
            className={cn('w-4 h-4 flex-shrink-0 transition-transform duration-200', 'group-hover:translate-x-1')}
          />
        )}
      </li>
    );
  }
);
