import Alert from '@/components/common/Alert';
import Box from '@/components/common/Box';
import Button from '@/components/common/Button';
import Separator from '@/components/common/Separator';
import { Paragraph } from '@/components/common/Typography';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic Alert',
    desc: "This example demonstrates the most basic usage of the Alert component. By default, the Alert uses the 'primary' variant, which typically represents a neutral informational message. The Alert component wraps its children, allowing you to include any content inside. This is useful for simple notifications or messages that don't require additional structure.",
    code: `
import { Alert } from "react-ui-essentials";

function BasicAlert() {
  return (
    <Alert>
      This is a primary alert.
    </Alert>
  );
}
    `,
    snippet: <Alert>This is a primary alert.</Alert>,
  },
  {
    title: 'Alert with Different Variants',
    desc: "The Alert component supports multiple visual variants to convey different types of messages. This example showcases four common variants: 'success', 'danger', 'warning', and 'info'. Each variant typically has a distinct color scheme and might include an icon (depending on your CSS implementation). Use 'success' for positive messages, 'danger' for errors or critical issues, 'warning' for cautionary messages, and 'info' for general information. This flexibility allows you to effectively communicate the nature of the message to the user.",
    code: `
import { Alert } from "react-ui-essentials";

function VariantAlerts() {
  return (
    <>
      <Alert variant="success">This is a success alert.</Alert>
      <Alert variant="danger">This is a danger alert.</Alert>
      <Alert variant="warning">This is a warning alert.</Alert>
      <Alert variant="info">This is an info alert.</Alert>
    </>
  );
}
    `,
    snippet: (
      <>
        <Alert variant="success">This is a success alert.</Alert>
        <Alert variant="danger">This is a danger alert.</Alert>
        <Alert variant="warning">This is a warning alert.</Alert>
        <Alert variant="info">This is an info alert.</Alert>
      </>
    ),
  },
  {
    title: 'Alert with Header, Body, and Footer',
    desc: 'This example illustrates the use of compound components to create a more structured Alert. The Alert.Header can be used for titles or summary information. The Alert.Body is ideal for the main content or detailed message. The Alert.Footer can contain additional information, links, or actions related to the alert. This structure is particularly useful for complex notifications that require clear organization of information. It also allows for consistent styling across different parts of the alert, improving readability and user experience.',
    code: `
import { Alert } from "react-ui-essentials";

function StructuredAlert() {
  return (
    <Alert variant="info">
      <Alert.Header>Alert Header</Alert.Header>
      <Alert.Body>
        This is the main content of the alert.
      </Alert.Body>
      <Alert.Footer>Alert Footer</Alert.Footer>
    </Alert>
  );
}
    `,
    snippet: (
      <Alert variant="info">
        <Alert.Header>Alert Header</Alert.Header>
        <Alert.Body>This is the main content of the alert.</Alert.Body>
        <Alert.Footer>Alert Footer</Alert.Footer>
      </Alert>
    ),
  },
  {
    title: 'Alert with Custom Styling',
    desc: "This example shows how to apply custom inline styles to the Alert component, allowing for further customization beyond the predefined variants. Here, we're adding a custom border and border-radius to the alert. This technique is useful when you need to create a unique visual treatment for a specific instance of an alert, without affecting the global styles. It's important to note that while inline styles provide quick customization, for more complex or reusable styles, you might want to consider using CSS modules or a CSS-in-JS solution for better maintainability.",
    code: `
import { Alert } from "react-ui-essentials";

function CustomStyledAlert() {
  return (
    <Alert style={{ border: '2px solid #007bff', borderRadius: '10px' }}>
      This alert has custom styling.
    </Alert>
  );
}
    `,
    snippet: (
      <Alert style={{ border: '2px solid #007bff', borderRadius: '10px' }}>This alert has custom styling.</Alert>
    ),
  },
  {
    title: 'Alert with additional content',
    desc: '',
    snippet: (
      <Box padding="10px">
        <Alert variant="success">
          <Alert.Header>Alert meaning</Alert.Header>
          <Separator />
          <Alert.Body>
            <Paragraph className="p-3">
              In web development terminology, an &quot;alert&quot; typically refers to a way to deliver a message or
              notification to the user. Alerts are used to capture the user&apos;s attention for various reasons such as
              informing them of important events, errors, warnings, or other significant information. Alerts can be
              implemented in different ways, depending on the context and the desired user experience.
            </Paragraph>
          </Alert.Body>
          <Separator />
          <Alert.Footer>
            <Box
              padding="5px"
              rounded
              style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', backgroundColor: 'inherit' }}
            >
              <Button size="sm" variant="primary">
                <Button.Text>Save</Button.Text>
              </Button>
              <Button size="sm" variant="secondary">
                <Button.Text>Cancel</Button.Text>
              </Button>
            </Box>
          </Alert.Footer>
        </Alert>
      </Box>
    ),
    code: `
<Alert variant="success">
  <Alert.Header>Alert meaning</Alert.Header>
  <Divider />
  <Alert.Body>
    <Paragraph type="p" style={{ padding: "10px" }}>
      In web development terminology, an "alert" typically refers to a way to deliver a message or notification
      to the user. Alerts are used to capture the user's attention for various reasons such as informing them of
      important events, errors, warnings, or other significant information. Alerts can be implemented in
      different ways, depending on the context and the desired user experience.
    </Paragraph>
  </Alert.Body>
  <Divider />
  <Alert.Footer>
    <Box
      padding="5px"
      rounded
      style={{ display: "flex", justifyContent: "flex-end", gap: "8px", backgroundColor: "inherit" }}
    >
      <Button size="sm" variant="primary">
        <Button.Text>Save</Button.Text>
      </Button>
      <Button size="sm" variant="secondary">
        <Button.Text>Cancel</Button.Text>
      </Button>
    </Box>
  </Alert.Footer>
</Alert>
    `,
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  [
    'variant',
    'string',
    'primary',
    "Specifies the visual variant of the Alert. Possible values are 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', and 'light'. Each variant typically has its own color scheme and may include specific icons (depending on your CSS implementation).",
  ],
  [
    'children',
    'node',
    'null',
    'The content to be rendered inside the Alert component. This can be text, other React components, or any valid JSX.',
  ],
  [
    'ref',
    'Ref',
    'null',
    'Allows passing a ref to the underlying DOM element. This can be useful for directly manipulating the DOM, managing focus, or integrating with third-party DOM libraries.',
  ],
  [
    'style',
    'object',
    'null',
    'Allows passing custom inline styles to the Alert component. This is useful for one-off customizations without needing to modify global styles.',
  ],
  [
    'className',
    'string',
    'null',
    'Allows passing additional CSS classes to the Alert component. This is useful for applying custom styles defined in your stylesheets.',
  ],
];
