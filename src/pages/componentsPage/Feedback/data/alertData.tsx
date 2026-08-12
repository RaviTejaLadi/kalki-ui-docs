import { Alert, Box, Button, Paragraph, AlertHeader, AlertFooter, AlertBody, ButtonText } from 'kalki-ui';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic Alert',
    desc: 'The most basic usage of the Alert component. By default, the Alert uses the primary variant.',
    code: `
import { Alert } from "kalki-ui";

export default function BasicAlert() {
  return <Alert>This is a primary alert.</Alert>;
}
`,
    snippet: <Alert>This is a primary alert.</Alert>,
  },
  {
    title: 'Alert with Different Variants',
    desc: 'Use variants like success, danger, warning, and info to convey different message types.',
    code: `
import { Alert } from "kalki-ui";

export default function AlertVariants() {
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
    desc: 'Use compound components to structure richer alerts.',
    code: `
import { Alert, AlertHeader, AlertBody, AlertFooter } from "kalki-ui";

export default function StructuredAlert() {
  return (
    <Alert variant="info">
      <AlertHeader>Alert Header</AlertHeader>
      <AlertBody>This is the main content of the alert.</AlertBody>
      <AlertFooter>Alert Footer</AlertFooter>
    </Alert>
  );
}
`,
    snippet: (
      <Alert variant="info">
        <AlertHeader>Alert Header</AlertHeader>
        <AlertBody>This is the main content of the alert.</AlertBody>
        <AlertFooter>Alert Footer</AlertFooter>
      </Alert>
    ),
  },
  {
    title: 'Alert with Custom Styling',
    desc: 'Apply custom inline styles for one-off visual treatments.',
    code: `
import { Alert } from "kalki-ui";

export default function CustomAlert() {
  return (
    <Alert style={{ border: "2px solid #007bff", borderRadius: "10px" }}>
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
    desc: 'Combine Paragraph and Button for a richer alert layout.',
    snippet: (
      <Box padding="10px">
        <Alert variant="success">
          <AlertHeader>Alert meaning</AlertHeader>
          <AlertBody>
            <Paragraph className="p-3">
              In web development terminology, an &quot;alert&quot; typically refers to a way to deliver a message or
              notification to the user. Alerts are used to capture the user&apos;s attention for various reasons such as
              informing them of important events, errors, warnings, or other significant information.
            </Paragraph>
          </AlertBody>
          <AlertFooter>
            <Box
              padding="5px"
              rounded
              style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', backgroundColor: 'inherit' }}
            >
              <Button size="sm" variant="primary">
                <ButtonText>Save</ButtonText>
              </Button>
              <Button size="sm" variant="secondary">
                <ButtonText>Cancel</ButtonText>
              </Button>
            </Box>
          </AlertFooter>
        </Alert>
      </Box>
    ),
    code: `
import { Alert, Paragraph, Box, Button, AlertHeader, AlertBody, AlertFooter, ButtonText } from "kalki-ui";

export default function RichAlert() {
  return (
    <Alert variant="success">
      <AlertHeader>Alert meaning</AlertHeader>
      <AlertBody>
        <Paragraph className="p-3">
          In web development terminology, an "alert" typically refers to a way to deliver a message or
          notification to the user. Alerts are used to capture the user's attention for various reasons
          such as informing them of important events, errors, warnings, or other significant information.
        </Paragraph>
      </AlertBody>
      <AlertFooter>
        <Box
          padding="5px"
          rounded
          style={{ display: "flex", justifyContent: "flex-end", gap: "8px", backgroundColor: "inherit" }}
        >
          <Button size="sm" variant="primary">
            <ButtonText>Save</ButtonText>
          </Button>
          <Button size="sm" variant="secondary">
            <ButtonText>Cancel</ButtonText>
          </Button>
        </Box>
      </AlertFooter>
    </Alert>
  );
}
`,
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  [
    'variant',
    '"primary" | "secondary" | "success" | "danger" | "warning" | "info" | "help" | "light"',
    'primary',
    'Visual style of the Alert.',
  ],
  ['children', 'ReactNode', '-', 'Content rendered inside the Alert.'],
  ['style', 'CSSProperties', '-', 'Optional inline styles.'],
  ['className', 'string', '-', 'Additional CSS classes.'],
];
