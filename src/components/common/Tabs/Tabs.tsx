// import React, { useState, useEffect, ReactNode, CSSProperties } from 'react';
// import { cva } from 'class-variance-authority';
// import Box from '../Box/Box';
// import { cn } from '@/utils';
// import { Monitor, Smartphone, Tablet } from 'lucide-react';

// interface TabProps {
//   label: string;
//   value: string;
//   children: ReactNode;
//   leftIcon?: ReactNode;
//   rightIcon?: ReactNode;
//   disabled?: boolean;
//   className?: string;
// }

// interface TabsProps {
//   children: React.ReactNode;
//   active?: string;
//   onChange?: (value: string) => void;
//   variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'help' | 'info' | 'dark' | 'light';
//   size?: 'sm' | 'md' | 'lg';
//   headerStyles?: CSSProperties;
//   bodyStyles?: CSSProperties;
//   className?: string;
//   style?: CSSProperties;
//   title?: string;
// }

// const tabButtonStyles = cva(
//   'relative flex items-center justify-center rounded-md transition-all duration-300 ease-in-out mr-2 min-w-[140px] max-w-[180px] font-medium  hover:shadow-sm group',
//   {
//     variants: {
//       variant: {
//         primary: 'bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-200',
//         secondary: 'bg-gray-50 text-muted-foreground hover:bg-gray-100 border border-gray-200',
//         success: 'bg-green-50 text-green-800 hover:bg-green-100 border border-green-200',
//         danger: 'bg-red-50 text-red-800 hover:bg-red-100 border border-red-200',
//         warning: 'bg-yellow-50 text-yellow-800 hover:bg-yellow-100 border border-yellow-200',
//         help: 'bg-purple-50 text-purple-800 hover:bg-purple-100 border border-purple-200',
//         info: 'bg-cyan-50 text-cyan-800 hover:bg-cyan-100 border border-cyan-200',
//         dark: 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-900',
//         light: 'bg-gray-50 text-muted-foreground hover:bg-gray-100 border border-gray-300',
//       },
//       size: {
//         sm: 'text-xs px-3 py-1.5 space-x-2',
//         md: 'text-sm px-3.5 py-2 space-x-3',
//         lg: 'text-base px-4 py-2.5 space-x-4',
//       },
//       active: {
//         true: 'font-semibold rounded-md ring-[0.5px] ring-opacity-50',
//         false: 'font-normal',
//       },
//       disabled: {
//         true: 'opacity-40 cursor-not-allowed pointer-events-none',
//         false: '',
//       },
//     },
//     compoundVariants: [
//       {
//         variant: 'primary',
//         active: true,
//         class: 'ring-blue-300 bg-blue-100',
//       },
//       {
//         variant: 'secondary',
//         active: true,
//         class: 'ring-gray-300 text-foreground bg-gray-100',
//       },
//       {
//         variant: 'success',
//         active: true,
//         class: 'ring-green-300 bg-green-100',
//       },
//       {
//         variant: 'danger',
//         active: true,
//         class: 'ring-red-300 bg-red-100',
//       },
//       {
//         variant: 'warning',
//         active: true,
//         class: 'ring-yellow-300 bg-yellow-100',
//       },
//       {
//         variant: 'help',
//         active: true,
//         class: 'ring-purple-300 bg-purple-100',
//       },
//       {
//         variant: 'info',
//         active: true,
//         class: 'ring-cyan-300 bg-cyan-100',
//       },
//       {
//         variant: 'dark',
//         active: true,
//         class: 'ring-gray-600 bg-gray-700',
//       },
//       {
//         variant: 'light',
//         active: true,
//         class: 'ring-gray-300 text-foreground bg-gray-200',
//       },
//     ],
//     defaultVariants: {
//       variant: 'primary',
//       size: 'sm',
//     },
//   }
// );

// export const Tabs: React.FC<TabsProps> = ({
//   children,
//   active,
//   onChange,
//   variant = 'primary',
//   size = 'sm',
//   headerStyles,
//   bodyStyles,
//   className,
//   style,
//   title,
// }) => {
//   const getInitialActiveTab = () => {
//     const firstEnabledTab = React.Children.toArray(children).find((child: any) => !child.props.disabled);
//     return active || (firstEnabledTab as any)?.props?.value;
//   };

//   const [activeTab, setActiveTab] = useState(getInitialActiveTab);

//   useEffect(() => {
//     if (active !== undefined) {
//       setActiveTab(active);
//     }
//   }, [active]);

//   const handleTabClick = (value: string) => {
//     setActiveTab(value);
//     if (onChange) {
//       onChange(value);
//     }
//   };

//   return (
//     <Box padding="5" rounded className={cn(className)} style={style}>
//       <div className={cn('flex mb-2 p-1 items-center  bg-white border rounded-md overflow-x-auto', headerStyles)}>
//         {React.Children.map(children, (child: any) => (
//           <button
//             key={child.props.value}
//             className={cn(
//               tabButtonStyles({
//                 variant,
//                 size,
//                 active: child.props.value === activeTab,
//                 disabled: child.props.disabled,
//               }),
//               'group'
//             )}
//             onClick={() => !child.props.disabled && handleTabClick(child.props.value)}
//             disabled={child.props.disabled}
//             title={child.props.label}
//           >
//             {child.props.leftIcon && (
//               <span className="opacity-70 group-hover:opacity-100 transition-opacity">{child.props.leftIcon}</span>
//             )}
//             <span className="flex-1 text-center">{child.props.label}</span>
//             {child.props.rightIcon && (
//               <span className="opacity-70 group-hover:opacity-100 transition-opacity">{child.props.rightIcon}</span>
//             )}
//           </button>
//         ))}
//         <div className="flex justify-between w-full items-center">
//           <div className="text-foreground font-medium text-xs ml-2 ">{title}</div>
//           <div className="flex items-center justify-end gap-2 p-1 rounded-md border border-gray-100 bg-gray-50">
//             {[{ Component: Monitor }, { Component: Tablet }, { Component: Smartphone }].map(({ Component }, index) => (
//               <button key={index} className="p-1 rounded hover:bg-gray-100">
//                 <Component className="size-4 text-foreground hover:text-muted-foreground" />
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className={cn('bg-white border rounded-md overflow-y-auto', bodyStyles)}>
//         {React.Children.toArray(children).find((child: any) => child.props.value === activeTab)}
//       </div>
//     </Box>
//   );
// };

// export const Tab: React.FC<TabProps> = ({ children, className }) => (
//   <div className={cn('p-2 animate-fade-in', className)}>{children}</div>
// );

import React, { useState, useEffect, ReactNode, CSSProperties } from 'react';
import { cva } from 'class-variance-authority';
import Box from '../Box';
import { cn } from '@/utils';
import { Monitor, Smartphone, Tablet } from 'lucide-react';

interface TabProps {
  label: string;
  value: string;
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
  className?: string;
}

interface TabsProps {
  children: React.ReactNode;
  active?: string;
  onChange?: (value: string) => void;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'help' | 'info' | 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  headerStyles?: CSSProperties;
  bodyStyles?: CSSProperties;
  className?: string;
  style?: CSSProperties;
  title?: string;
}

const tabButtonStyles = cva(
  'relative flex items-center justify-center rounded-md transition-all duration-300 ease-in-out mr-2 font-medium hover:shadow-sm group',
  {
    variants: {
      variant: {
        primary: 'bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-200',
        secondary: 'bg-gray-50 text-muted-foreground hover:bg-gray-100 border border-gray-200',
        success: 'bg-green-50 text-green-800 hover:bg-green-100 border border-green-200',
        danger: 'bg-red-50 text-red-800 hover:bg-red-100 border border-red-200',
        warning: 'bg-yellow-50 text-yellow-800 hover:bg-yellow-100 border border-yellow-200',
        help: 'bg-purple-50 text-purple-800 hover:bg-purple-100 border border-purple-200',
        info: 'bg-cyan-50 text-cyan-800 hover:bg-cyan-100 border border-cyan-200',
        dark: 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-900',
        light: 'bg-gray-50 text-muted-foreground hover:bg-gray-100 border border-gray-300',
      },
      size: {
        sm: 'text-xs px-3 py-1.5 space-x-2',
        md: 'text-sm px-3.5 py-2 space-x-3',
        lg: 'text-base px-4 py-2.5 space-x-4',
      },
      active: {
        true: 'font-semibold rounded-md ring-[0.5px] ring-opacity-50',
        false: 'font-normal',
      },
      disabled: {
        true: 'opacity-40 cursor-not-allowed pointer-events-none',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        active: true,
        class: 'ring-blue-300 bg-blue-100',
      },
      {
        variant: 'secondary',
        active: true,
        class: 'ring-gray-300 text-foreground bg-gray-100',
      },
      {
        variant: 'success',
        active: true,
        class: 'ring-green-300 bg-green-100',
      },
      {
        variant: 'danger',
        active: true,
        class: 'ring-red-300 bg-red-100',
      },
      {
        variant: 'warning',
        active: true,
        class: 'ring-yellow-300 bg-yellow-100',
      },
      {
        variant: 'help',
        active: true,
        class: 'ring-purple-300 bg-purple-100',
      },
      {
        variant: 'info',
        active: true,
        class: 'ring-cyan-300 bg-cyan-100',
      },
      {
        variant: 'dark',
        active: true,
        class: 'ring-gray-600 bg-gray-700',
      },
      {
        variant: 'light',
        active: true,
        class: 'ring-gray-300 text-foreground bg-gray-200',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'sm',
    },
  }
);

export const Tabs: React.FC<TabsProps> = ({
  children,
  active,
  onChange,
  variant = 'primary',
  size = 'sm',
  headerStyles,
  bodyStyles,
  className,
  style,
  title,
}) => {
  const getInitialActiveTab = () => {
    const firstEnabledTab = React.Children.toArray(children).find((child: any) => !child.props.disabled);
    return active || (firstEnabledTab as any)?.props?.value;
  };

  const [activeTab, setActiveTab] = useState(getInitialActiveTab);
  const [tabSize, setTabSize] = useState<'sm' | 'md' | 'lg'>(size);

  useEffect(() => {
    if (active !== undefined) {
      setActiveTab(active);
    }
  }, [active]);

  const handleTabClick = (value: string) => {
    setActiveTab(value);
    if (onChange) {
      onChange(value);
    }
  };

  const handleSizeChange = (size: 'sm' | 'md' | 'lg') => {
    setTabSize(size);
  };
  // const getContentWidthClass = () => {
  //   switch (tabSize) {
  //     case 'lg':
  //       return 'w-full';
  //     case 'md':
  //       return 'w-3/4';
  //     case 'sm':
  //       return 'w-1/2';
  //     default:
  //       return 'w-full';
  //   }
  // };
  return (
    <Box padding="5" rounded className={cn(className)} style={style}>
      <div className={cn('flex mb-2 p-1 items-center bg-white border rounded-md overflow-x-auto', headerStyles)}>
        {React.Children.map(children, (child: any) => (
          <button
            key={child.props.value}
            className={cn(
              tabButtonStyles({
                variant,
                size,
                active: child.props.value === activeTab,
                disabled: child.props.disabled,
              }),
              'group'
            )}
            onClick={() => !child.props.disabled && handleTabClick(child.props.value)}
            disabled={child.props.disabled}
            title={child.props.label}
          >
            {child.props.leftIcon && (
              <span className="opacity-70 group-hover:opacity-100 transition-opacity">{child.props.leftIcon}</span>
            )}
            <span className="flex-1 text-center">{child.props.label}</span>
            {child.props.rightIcon && (
              <span className="opacity-70 group-hover:opacity-100 transition-opacity">{child.props.rightIcon}</span>
            )}
          </button>
        ))}
        {/* <div className="flex justify-between w-full items-center">
          <div className="text-foreground font-medium text-xs ml-2 ">{title}</div>
          <div className="flex items-center justify-end gap-2 p-1 rounded-md border border-gray-100 bg-gray-50">
            {[{ Component: Monitor, size: 'lg' }, { Component: Tablet, size: 'md' }, { Component: Smartphone, size: 'sm' }].map(({ Component, size }, index) => (
              <button
                key={index}
                className="p-1 rounded hover:bg-gray-100"
                onClick={() => handleSizeChange(size as 'sm' | 'md' | 'lg')}
              >
                <Component className="size-4 text-foreground hover:text-muted-foreground" />
              </button>
            ))}
          </div>
        </div> */}
      </div>
      <div className={cn('bg-white border flex items-center rounded-md overflow-y-auto', bodyStyles)}>
        {React.Children.toArray(children).find((child: any) => child.props.value === activeTab)}
      </div>
    </Box>
  );
};

export const Tab: React.FC<TabProps> = ({ children, className }) => (
  <div className={cn('p-2 animate-fade-in w-full', className)}>{children}</div>
);
