import { SectionHeader, Separator, SectionHeaderTitle, SectionHeaderSubTitle } from 'kalki-ui';
import { SyntaxHighlighter } from '@/components/shared/SyntaxHighLighter/SyntaxHighLighter';

interface ComponentInstallSectionProps {
  /** Public component export name, e.g. "Button" or "Modal" */
  componentName: string;
  /** Optional custom import snippet. Defaults to named import from kalki-ui. */
  importCode?: string;
  /** Optional deep-import path segment, e.g. "button" → kalki-ui/button */
  deepImport?: string;
}

/**
 * Installation + Usage block for component docs pages (kalki-ui v3: named exports only).
 */
const ComponentInstallSection = ({ componentName, importCode, deepImport }: ComponentInstallSectionProps) => {
  const usageCode =
    importCode ??
    (deepImport
      ? `import { ${componentName} } from "kalki-ui/${deepImport}";`
      : `import { ${componentName} } from "kalki-ui";`);

  return (
    <div className="my-6 space-y-6">
      <div>
        <SectionHeader variant="transparent" size="sm">
          <SectionHeaderTitle className="tracking-wide">Installation</SectionHeaderTitle>
          <SectionHeaderSubTitle className="tracking-wide">
            Install the package, then import styles once in your app entry file.
          </SectionHeaderSubTitle>
        </SectionHeader>
        <div className="mt-3 space-y-3">
          <SyntaxHighlighter code={`npm install kalki-ui`} language="javascript" />
          <SyntaxHighlighter code={`import "kalki-ui/styles.css";`} language="javascript" />
        </div>
      </div>

      <Separator />

      <div>
        <SectionHeader variant="transparent" size="sm">
          <SectionHeaderTitle className="tracking-wide">Usage</SectionHeaderTitle>
          <SectionHeaderSubTitle className="tracking-wide">
            v3 uses named exports only (no compound APIs like Button.Icon). Prefer deep imports for smaller bundles, or
            import from the root package.
          </SectionHeaderSubTitle>
        </SectionHeader>
        <div className="mt-3">
          <SyntaxHighlighter code={usageCode} language="tsx" />
        </div>
      </div>
    </div>
  );
};

export default ComponentInstallSection;
