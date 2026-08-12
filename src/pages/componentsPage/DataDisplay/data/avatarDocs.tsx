import { Avatar, AvatarFallback, AvatarImage } from 'kalki-ui';
import { docsData } from '@/types/docsData';

const pic = 'https://github.com/shadcn.png';

export const docs: docsData[] = [
  {
    title: 'Basic Avatar',
    desc: 'This example demonstrates the most basic usage of the Avatar component with a source image, default alt text, and default size.',
    code: `
import { Avatar, AvatarImage, AvatarFallback } from "kalki-ui";

export default function BasicAvatar() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
      <AvatarFallback>SC</AvatarFallback>
    </Avatar>
  );
}
`,
    snippet: (
      <Avatar>
        <AvatarImage src={pic} alt="Avatar" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
    ),
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

export const componentHierarchyCode = `
  <Avatar>
    <AvatarImage  />
    <AvatarFallback>
    
    </AvatarFallback>
  </Avatar>
`;
