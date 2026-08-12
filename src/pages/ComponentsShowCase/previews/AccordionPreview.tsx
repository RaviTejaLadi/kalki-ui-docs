import { Accordion, AccordionHeader, AccordionBody, AccordionItem } from 'kalki-ui';
const AccordionPreview = {
  basic: (
    <Accordion size="sm" className="mb-4" variant="primary">
      <AccordionItem>
        <AccordionHeader eventKey="1">what is accordion in react ?</AccordionHeader>
        <AccordionBody eventKey="1" className="tracking-wide">
          An accordion is a UI component that allows users to expand and collapse content sections. It's a great way to
          organize information and make your UI more interactive.
        </AccordionBody>
        <AccordionHeader eventKey="2">Accordion Example</AccordionHeader>
        <AccordionBody eventKey="2" className="tracking-wide">
          demonstrates a form divided into three sections using an accordion to show one section at a time.
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  ),
};

export default AccordionPreview;
