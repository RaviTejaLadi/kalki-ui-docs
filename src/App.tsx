import { HelmetProvider } from 'react-helmet-async';
import Router from '@/components/router/Router';
import { ThemeProvider } from './context/ThemeContext';

/**
 * Root component of the application.
 * Wraps the application with necessary providers for routing and document head management.
 *
 * @component
 * @returns JSX element wrapped with HelmetProvider containing the Router component
 */
export default function App() {
  return (
    <div className="bg-background">
      <HelmetProvider>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </HelmetProvider>
    </div>
  );
}
