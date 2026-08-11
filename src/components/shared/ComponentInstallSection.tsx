import { SectionHeader } from '@/components/common/SectionHeader';
import { SyntaxHighlighter } from '@/components/common/SyntaxHighLighter/SyntaxHighLighter';
import Separator from '@/components/common/Separator';

interface ComponentInstallSectionProps {
  /** Public component export name, e.g. "Button" or "Modal" */
  componentName: string;
  /** Optional custom import snippet. Defaults to named import from kalki-ui. */
  importCode?: string;
  /** Whether the component is a default export in the package. */
  defaultExport?: boolean;
}

/**
 * shadcn-style Installation + Usage block for component docs pages.
 * Users can install the package or copy the usage import into their app.
 */
const ComponentInstallSection = ({
  componentName,
  importCode,
  defaultExport = false,
}: ComponentInstallSectionProps) => {
  const usageCode =
    importCode ??
    (defaultExport ? `import ${componentName} from "kalki-ui";` : `import { ${componentName} } from "kalki-ui";`);

  return (
    <div className="my-6 space-y-6">
      <div>
        <SectionHeader variant="transparent" size="sm">
          <SectionHeader.Title className="tracking-wide">Installation</SectionHeader.Title>
          <SectionHeader.SubTitle className="tracking-wide">
            Install the package, then import styles once in your app entry file.
          </SectionHeader.SubTitle>
        </SectionHeader>
        <div className="mt-3 space-y-3">
          <SyntaxHighlighter code={`npm install kalki-ui`} language="javascript" />
          <SyntaxHighlighter code={`import "kalki-ui/dist/index.css";`} language="javascript" />
        </div>
      </div>

      <Separator />

      <div>
        <SectionHeader variant="transparent" size="sm">
          <SectionHeader.Title className="tracking-wide">Usage</SectionHeader.Title>
          <SectionHeader.SubTitle className="tracking-wide">
            Import the component from the package, or copy any example below and use it directly.
          </SectionHeader.SubTitle>
        </SectionHeader>
        <div className="mt-3">
          <SyntaxHighlighter code={usageCode} language="tsx" />
        </div>
      </div>
    </div>
  );
};

export default ComponentInstallSection;
