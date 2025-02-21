import Box from '@/components/common/Box';
import Button from '@/components/common/Button';
import Ripple from '@/components/common/Ripple/Ripple';
import { Heading, Paragraph } from '@/components/common/Typography';
import { docsData } from '@/types/docsData';

export const docs: docsData[] = [
  {
    title: 'Basic Ripple Effect',
    desc: 'A simple ripple effect with default settings',
    code: `
      <Ripple>
        <Box width="200px" height="100px" backgroundColor="#3498db" style={{ position: 'relative' }} rounded>
          <Box style={{ padding: '20px', color: 'white' }}>Click me!</Box>
        </Box>
      </Ripple>
      `,
    snippet: (
      <Ripple>
        <Box width="200px" height="100px" backgroundColor="#3498db" style={{ position: 'relative' }} rounded>
          <Box style={{ padding: '20px', color: 'white' }}>Click me!</Box>
        </Box>
      </Ripple>
    ),
  },
  {
    title: 'Custom Color Ripple',
    desc: 'Ripple effect with a custom color',
    code: `
<Box width="200px" height="100px" backgroundColor="#2ecc71" style={{ position: "relative" }}>
  <Box padding="20px" color="white">
    Red Ripple
  </Box>
  <Ripple color="#e74c3c" />
</Box>
      `,
    snippet: (
      <Ripple color="#e74c3c">
        <Box width="200px" height="100px" backgroundColor="#2ecc71" style={{ position: 'relative' }}>
          <Box padding="20px" color="white">
            Red Ripple
          </Box>
        </Box>
      </Ripple>
    ),
  },
  {
    title: 'Slow Ripple Effect',
    desc: 'Ripple effect with a longer duration',
    code: `
<Box width="200px" height="100px" backgroundColor="#9b59b6" style={{ position: "relative" }}>
  <Box padding="20px" color="white">
    Slow Ripple
  </Box>
  <Ripple duration={1500} />
</Box>
      `,
    snippet: (
      <Ripple duration={1500}>
        <Box width="200px" height="100px" backgroundColor="#9b59b6" style={{ position: 'relative' }}>
          <Box padding="20px" color="white">
            Slow Ripple
          </Box>
        </Box>
      </Ripple>
    ),
  },
  {
    title: 'Ripple on a Button',
    desc: 'Adding a ripple effect to a button',
    code: `
<Button style={{ padding: "10px 20px", fontSize: "16px", position: "relative", overflow: "hidden" }}>
  <Paragraph className="relative z-10">
    Click Me
  </Paragraph>
  <Ripple />
</Button>
      `,
    snippet: (
      <Ripple>
        <Button style={{ padding: '10px 20px', fontSize: '16px', position: 'relative', overflow: 'hidden' }}>
          <Paragraph className="relative z-10">Click Me</Paragraph>
        </Button>
      </Ripple>
    ),
  },
  {
    title: 'Ripple on an Image',
    desc: 'Adding a ripple effect to an image',
    code: `
<Box style={{ width: "200px", height: "200px", position: "relative", overflow: "hidden" }}>
  <img
      src="https://example.com/image.jpg"
      alt="Example"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />
  <Ripple color="rgba(255, 255, 255, 0.5)" />
</Box>
      `,
    snippet: (
      <Ripple color="rgba(255, 255, 255, 0.5)">
        <Box style={{ width: '200px', height: '200px', position: 'relative', overflow: 'hidden' }}>
          <img
            src="https://example.com/image.jpg"
            alt="Example"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
      </Ripple>
    ),
  },
  {
    title: 'Ripple with Custom Shape',
    desc: 'Ripple effect on a circular element',
    code: `
<Box
  width="150px"
  height="150px"
  backgroundColor="#f39c12"
  style={{
    borderRadius: "50%",
    position: "relative",
    overflow: "hidden",
  }}
>
  <Box height="100%" color="white" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    Circular Ripple
  </Box>
  <Ripple />
</Box>
      `,
    snippet: (
      <Box
        width="150px"
        height="150px"
        backgroundColor="#f39c12"
        style={{
          borderRadius: '50%',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Ripple>
          <Box height="100%" color="white" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            Circular Ripple
          </Box>
        </Ripple>
      </Box>
    ),
  },
  {
    title: 'Ripple on a Card',
    desc: 'Adding a ripple effect to a card-like component',
    code: `
<Box
  width="300px"
  padding="20px"
  style={{
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    position: "relative",
    overflow: "hidden",
  }}
>
  <Heading size="h3">
      Card Title
  </Heading>
  <Paragraph>This is some content inside a card with a ripple effect.</Paragraph>
  <Ripple color="rgba(0, 0, 0, 0.1)" />
</Box>
      `,
    snippet: (
      <Ripple color="rgba(0, 0, 0, 0.1)">
        <Box
          width="300px"
          padding="20px"
          style={{
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Heading size="h3">Card Title</Heading>
          <Paragraph>This is some content inside a card with a ripple effect.</Paragraph>
        </Box>
      </Ripple>
    ),
  },
  {
    title: 'Ripple with Multiple Elements',
    desc: 'Ripple effect applied to multiple elements',
    code: `
<Box style={{ display: "flex", gap: "10px" }}>
{["#e74c3c", "#3498db", "#2ecc71"].map((color, index) => (
    <Box
      width="100px"
      height="100px"
      backgroundColor={color}
      key={index}
      style={{ position: "relative" }}
      rounded
    >
      <Box
        height="100%"
        color="white"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Click
      </Box>
      <Ripple />
    </Box>
  ))}
</Box>
      `,
    snippet: (
      <Box style={{ display: 'flex', gap: '10px' }}>
        {['#e74c3c', '#3498db', '#2ecc71'].map((color, index) => (
          <Box
            width="100px"
            height="100px"
            backgroundColor={color}
            key={index}
            style={{ position: 'relative' }}
            rounded
          >
            <Ripple>
              <Box
                height="100%"
                color="white"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Click
              </Box>
            </Ripple>
          </Box>
        ))}
      </Box>
    ),
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const rows = [
  ['duration', 'number', '850', 'The duration of the ripple effect animation in milliseconds.'],
  ['color', 'string', '#fff', 'The color of the ripple effect.'],
];
