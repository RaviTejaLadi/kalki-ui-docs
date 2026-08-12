import { Box, Button, ButtonIcon, ButtonText } from 'kalki-ui';
import { docsData } from '@/types/docsData';
import {
  AlertCircle,
  AlertTriangle,
  Bell,
  Check,
  Ghost,
  Globe,
  HelpCircle,
  Home,
  Info,
  Moon,
  Square,
  Sun,
} from 'lucide-react';
import BasicButton from '../examples/Button/BasicButton';

export const docs: docsData[] = [
  {
    title: 'Basic Button',
    desc: 'This example demonstrates the most basic usage of the Button component with default properties.',
    code: `
import { Button } from "kalki-ui";
import { useToast } from "kalki-ui-toast";
import { BoxIcon } from "lucide-react";

const BasicButton = () => {
  const { addToast } = useToast();

  const showToast = () => {
    addToast({
      message: "Button clicked!",
      variant: "default",
      icon: <BoxIcon className="w-3.5 h-3.5" />,
    });
  };

  return <Button onClick={showToast}>Click me</Button>;
};

export default BasicButton;
`,
    snippet: <BasicButton />,
  },
  {
    title: 'Button Variants',
    desc: 'This example shows different variants of the Button component.',
    code: `
import { Button, Box, ButtonIcon } from "kalki-ui";

export default function ButtonVariants() {
  return (
    <Box style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      {(
        [
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "help",
          "light",
          "dark",
          "outline",
          "ghost",
        ] as const
      ).map((item) => (
        <Button size="sm" key={item} variant={item}>
          <ButtonIcon>{item}</ButtonIcon>
        </Button>
      ))}
    </Box>
  );
}
`,
    snippet: (
      <Box style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {[
          'primary' as const,
          'secondary' as const,
          'success' as const,
          'danger' as const,
          'warning' as const,
          'info' as const,
          'help' as const,
          'light' as const,
          'dark' as const,
          'outline' as const,
          'ghost' as const,
        ].map((item) => (
          <Button size="sm" key={item} variant={item}>
            <ButtonIcon>{item}</ButtonIcon>
          </Button>
        ))}
      </Box>
    ),
  },
  {
    title: 'Button Sizes',
    desc: 'This example demonstrates different sizes of the Button component.',
    code: `
import { Button, Box } from "kalki-ui";

export default function ButtonSizes() {
  return (
    <Box style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </Box>
  );
}
`,
    snippet: (
      <Box style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </Box>
    ),
  },
  {
    title: 'Raised Button',
    desc: 'This example shows how to create a raised button with a shadow effect.',
    code: `
import { Button } from "kalki-ui";

export default function RaisedButton() {
  return (
    <Button raised variant="primary">
      Raised Button
    </Button>
  );
}
`,
    snippet: (
      <Button raised variant="primary">
        Raised Button
      </Button>
    ),
  },
  {
    title: 'Rounded Button',
    desc: 'This example demonstrates how to create a button with rounded corners.',
    code: `
import { Button } from "kalki-ui";

export default function RoundedButton() {
  return (
    <Button rounded variant="success">
      Rounded Button
    </Button>
  );
}
`,
    snippet: (
      <Button rounded variant="success">
        Rounded Button
      </Button>
    ),
  },
  {
    title: 'Disabled Button',
    desc: 'This example shows a disabled button.',
    code: `
import { Button } from "kalki-ui";

export default function DisabledButton() {
  return <Button disabled>Disabled Button</Button>;
}
`,
    snippet: <Button disabled>Disabled Button</Button>,
  },
  {
    title: 'Button with Icon and Text',
    desc: 'This example demonstrates how to use ButtonIcon and ButtonText together.',
    code: `
import { Button, ButtonIcon, ButtonText } from "kalki-ui";
import { Home } from "lucide-react";

export default function ButtonWithIconAndText() {
  return (
    <Button variant="primary">
      <ButtonIcon>
        <Home className="size-4" />
      </ButtonIcon>
      <ButtonText>Like</ButtonText>
    </Button>
  );
}
`,
    snippet: (
      <Button variant="primary">
        <ButtonIcon>
          <Home className="size-4" />
        </ButtonIcon>
        <ButtonText>Like</ButtonText>
      </Button>
    ),
  },
  {
    title: 'Custom Styled Button',
    desc: 'This example shows how to apply custom styles to the Button component.',
    code: `
import { Button, ButtonText } from "kalki-ui";

export default function CustomStyledButton() {
  return (
    <Button className="p-2">
      <ButtonText className="text-red-200 text-sm capitalize font-bold">
        Custom Button
      </ButtonText>
    </Button>
  );
}
`,
    snippet: (
      <Button className="p-2">
        <ButtonText className=" text-red-200 text-sm capitalize font-bold">Custom Button</ButtonText>
      </Button>
    ),
  },
  {
    title: 'Button with Icon and Label',
    desc: 'Icon buttons across variants with a matching label.',
    code: `
import { Button, Box, ButtonIcon, ButtonText } from "kalki-ui";
import {
  AlertCircle,
  AlertTriangle,
  Bell,
  Check,
  Ghost,
  Globe,
  HelpCircle,
  Info,
  Moon,
  Square,
  Sun,
} from "lucide-react";

export default function ButtonWithIcons() {
  return (
    <Box style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      {[
        { variant: "primary" as const, icon: <Globe className="size-4" /> },
        { variant: "secondary" as const, icon: <Bell className="size-4" /> },
        { variant: "success" as const, icon: <Check className="size-4" /> },
        { variant: "danger" as const, icon: <AlertTriangle className="size-4" /> },
        { variant: "warning" as const, icon: <AlertCircle className="size-4" /> },
        { variant: "info" as const, icon: <Info className="size-4" /> },
        { variant: "help" as const, icon: <HelpCircle className="size-4" /> },
        { variant: "light" as const, icon: <Sun className="size-4" /> },
        { variant: "dark" as const, icon: <Moon className="size-4" /> },
        { variant: "outline" as const, icon: <Square className="size-4" /> },
        { variant: "ghost" as const, icon: <Ghost className="size-4" /> },
      ].map(({ variant, icon }) => (
        <Button size="sm" key={variant} variant={variant}>
          <ButtonIcon>{icon}</ButtonIcon>
          <ButtonText>{variant}</ButtonText>
        </Button>
      ))}
    </Box>
  );
}
`,
    snippet: (
      <Box style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {[
          { variant: 'primary' as const, icon: <Globe className="size-4" /> },
          { variant: 'secondary' as const, icon: <Bell className="size-4" /> },
          { variant: 'success' as const, icon: <Check className="size-4" /> },
          { variant: 'danger' as const, icon: <AlertTriangle className="size-4" /> },
          { variant: 'warning' as const, icon: <AlertCircle className="size-4" /> },
          { variant: 'info' as const, icon: <Info className="size-4" /> },
          { variant: 'help' as const, icon: <HelpCircle className="size-4" /> },
          { variant: 'light' as const, icon: <Sun className="size-4" /> },
          { variant: 'dark' as const, icon: <Moon className="size-4" /> },
          { variant: 'outline' as const, icon: <Square className="size-4" /> },
          { variant: 'ghost' as const, icon: <Ghost className="size-4" /> },
        ].map(({ variant, icon }) => (
          <Button size="sm" key={variant} variant={variant}>
            <ButtonIcon>{icon}</ButtonIcon>
            <ButtonText>{variant}</ButtonText>
          </Button>
        ))}
      </Box>
    ),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  ['size', 'string', 'sm', 'Defines size of the button. [xs, sm, md, lg, xl, 2xl, 3xl]'],
  [
    'variant',
    'string',
    'primary',
    'Visual style of the button. [primary, secondary, success, danger, warning, info, help, light, dark, outline, ghost, link]',
  ],
  ['children', 'node', 'null', 'Child elements of the button.'],
  ['type', 'string', 'button', 'Native button type attribute.'],
  ['onClick', 'function', 'null', 'Click handler for the button.'],
  ['className', 'string', 'null', 'Additional CSS classes for the button.'],
  ['raised', 'bool', 'false', 'Adds a shadow to indicate elevation.'],
  ['style', 'object', '{}', 'Inline styles for the button.'],
  ['rounded', 'bool', 'false', 'Applies a fully rounded border radius.'],
  ['disabled', 'bool', 'false', 'Disables the button when true.'],
  ['isPending', 'bool', 'false', 'Shows a loading state when true.'],
  ['isPendingText', 'string', '-', 'Optional text shown while pending.'],
  ['loader', 'node', '-', 'Custom loader element while pending.'],
];

export const componentHierarchyCode = `
  <Button>
    <ButtonText>

    </ButtonText>
    <ButtonIcon>
    
    </ButtonIcon>
  </Button>
`;
