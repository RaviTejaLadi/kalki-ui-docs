import { docsData } from '@/types/docsData';
import { BasicModalExample } from '../examples/BasicModalExample';

export const docs: docsData[] = [
  {
    title: 'Basic Modal',
    desc: 'A simple modal with a header, body, and footer.',
    code: `
import React, { useState } from 'react';
import { Modal } from "kalki-ui";

const BasicModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal openModal={isOpen}>
        <Modal.Header closeButton onClose={() => setIsOpen(false)}>
          <Modal.Title>Basic Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is the content of the modal.</p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
      `,
    snippet: <BasicModalExample />,
  },
];

export const columns = ['Name', 'Type', 'Default', 'Description'];

export const modalProps = [
  ['openModal', 'boolean', '-', 'Controls whether the modal is open or closed. Required prop.'],
  [
    'position',
    'string',
    'center',
    "Specifies the position of the modal. Possible values are 'top', 'right', 'bottom', 'left', and 'center'.",
  ],
  [
    'size',
    'string',
    'md',
    "Specifies the size of the modal. Possible values are 'sm', 'md', 'lg', 'xl', 'xxl', and 'fullscreen'.",
  ],
  [
    'variant',
    'string',
    '-',
    "Specifies the visual variant of the modal. Possible values are 'success', 'warning', 'info', and 'danger'.",
  ],
];

export const modalHeaderProps = [
  ['closeButton', 'boolean', '-', 'Determines whether to show a close button in the header.'],
  ['onClose', 'function', '-', 'Callback function to be called when the close button is clicked.'],
  ['height', 'string', '-', 'Specifies the height of the header.'],
];

export const modalTitleProps = [['children', 'node', '-', 'The content of the modal title.']];

export const modalBodyProps = [['height', 'string', '-', 'Specifies the height of the body.']];

export const modalFooterProps = [['height', 'string', '-', 'Specifies the height of the footer.']];
