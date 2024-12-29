import Alert from '@/components/common/Alert';
import { AlertCircle, CheckCircle } from 'lucide-react';

export const AlertPreviews = {
  basic: (
    <Alert className="mb-4" variant="secondary">
      <Alert.Header>
        <AlertCircle className="inline-block mr-2 size-4" />
        Important Notice
      </Alert.Header>
      <Alert.Body>
        Alerts are used to capture the user's attention for various reasons such as informing them of important events,
        errors, warnings, or other significant information.
      </Alert.Body>
      <Alert.Footer>
        <CheckCircle className="inline-block mr-2 text-green-500" size={16} />
        Got it!
      </Alert.Footer>
    </Alert>
  ),
};
