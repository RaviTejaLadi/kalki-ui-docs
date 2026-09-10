import { useState } from 'react';
import { Alert, AlertBody, AlertFooter, AlertHeader, Button } from 'kalki-ui';
import PlaygroundShell, { CheckboxGrid, COLOR_VARIANTS, OptionGroup } from './PlaygroundShell';

const ALERT_VARIANTS = COLOR_VARIANTS.filter((variant) => variant !== 'dark');

const AlertPlayground = () => {
  const [variant, setVariant] = useState<(typeof ALERT_VARIANTS)[number]>('success');
  const [withFooter, setWithFooter] = useState(true);

  const code = `<Alert variant="${variant}">
  <AlertHeader>Important update</AlertHeader>
  <AlertBody>Your changes have been saved successfully.</AlertBody>${
    withFooter
      ? `
  <AlertFooter>
    <Button size="sm" variant="outline">Dismiss</Button>
  </AlertFooter>`
      : ''
  }
</Alert>`;

  return (
    <PlaygroundShell
      preview={
        <Alert variant={variant} className="w-full max-w-xl">
          <AlertHeader>Important update</AlertHeader>
          <AlertBody>Your changes have been saved successfully.</AlertBody>
          {withFooter && (
            <AlertFooter>
              <Button size="sm" variant="outline">
                Dismiss
              </Button>
            </AlertFooter>
          )}
        </Alert>
      }
      controls={
        <>
          <OptionGroup label="Variant" options={ALERT_VARIANTS} value={variant} onChange={setVariant} />
          <CheckboxGrid options={[{ label: 'With footer action', checked: withFooter, onChange: setWithFooter }]} />
        </>
      }
      code={code}
      previewClassName="w-full"
    />
  );
};

export default AlertPlayground;
