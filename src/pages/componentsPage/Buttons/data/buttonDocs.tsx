import Box from '@/components/common/Box';
import Button from '@/components/common/Button';
import { docsData } from '@/types/docsData';
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
} from 'lucide-react';

export const docs: docsData[] = [
  {
    title: 'Basic Button',
    desc: 'This example demonstrates the most basic usage of the Button component with default properties.',
    code: `
  import { Button } from 'kalki-ui';
    
  const App = () => (
    <Button onClick={() => alert('Button clicked!')}>
      Click me
    </Button>
  );
      `,
    snippet: <Button onClick={() => alert('Button clicked!')}>Click me</Button>,
  },
  {
    title: 'Button Variants',
    desc: 'This example shows different variants of the Button component.',
    code: `
  import { Button } from 'kalki-ui';
    
  const App = () => (
    <>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="info">Info</Button>
    </>
  );
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
            <Button.Icon>{item}</Button.Icon>
          </Button>
        ))}
      </Box>
    ),
  },
  {
    title: 'Button Sizes',
    desc: 'This example demonstrates different sizes of the Button component.',
    code: `
  import { Button } from 'kalki-ui';
    
  const App = () => (
    <>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </>
  );
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
  import { Button } from 'kalki-ui';
    
  const App = () => (
    <Button raised variant="primary">
      Raised Button
    </Button>
  );
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
  import { Button } from 'kalki-ui';
    
  const App = () => (
    <Button rounded variant="success">
      Rounded Button
    </Button>
  );
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
  import { Button } from 'kalki-ui';
    
  const App = () => (
    <Button disabled>
      Disabled Button
    </Button>
  );
      `,
    snippet: <Button disabled>Disabled Button</Button>,
  },
  {
    title: 'Button with Icon and Text',
    desc: 'This example demonstrates how to use ButtonIcon and ButtonText components together.',
    code: `
  import { Button } from 'kalki-ui';
    
  const App = () => (
    <Button variant="primary">
      <Button.Icon>
          💖
      </Button.Icon>
      <Button.Text>Like</Button.Text>
    </Button>
  );
      `,
    snippet: (
      <Button variant="primary">
        <Button.Icon>💖</Button.Icon>
        <Button.Text>Like</Button.Text>
      </Button>
    ),
  },
  {
    title: 'Custom Styled Button',
    desc: 'This example shows how to apply custom styles to the Button component.',
    code: `
  import { Button } from "kalki-ui";
      
  const App = () => (
    <Button
      style={{
        backgroundColor: "#6200ea",
        color: "#ffffff",
        padding: "10px 20px",
        fontSize: "16px",
        fontWeight: "bold",
        textTransform: "uppercase",
      }}
    >
      Custom Button
    </Button>
  );
      `,
    snippet: (
      <Button
        style={{
          backgroundColor: '#6200ea',
          color: '#ffffff',
          padding: '10px 20px',
          fontSize: '16px',
          fontWeight: 'bold',
          textTransform: 'uppercase',
        }}
      >
        Custom Button
      </Button>
    ),
  },
  {
    title: 'Button with onClick Handler',
    desc: 'This example demonstrates how to use the onClick prop to handle button clicks.',
    code: `
  import { Button } from 'kalki-ui';
    
  const App = () => {
    const [count, setCount] = useState(0);
    
    return (
      <Button 
        onClick={() => setCount(prevCount => prevCount + 1)}
        variant="info"
      >
        Clicked {count} times
      </Button>
    );
  };
      `,
    snippet: (
      <Button
        // onClick={}
        variant="info"
      >
        Clicked 0 times
      </Button>
    ),
  },
  {
    title: 'Button with only Icon',
    desc: '',
    code: `
  import { Button,Box } from 'kalki-ui';
    
  const App = () => {
    
    return (
      <Box style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((item) => (
          <Button size="sm" variant={item}>
            <Button.Icon>
              <RoundedIcons.Terminal width="20px" height="20px" />
            </Button.Icon>
          </Button>
        ))}
      </Box>
    );
  };
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
            <Button.Icon>{icon}</Button.Icon>
            <Button.Text>{variant}</Button.Text>
          </Button>
        ))}
      </Box>
    ),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  ['size', 'string', 'sm', 'Defines size of the button. [sm, md, lg, xl, xxl] '],
  [
    'variant',
    'string',
    'primary',
    'It specifies the visual style of the badge. [ primary, secondary, success, danger, warning, info, help, light, dark]',
  ],
  ['children', 'node', 'null', 'Used to get the child elements of the component.'],
  ['type', 'string', 'button', 'to define type of button component.'],
  ['onClick', 'function', 'null', 'to define function of the component.'],
  ['className', 'string', 'null', 'to declare class of button component.'],
  ['raised', 'bool', 'false', 'Add a shadow to indicate elevation.'],
  ['style', 'object', '{}', 'to provide custom styles to button component.'],
  ['rounded', 'bool', 'false', 'Add a circular border radius to the button.'],
];

export const componentHierarchyCode = `
  <Button>
    <Button.Text>
    </Button.Text>
    <Button.Icon>
    </Button.Icon>
  </Button>
`;
