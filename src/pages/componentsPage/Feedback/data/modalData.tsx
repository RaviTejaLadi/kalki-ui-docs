import { docsData } from '@/types/docsData';
import { BasicModalExample } from '../examples/BasicModalExample';
import DifferentSizes from '../examples/DifferentSizes';

export const docs: docsData[] = [
  {
    title: 'Basic Modal',
    desc: 'A simple modal with a header, body, and footer.',
    code: `
import React, { useState } from "react";
import { Modal, Button } from "kalki-ui";

const BasicModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal open={isOpen} size="md" onClose={() => setIsOpen(false)} position="top">
        <Modal.Header closeButton onClose={() => setIsOpen(false)}>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is the modal content.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BasicModalExample;
`,
    snippet: <BasicModalExample />,
  },
  {
    title: 'Different Sizes Modal',
    desc: 'Modals support multiple sizes: sm, md, lg, xl, 2xl, and fullscreen.',
    code: `
import React, { useState } from "react";
import { Modal, Button, Box } from "kalki-ui";

type ModalSize = "sm" | "md" | "lg" | "xl" | "2xl" | "fullscreen";

const DifferentSizes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState<ModalSize>("sm");

  const handleModal = (nextSize: ModalSize, open: boolean) => {
    setSize(nextSize);
    setIsOpen(open);
  };

  return (
    <Box>
      <Box style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {(["sm", "md", "lg", "xl", "2xl", "fullscreen"] as ModalSize[]).map((item) => (
          <Button key={item} onClick={() => handleModal(item, true)}>
            {item}
          </Button>
        ))}
      </Box>
      <Modal open={isOpen} size={size} onClose={() => setIsOpen(false)}>
        <Modal.Header closeButton onClose={() => setIsOpen(false)}>
          <Modal.Title>{size} Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is a {size}-sized modal.</p>
        </Modal.Body>
      </Modal>
    </Box>
  );
};

export default DifferentSizes;
`,
    snippet: <DifferentSizes />,
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const modalProps = [
  ['open', 'boolean', '-', 'Controls whether the modal is open or closed. Required prop.'],
  ['onClose', '() => void', '-', 'Called when the overlay is clicked (or when you wire close actions).'],
  [
    'position',
    '"top" | "right" | "bottom" | "left" | "center"',
    '"center"',
    'Specifies the position of the modal within the viewport.',
  ],
  ['size', '"sm" | "md" | "lg" | "xl" | "2xl" | "fullscreen"', '"md"', 'Specifies the size of the modal.'],
  ['overLayColor', 'string', 'rgba(0, 0, 0, 0.75)', 'Background color of the overlay behind the modal.'],
  ['overlayZIndex', 'number', '40', 'z-index of the overlay.'],
  ['modalZIndex', 'number', '50', 'z-index of the modal dialog.'],
  ['className', 'string', '-', 'Additional CSS classes for the modal panel.'],
];

export const modalHeaderProps = [
  ['closeButton', 'boolean', '-', 'Determines whether to show a close button in the header.'],
  ['onClose', 'function', '-', 'Callback function to be called when the close button is clicked.'],
  ['height', 'string', '-', 'Specifies the height of the header.'],
  ['className', 'string', '-', 'Additional CSS classes for the header.'],
];

export const modalTitleProps = [
  ['children', 'node', '-', 'The content of the modal title.'],
  ['className', 'string', '-', 'Additional CSS classes for the title.'],
];

export const modalBodyProps = [
  ['height', 'string', '-', 'Specifies the height of the body.'],
  ['children', 'node', '-', 'The main content of the modal.'],
  ['className', 'string', '-', 'Additional CSS classes for the body.'],
];

export const modalFooterProps = [
  ['height', 'string', '-', 'Specifies the height of the footer.'],
  ['children', 'node', '-', 'Footer actions such as buttons.'],
  ['className', 'string', '-', 'Additional CSS classes for the footer.'],
];
