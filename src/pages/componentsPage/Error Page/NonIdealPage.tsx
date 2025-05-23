import { ErrorPage } from '@/components/common/ErrorPage/ErrorPage';
import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
import { SyntaxHighlighter } from '@/components/common/SyntaxHighLighter/SyntaxHighLighter';
import TableList from '@/components/common/Table/TableList';
import { useToast } from 'kalki-ui-toast';
import { useCallback, useState } from 'react';

const NonIdealPage = () => {
  const [currentVariant, setCurrentVariant] = useState<'401' | '403' | '404' | '500' | '503'>('401');

  const variants: ('401' | '403' | '404' | '500' | '503')[] = ['401', '403', '404', '500', '503'];

  const { addToast } = useToast();

  const showToast = useCallback(
    (message: string) => {
      addToast({
        message: message,
        variant: 'default',
      });
    },
    [addToast]
  );

  // Map error codes to their descriptions
  const errorDescriptions = {
    '401': `<ErrorPage
        variant="401"
        onGoBack={() => showToast('Navigating to the previous page...')}
        onBackToHome={() => showToast('Returning to the home page...')}
        onLearnMore={() => showToast('Opening the Learn More section...')}
      />`,
    '403': `<ErrorPage
        variant="403"
        onGoBack={() => showToast('Navigating to the previous page...')}
        onBackToHome={() => showToast('Returning to the home page...')}
        onLearnMore={() => showToast('Opening the Learn More section...')}
      />`,
    '404': `<ErrorPage
        variant="404"
        onGoBack={() => showToast('Navigating to the previous page...')}
        onBackToHome={() => showToast('Returning to the home page...')}
        onLearnMore={() => showToast('Opening the Learn More section...')}
      />`,
    '500': `<ErrorPage
        variant="500"
        onGoBack={() => showToast('Navigating to the previous page...')}
        onBackToHome={() => showToast('Returning to the home page...')}
        onLearnMore={() => showToast('Opening the Learn More section...')}
      />`,
    '503': `<ErrorPage
        variant="503"
        onGoBack={() => showToast('Navigating to the previous page...')}
        onBackToHome={() => showToast('Returning to the home page...')}
        onLearnMore={() => showToast('Opening the Learn More section...')}
      />`,
  };

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
        <SectionHeader.Title className="tracking-wide">Error Pages</SectionHeader.Title>
      </SectionHeader>
      <Separator />
      {/* Variant Selector */}
      <div className=" bg-background rounded-lg mb-2 shadow-lg p-3">
        <div className="flex flex-wrap gap-2">
          {variants.map((variant) => (
            <button
              key={variant}
              onClick={() => setCurrentVariant(variant)}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                currentVariant === variant
                  ? 'bg-blue-500 text-foreground'
                  : ' text-foreground hover:bg-gray-300 hover:text-black'
              }`}
            >
              {variant}
            </button>
          ))}
        </div>
      </div>
      <div className="h-auto overflow-auto mb-5  p-4 border rounded dark:border-gray-200/10">
        <SyntaxHighlighter code={errorDescriptions[currentVariant]} language="jsx" />
      </div>

      <ErrorPage
        variant={currentVariant}
        onGoBack={() => showToast('Navigating to the previous page...')}
        onBackToHome={() => showToast('Returning to the home page...')}
        onLearnMore={() => showToast('Opening the Learn More section...')}
      />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Props</SectionHeader.Title>
      </SectionHeader>
      <TableList columns={columns} rows={rows} code CodeColumn={0} />
    </div>
  );
};

export default NonIdealPage;
