import { useState } from 'react';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'kalki-ui';
import PlaygroundShell, { OptionGroup, SIZES_SM_2XL } from './PlaygroundShell';

const AccordionPlayground = () => {
  const [size, setSize] = useState<(typeof SIZES_SM_2XL)[number]>('md');

  const generateCode = () => `<Accordion size="${size}">
  <AccordionItem>
    <AccordionHeader eventKey="0">What is Kalki UI?</AccordionHeader>
    <AccordionBody eventKey="0">A reusable React component library for building consistent interfaces.</AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader eventKey="1">Is it customizable?</AccordionHeader>
    <AccordionBody eventKey="1">Yes. Components support sizing and composition.</AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader eventKey="2">Can I compose components?</AccordionHeader>
    <AccordionBody eventKey="2">Yes. The API is designed for compound component patterns.</AccordionBody>
  </AccordionItem>
</Accordion>`;

  return (
    <PlaygroundShell
      preview={
        <Accordion size={size} className="w-full">
          <AccordionItem>
            <AccordionHeader eventKey="0">What is Kalki UI?</AccordionHeader>
            <AccordionBody eventKey="0">
              A reusable React component library for building consistent interfaces.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader eventKey="1">Is it customizable?</AccordionHeader>
            <AccordionBody eventKey="1">Yes. Components support sizing and composition.</AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader eventKey="2">Can I compose components?</AccordionHeader>
            <AccordionBody eventKey="2">Yes. The API is designed for compound component patterns.</AccordionBody>
          </AccordionItem>
        </Accordion>
      }
      controls={
        <>
          <OptionGroup label="Size" options={SIZES_SM_2XL} value={size} onChange={setSize} />
        </>
      }
      code={generateCode()}
      previewClassName="w-full"
    />
  );
};

export default AccordionPlayground;
