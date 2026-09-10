import { useState } from 'react';
import { ErrorPage } from 'kalki-ui';
import { useToast } from 'kalki-ui-toast';
import PlaygroundShell, { OptionGroup } from './PlaygroundShell';

type ErrorVariant = '401' | '403' | '404' | '500' | '503';

const ERROR_VARIANTS: ErrorVariant[] = ['401', '403', '404', '500', '503'];

const ErrorPagePlayground = () => {
  const [variant, setVariant] = useState<ErrorVariant>('404');
  const { addToast } = useToast();

  const notify = (message: string) => {
    addToast({ message, variant: 'default' });
  };

  const generateCode = () => `<ErrorPage
  variant="${variant}"
  onGoBack={() => window.history.back()}
  onBackToHome={() => (window.location.href = "/")}
  onLearnMore={() => console.log("Learn more clicked")}
/>`;

  return (
    <PlaygroundShell
      preview={
        <div className="w-full scale-[0.85] origin-top">
          <ErrorPage
            variant={variant}
            onGoBack={() => notify('Go Back clicked')}
            onBackToHome={() => notify('Back to Home clicked')}
            onLearnMore={() => notify('Learn more clicked')}
          />
        </div>
      }
      controls={<OptionGroup label="Error variant" options={ERROR_VARIANTS} value={variant} onChange={setVariant} />}
      code={generateCode()}
      previewClassName="min-h-[320px] max-h-[560px] overflow-auto w-full items-start"
    />
  );
};

export default ErrorPagePlayground;
