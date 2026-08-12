import { Link } from 'react-router-dom';
import { DocsDivider } from '@/components/shared/DocsDivider';
import { SectionHeader, Paragraph, Div, SectionHeaderTitle, SectionHeaderSubTitle } from 'kalki-ui';
const TypographyPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Typography</SectionHeaderTitle>
        <SectionHeaderSubTitle className="tracking-wide">
          Typography primitives for headings, body copy, and emphasized phrases in Kalki UI.
        </SectionHeaderSubTitle>
      </SectionHeader>
      <DocsDivider />
      <Div className="my-6 space-y-4 max-w-2xl">
        <Paragraph>
          Use these primitives to keep text hierarchy and emphasis consistent across your application. Each component
          supports decoration props and standard HTML attributes for flexible composition.
        </Paragraph>
        <ul className="list-disc space-y-3 pl-6 text-muted-foreground">
          <li>
            <Link to="/components/heading" className="text-primary underline underline-offset-4">
              Heading
            </Link>
            {' — '}
            semantic h1–h6 titles with decoration options.
          </li>
          <li>
            <Link to="/components/paragraph" className="text-primary underline underline-offset-4">
              Paragraph
            </Link>
            {' — '}
            body text with size and decoration variants.
          </li>
          <li>
            <Link to="/components/highlighter" className="text-primary underline underline-offset-4">
              Highlighter
            </Link>
            {' — '}
            highlight words in a string with color and variant styles.
          </li>
          <li>
            <Link to="/components/text-highlighter" className="text-primary underline underline-offset-4">
              Text Highlighter
            </Link>
            {' — '}
            highlight phrases with solid, outlined, gradient, and other styles.
          </li>
        </ul>
      </Div>
    </div>
  );
};

export default TypographyPage;
