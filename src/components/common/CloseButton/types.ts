/**
 * Props for the CloseButton component.
 * 
 * @interface CloseButtonProps
 * @extends {React.ButtonHTMLAttributes<HTMLButtonElement>}
 * 
 * @property {('light' | 'dark')} [variant] - The variant of the button, can be 'light' or 'dark'.
 * @property {('sm' | 'md' | 'lg')} [size] - The size of the button, can be 'sm', 'md', or 'lg'.
 * @property {() => void} [onClick] - Optional click handler for the button.
 * @property {boolean} [disabled] - Whether the button is disabled.
 * @property {string} [className] - Additional CSS class names to apply to the button.
 * @property {React.CSSProperties} [style] - Inline styles to apply to the button.
 */
interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export { type CloseButtonProps };
