import { Fragment } from 'react';
import Head from '@/components/Head';

/**
 * Renders a 404 Not Found screen component.
 * Displays a centered error message with a 404 status code and explanatory text.
 *
 * @returns A React component that shows a full-screen 404 error page
 * @example
 * ```tsx
 * <NotFoundScreen />
 * ```
 */
export default function NotFoundScreen() {
  return (
    <Fragment>
      <Head title="Page not found" />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-3xl font-bold text-foreground">404 </div>
          <div className="text-sm text-muted-foreground">This page could not be found.</div>
        </div>
      </div>
    </Fragment>
  );
}
