import { useState, useEffect, forwardRef } from 'react';
import Button, { ButtonIcon, ButtonText } from '../Button';
import { Expand, Shrink } from 'lucide-react';
import { ButtonProps } from '../Button/types';

/**
 * A React component that toggles fullscreen mode on and off when clicked.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.variant='light'] - The variant of the button.
 * @param {string} [props.size='xs'] - The size of the button.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {React.Ref<HTMLButtonElement>} ref - The ref to be forwarded to the button element.
 * @returns {JSX.Element} The rendered FullScreenToggle component.
 *
 * @example
 * <FullScreenToggle variant="dark" size="md">
 *   Toggle Fullscreen
 * </FullScreenToggle>
 *
 * @remarks
 * This component uses the Fullscreen API to toggle the fullscreen mode of the document.
 * It handles different browser implementations of the Fullscreen API.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
 */
const FullScreenToggle = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'light', size = 'xs', children, ...rest }, ref) => {
    const [isFullScreen, setFullScreen] = useState<boolean>(false);

    const toggleFullScreen = () => {
      const doc = document.documentElement;
      if (!isFullScreen) {
        if (doc.requestFullscreen) {
          doc.requestFullscreen();
        } else if ((doc as any).mozRequestFullScreen) {
          (doc as any).mozRequestFullScreen();
        } else if ((doc as any).webkitRequestFullscreen) {
          (doc as any).webkitRequestFullscreen((Element as any).ALLOW_KEYBOARD_INPUT);
        }
        setFullScreen(true);
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen().catch((err) => {
            console.error('Exit fullscreen error:', err);
          });
        } else if ((document as any).mozCancelFullScreen) {
          (document as any).mozCancelFullScreen();
        } else if ((document as any).webkitCancelFullScreen) {
          (document as any).webkitCancelFullScreen();
        }
        setFullScreen(false);
      }
    };

    useEffect(() => {
      return () => {
        if (document.fullscreenElement) {
          if (document.exitFullscreen) {
            document.exitFullscreen().catch((err) => {
              console.error('Exit fullscreen error during cleanup:', err);
            });
          } else if ((document as any).mozCancelFullScreen) {
            (document as any).mozCancelFullScreen();
          } else if ((document as any).webkitCancelFullScreen) {
            (document as any).webkitCancelFullScreen();
          }
        }
      };
    }, []);

    return (
      <Button ref={ref} variant={variant} size={size} onClick={toggleFullScreen} {...rest}>
        <ButtonIcon>{isFullScreen ? <Expand className="size-3" /> : <Shrink className="size-3" />}</ButtonIcon>
        <ButtonText>{children || null}</ButtonText>
      </Button>
    );
  }
);

FullScreenToggle.displayName = 'FullScreenToggle';

export default FullScreenToggle;
