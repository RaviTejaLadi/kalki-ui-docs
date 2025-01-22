import Avatar from '@/components/common/Avatar';
import pic from './avater.jpg';
import { docsData } from '@/types/docsData';
import Box from '@/components/common/Box';

export const docs: docsData[] = [
  {
    title: 'Basic Avatar',
    desc: 'This example demonstrates the most basic usage of the Avatar component with a source image, default alt text, and default size.',
    code: `
import { Avatar } from 'react-ui-essentials';

const App = () => (
  <Avatar src="https://example.com/avatar.jpg" />
);
      `,
    snippet: <Avatar src={pic} />,
  },
  {
    title: 'Custom Size Avatar',
    desc: 'This example shows how to customize the size of the Avatar component by specifying width and height properties.',
    code: `
import { Avatar } from 'react-ui-essentials';

const App = () => (
  <Avatar src="https://example.com/avatar.jpg" width="100px" height="100px" />
);
      `,
    snippet: <Avatar src={pic} width="100px" height="100px" />,
  },
  {
    title: 'Fluid Avatar',
    desc: 'This example demonstrates the usage of the fluid property, which makes the image contain its content.',
    code: `
import { Avatar } from 'react-ui-essentials';

const App = () => (
  <Avatar src="https://example.com/avatar.jpg" fluid />
);
      `,
    snippet: (
      <Box style={{ display: 'flex', justifyContent: 'flex-start', alignItem: 'center' }}>
        <Avatar src={pic} width="30px" height="30px" alt="avatar" fluid />
        <Avatar src={pic} width="40px" height="40px" alt="avatar" fluid />
        <Avatar src={pic} width="50px" height="50px" alt="avatar" fluid />
        <Avatar src={pic} width="60px" height="60px" alt="avatar" fluid />
      </Box>
    ),
  },
  {
    title: 'Avatar with Curved Borders',
    desc: 'This example shows how to use the curvedBorder property to apply a 5px border radius to the Avatar.',
    code: `
import { Avatar } from 'react-ui-essentials';

const App = () => (
  <Avatar src="https://example.com/avatar.jpg" curvedBorder />
);
      `,
    snippet: (
      <Box style={{ display: 'flex', justifyContent: 'flex-start', alignItem: 'center' }}>
        <Avatar src={pic} width="30px" height="30px" alt="avatar" curvedBorder />
        <Avatar src={pic} width="40px" height="40px" alt="avatar" curvedBorder />
        <Avatar src={pic} width="50px" height="50px" alt="avatar" curvedBorder />
        <Avatar src={pic} width="60px" height="60px" alt="avatar" curvedBorder />
      </Box>
    ),
  },
  {
    title: 'Circular Avatar',
    desc: 'This example demonstrates the usage of the circle property to make the Avatar image circular.',
    code: `
import { Avatar } from 'react-ui-essentials';

const App = () => (
  <Avatar src="https://example.com/avatar.jpg" circle />
);
      `,
    snippet: (
      <Box style={{ display: 'flex', justifyContent: 'flex-start', alignItem: 'center' }}>
        <Avatar src={pic} width="30px" height="30px" alt="avatar" circle />
        <Avatar src={pic} width="40px" height="40px" alt="avatar" circle />
        <Avatar src={pic} width="50px" height="50px" alt="avatar" circle />
        <Avatar src={pic} width="60px" height="60px" alt="avatar" circle />
      </Box>
    ),
  },
  {
    title: 'Avatar with Custom Alt Text',
    desc: 'This example shows how to specify custom alt text for the Avatar component.',
    code: `
import { Avatar } from 'react-ui-essentials';

const App = () => (
  <Avatar src="https://example.com/avatar.jpg" alt="User Avatar" />
);
      `,
    snippet: <Avatar src={pic} alt="User Avatar" />,
  },
  {
    title: 'Avatar with Additional Properties',
    desc: 'This example demonstrates passing additional properties to the Avatar component, such as an onClick handler.',
    code: `
import { Avatar } from 'react-ui-essentials';

const App = () => (
  <Avatar
    src="https://example.com/avatar.jpg"
    onClick={() => alert('Avatar clicked')}
  />
);
      `,
    snippet: <Avatar src={pic} onClick={() => alert('Avatar clicked')} />,
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];
export const rows = [
  ['src', 'string', 'null', 'Defines the image to display.'],
  ['alt', 'string', 'avatar', 'It specifies an alternate text for an image, if the image cannot be displayed.'],
  ['width', 'string', '50px', 'width of avatar.'],
  ['height', 'string', '50px', 'height of avatar.'],
  ['fluid', 'bool', 'null', 'if used object-fit will be contain or cover.'],
  ['curvedBorder', 'bool', 'null', 'for curved borders'],
  ['circle', 'bool', 'null', 'for circular avatar'],
];
