import { docsData } from '@/types/docsData';
import { BasicRightDrawerExample } from '../examples/BasicRightDrawerExample';

export const docs: docsData[] = [
  {
    title: 'Basic Right Drawer',
    desc: 'A simple drawer that opens from the right side of the screen.',
    code: `
  const BasicRightDrawerExample = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Right Drawer</button>
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="right" width="300px">
          <Drawer.Header closeButton onClose={() => setIsOpen(false)}>
            <Drawer.Title>Right Drawer</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <p>This drawer opens from the right side.</p>
          </Drawer.Body>
        </Drawer>
      </div>
    );
  }
        `,
    snippet: <BasicRightDrawerExample />,
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const drawerRows = [
  [
    'position',
    'string',
    'right',
    "Specifies the position of the drawer. Possible values are 'top', 'right', 'bottom', and 'left'.",
  ],
  ['isOpen', 'boolean', 'false', 'Controls whether the drawer is open or closed.'],
  ['onClose', 'function', '-', 'Callback function to be called when the drawer should be closed.'],
  ['width', 'string', '-', "Specifies the width of the drawer when position is 'left' or 'right'."],
  ['height', 'string', '-', "Specifies the height of the drawer when position is 'top' or 'bottom'."],
  ['overLayColor', 'string', 'rgb(204 204 204 / 39%)', 'Specifies the color of the overlay behind the drawer.'],
  ['className', 'string', '-', 'Additional CSS class to be applied to the drawer.'],
  ['style', 'object', '-', 'Additional inline styles to be applied to the drawer.'],
];

export const drawerHeaderRows = [
  ['closeButton', 'boolean', '-', 'Determines whether to show a close button in the header.'],
  ['onClose', 'function', '-', 'Callback function to be called when the close button is clicked.'],
  ['className', 'string', '-', 'Additional CSS class to be applied to the header.'],
  ['style', 'object', '-', 'Additional inline styles to be applied to the header.'],
];

export const drawerTitleRows = [
  ['className', 'string', '-', 'Additional CSS class to be applied to the title.'],
  ['style', 'object', '-', 'Additional inline styles to be applied to the title.'],
];

export const drawerBodyRows = [
  ['className', 'string', '-', 'Additional CSS class to be applied to the body.'],
  ['style', 'object', '-', 'Additional inline styles to be applied to the body.'],
];
