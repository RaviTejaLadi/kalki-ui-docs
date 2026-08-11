import { useState, useEffect, forwardRef } from 'react';
import { Expand, Shrink } from 'lucide-react';
import Button, { ButtonIcon, ButtonProps, ButtonText } from '../Button';

interface FullscreenDocument extends Document {
  webkitFullscreenElement?: Element | null;
  mozFullScreenElement?: Element | null;
  webkitExitFullscreen?: () => Promise<void>;
  mozCancelFullScreen?: () => Promise<void>;
}

interface FullscreenElement extends HTMLElement {
  webkitRequestFullscreen?: () => Promise<void>;
  mozRequestFullScreen?: () => Promise<void>;
}

const getFullscreenElement = () => {
  const doc = document as FullscreenDocument;
  return doc.fullscreenElement || doc.webkitFullscreenElement || doc.mozFullScreenElement || null;
};

const requestFullscreen = (element: FullscreenElement) => {
  if (element.requestFullscreen) return element.requestFullscreen();
  if (element.webkitRequestFullscreen) return element.webkitRequestFullscreen();
  if (element.mozRequestFullScreen) return element.mozRequestFullScreen();
  return Promise.resolve();
};

const exitFullscreen = () => {
  const doc = document as FullscreenDocument;
  if (doc.exitFullscreen) return doc.exitFullscreen();
  if (doc.webkitExitFullscreen) return doc.webkitExitFullscreen();
  if (doc.mozCancelFullScreen) return doc.mozCancelFullScreen();
  return Promise.resolve();
};

const FullScreenToggle = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'light', size = 'xs', children, ...rest }, ref) => {
    const [isFullScreen, setFullScreen] = useState<boolean>(false);

    const toggleFullScreen = async () => {
      try {
        if (!getFullscreenElement()) {
          await requestFullscreen(document.documentElement as FullscreenElement);
          setFullScreen(true);
        } else {
          await exitFullscreen();
          setFullScreen(false);
        }
      } catch {
        setFullScreen(!!getFullscreenElement());
      }
    };

    useEffect(() => {
      const onFullScreenChange = () => {
        setFullScreen(!!getFullscreenElement());
      };

      document.addEventListener('fullscreenchange', onFullScreenChange);
      document.addEventListener('webkitfullscreenchange', onFullScreenChange);
      return () => {
        document.removeEventListener('fullscreenchange', onFullScreenChange);
        document.removeEventListener('webkitfullscreenchange', onFullScreenChange);
      };
    }, []);

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        onClick={toggleFullScreen}
        aria-label={isFullScreen ? 'Exit fullscreen' : 'Enter fullscreen'}
        aria-pressed={isFullScreen}
        {...rest}
      >
        <ButtonIcon>
          {isFullScreen ? (
            <Shrink className="size-3" aria-hidden="true" />
          ) : (
            <Expand className="size-3" aria-hidden="true" />
          )}
        </ButtonIcon>
        {children && <ButtonText>{children}</ButtonText>}
      </Button>
    );
  }
);

FullScreenToggle.displayName = 'FullScreenToggle';

export default FullScreenToggle;
