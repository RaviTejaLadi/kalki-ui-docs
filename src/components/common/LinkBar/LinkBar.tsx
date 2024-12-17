import React, { useRef, forwardRef } from 'react';
import { cn } from '@/utils';
import { linkBarVariants } from './linkBarVariants';
import { LinkBarProps } from './interface';
import { LinkBarContext } from './context';
import { LinkBarContent } from './LinkBarContent';
import { LinkBarLink } from './LinkBarLink';
import { LinkBarControl } from './LinkBarControl';

const LinkBar = forwardRef<HTMLDivElement, LinkBarProps>(
  (
    { children, className, variant, size, activeUrl, onUrlChange, ...props },
    ref
  ) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
      <LinkBarContext.Provider value={{ activeUrl, onUrlChange, scrollRef }}>
        <div
          ref={ref}
          className={cn(linkBarVariants({ variant, size }), className)}
          {...props}
        >
          {children}
        </div>
      </LinkBarContext.Provider>
    );
  }
);

LinkBar.displayName = 'LinkBar';

export default Object.assign(
  LinkBar as React.ForwardRefExoticComponent<
    LinkBarProps & React.RefAttributes<HTMLDivElement>
  >,
  {
    Content: LinkBarContent,
    Link: LinkBarLink,
    Control: LinkBarControl,
  }
);

export { LinkBarContent, LinkBarLink, LinkBarControl };
