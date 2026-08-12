import { Alert, AlertHeader, AlertFooter, AlertBody } from 'kalki-ui';
import { AlertCircle, CheckCircle } from 'lucide-react';

export const AlertPreviews = {
  basic: (
    <Alert className="mb-4" variant="secondary">
      <AlertHeader>
        <AlertCircle className="inline-block mr-2 size-4" />
        Important Notice
      </AlertHeader>
      <AlertBody>
        Alerts are used to capture the user's attention for various reasons such as informing them of important events,
        errors, warnings, or other significant information.
      </AlertBody>
      <AlertFooter>
        <CheckCircle className="inline-block mr-2 text-green-500" size={16} />
        Got it!
      </AlertFooter>
    </Alert>
  ),
};
