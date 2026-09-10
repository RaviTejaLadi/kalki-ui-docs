import { SectionHeader, TableList, SectionHeaderTitle } from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
import ErrorPagePlayground from '@/components/playground/ErrorPagePlayground';

const NonIdealPage = () => {
  const columns = ['Name', 'Type', 'Default', 'Description'];
  const rows = [
    ['variant', '"401" | "403" | "404" | "500" | "503"', '"404"', 'Defines the error type and visual styling variant'],
    ['onGoBack', '() => void', 'window.history.back()', 'Callback function triggered when "Go Back" button is clicked'],
    [
      'onBackToHome',
      '() => void',
      '() => window.location.href = "/"',
      'Callback function triggered when "Back to Home" button is clicked',
    ],
    [
      'onLearnMore',
      '() => void',
      '() => console.log("Learn more clicked")',
      'Callback function triggered when "Learn more" button is clicked (503 variant only)',
    ],
  ];

  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Error Pages</SectionHeaderTitle>
      </SectionHeader>
      <DocsDivider />
      <ErrorPagePlayground />
      <DocsDivider />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
      </SectionHeader>
      <TableList columns={columns} rows={rows} code CodeColumn={0} />
    </div>
  );
};

export default NonIdealPage;
