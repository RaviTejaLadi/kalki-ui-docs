import { HelmetProvider } from 'react-helmet-async';
import Router from '@/components/router/Router';
import { ThemeProvider } from './context/ThemeContext';
import { useEffect } from 'react';

/**
 * Root component of the application.
 * Wraps the application with necessary providers for routing and document head management.
 *
 * @component
 * @returns JSX element wrapped with HelmetProvider containing the Router component
 */
export default function App() {
  const title = 'K A L K I   U I';
  const description =
    'Kalki UI is a React component library written in TypeScript, styled with Tailwind CSS, and focused on performance, accessibility, and developer experience.';

  useEffect(() => {
    // Professional design system variables
    const colors = {
      primary: '#7c3aed',
      secondary: '#06b6d4',
      accent: '#f59e0b',
      textLight: '#f8fafc',
      textDark: '#0f172a',
      backdrop: 'rgba(15, 23, 42, 0.95)',
    };

    const spacing = {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
    };

    const typography = {
      title: '900 28px "SF Pro Display", "Inter", sans-serif',
      headline: '700 20px "SF Pro Display", sans-serif',
      body: '500 16px "SF Pro Text", "Inter", sans-serif',
      caption: '600 14px "SF Mono", monospace',
      micro: '500 13px "SF Pro Text", sans-serif',
    };

    const effects = {
      shadow: '0 8px 32px rgba(0,0,0,0.3)',
      innerShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
      glow: '0 0 16px rgba(124, 58, 237, 0.6)',
      backdrop: 'blur(24px)',
    };

    const borders = {
      radius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
      },
      width: '1px',
      style: `solid rgba(255,255,255,0.15)`,
    };

    // Main title with professional gradient and perfect spacing
    const titleStyle = [
      'display: block',
      'text-align: center',
      'width: 100%',
      `margin: ${spacing.xl} auto`,
      `font: ${typography.title}`,
      `padding: ${spacing.md} ${spacing.xl}`,
      `border-radius: ${borders.radius.lg}`,
      `background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.accent} 100%)`,
      `color: ${colors.textLight}`,
      'text-shadow: 0 2px 8px rgba(0,0,0,0.4)',
      'letter-spacing: 1.5px',
      `box-shadow: ${effects.shadow}, ${effects.innerShadow}`,
      'text-transform: uppercase',
      'line-height: 1.3',
    ].join(';');

    // Professional body text with glass morphism effect
    const bodyStyle = [
      'display: block',
      'text-align: center',
      'width: 100%',
      `margin: ${spacing.md} auto`,
      `font: ${typography.body}`,
      `padding: ${spacing.lg} ${spacing.xl}`,
      `border-radius: ${borders.radius.lg}`,
      `background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)`,
      `color: ${colors.textLight}`,
      `border: ${borders.width} ${borders.style}`,
      'line-height: 1.6',
      `backdrop-filter: ${effects.backdrop}`,
      `box-shadow: ${effects.shadow}`,
      `text-shadow: 0 1px 2px rgba(0,0,0,0.2)`,
    ].join(';');

    // Professional tagline with subtle gradient
    const taglineStyle = [
      'display: block',
      'text-align: center',
      'width: 100%',
      `margin: ${spacing.md} auto`,
      `font: ${typography.caption}`,
      `padding: ${spacing.sm} ${spacing.lg}`,
      `border-radius: ${borders.radius.md}`,
      `background: linear-gradient(90deg, rgba(124, 58, 237, 0.2), rgba(6, 182, 212, 0.2))`,
      `color: ${colors.textLight}`,
      `border: ${borders.width} solid rgba(124, 58, 237, 0.3)`,
      'font-style: italic',
      `box-shadow: ${effects.glow}`,
      'letter-spacing: 0.5px',
    ].join(';');

    // Section headers with professional typography
    const headerStyle = [
      'display: block',
      'text-align: center',
      'width: 100%',
      `font: ${typography.headline}`,
      `color: ${colors.secondary}`,
      `margin: ${spacing.xl} auto ${spacing.md}`,
      `padding: ${spacing.xs} 0`,
      `border-bottom: 2px solid rgba(6, 182, 212, 0.3)`,
      'text-transform: uppercase',
      'letter-spacing: 1px',
    ].join(';');

    // Micro text for footers and captions
    const microStyle = [
      'display: block',
      'text-align: center',
      'width: 100%',
      `margin: ${spacing.lg} auto`,
      `font: ${typography.micro}`,
      `padding: ${spacing.sm}`,
      `border-radius: ${borders.radius.sm}`,
      `background: rgba(6, 182, 212, 0.1)`,
      `color: ${colors.secondary}`,
      `border: ${borders.width} solid rgba(6, 182, 212, 0.2)`,
      'font-style: italic',
      'line-height: 1.5',
    ].join(';');

    // Clear console first for clean presentation
    console.clear();

    // Main output
    console.log(`%c${title}`, titleStyle);
    console.log(`%c${description}`, bodyStyle);
    console.log('%c✨ Premium React Components · TypeScript First · Accessibility Focused', taglineStyle);

    // Stats section
    console.log('%c📊 LIBRARY METRICS', headerStyle);

    // Professional table layout
    console.table({
      '🚀 Framework': {
        Value: 'React 18+',
        Note: 'Concurrent Features',
      },
      '🧩 Components': {
        Value: '50+',
        Note: 'Fully Typed',
      },
      '🎨 Styling': {
        Value: 'Tailwind CSS',
        Note: 'Customizable',
      },
      '⚡ Performance': {
        Value: '99/100',
        Note: 'Lighthouse',
      },
      '♿ Accessibility': {
        Value: 'WCAG 2.1 AA',
        Note: 'Verified',
      },
      '📦 Bundle': {
        Value: '< 50KB',
        Note: 'Gzipped',
      },
    });

    // CTA section
    console.log('%c🔗 Explore Documentation: https://kalki-ui.vercel.app/', taglineStyle);

    // Footer note
    console.log(
      '%c💡 Professional Tip: All components include TypeScript docs, ARIA attributes, and dark mode support',
      microStyle
    );
  }, [title, description]);

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
