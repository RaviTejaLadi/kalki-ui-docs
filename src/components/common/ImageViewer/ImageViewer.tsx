import React, { useState, forwardRef, createContext, useContext, ReactNode } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, RefreshCw, X } from 'lucide-react';

const defaultContextValue = {
  fullScreen: false,
  zoom: 1,
  rotation: 0,
  currentImageSrc: null as string | null,
  currentImageAlt: null as string | null,
  toggleFullScreen: (_src?: string, _alt?: string) => {},
  handleZoom: (_delta: number) => {},
  handleRotate: (_delta: number) => {},
  resetImage: () => {},
};

const ImageViewerContext = createContext(defaultContextValue);

interface ImageViewerProps {
  children: ReactNode;
}

const ImageViewer = forwardRef<HTMLDivElement, ImageViewerProps>(({ children }, ref) => {
  const [fullScreen, setFullScreen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [currentImageSrc, setCurrentImageSrc] = useState<string | null>(null);
  const [currentImageAlt, setCurrentImageAlt] = useState<string | null>(null);

  const toggleFullScreen = (src?: string, alt?: string) => {
    setFullScreen(!fullScreen);
    if (src) setCurrentImageSrc(src);
    if (alt) setCurrentImageAlt(alt);
    if (fullScreen) {
      setZoom(1);
      setRotation(0);
    }
  };

  const handleZoom = (delta: number) => {
    setZoom((prevZoom: number): number => Math.max(0.1, prevZoom + delta));
  };

  const handleRotate = (delta: number) => {
    setRotation((prevRotation: number): number => (prevRotation + delta) % 360);
  };

  const resetImage = () => {
    setZoom(1);
    setRotation(0);
  };

  const contextValue = {
    fullScreen,
    zoom,
    rotation,
    currentImageSrc,
    currentImageAlt,
    toggleFullScreen,
    handleZoom,
    handleRotate,
    resetImage,
  };

  return (
    <ImageViewerContext.Provider value={contextValue}>
      <div ref={ref}>{children}</div>
    </ImageViewerContext.Provider>
  );
});

ImageViewer.displayName = 'ImageViewer';

const useImageViewer = () => {
  const context = useContext(ImageViewerContext);
  return context;
};

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  caption?: string;
}

const ImageViewerImage = forwardRef<HTMLImageElement, ImageProps>(({ src, alt, caption, ...props }, ref) => {
  const { toggleFullScreen } = useImageViewer();

  return (
    <div className="cursor-zoom-in max-w-fit max-h-fit" onClick={() => toggleFullScreen(src, alt)}>
      <div className="m-1 p-1 rounded border border-gray-300 inline-block">
        <img
          ref={ref}
          title="Click to View"
          src={src}
          alt={alt}
          className="max-w-full max-h-full object-contain transition-transform duration-200 ease-in-out rounded cursor-zoom-in"
          {...props}
        />
        {caption && <p className="text-sm text-gray-500 italic mt-2">{caption}</p>}
      </div>
    </div>
  );
});
ImageViewerImage.displayName = 'ImageViewer.Image';

const ImageViewerFullScreen = () => {
  const { fullScreen, zoom, rotation, currentImageSrc, currentImageAlt } = useImageViewer();

  if (!fullScreen || !currentImageSrc) return null;

  const fullScreenImageStyle = {
    transform: `scale(${zoom}) rotate(${rotation}deg)`,
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-50"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative flex justify-center items-center overflow-auto w-full h-full">
        <img
          src={currentImageSrc}
          alt={currentImageAlt || 'Full Screen Image'}
          className="max-w-[90%] max-h-[80%] object-contain transition-transform duration-200 ease-in-out"
          style={fullScreenImageStyle}
        />
      </div>
      <div className="fixed top-4 left-4 right-4 flex justify-between items-center bg-gray-800 bg-opacity-70 p-4 rounded-md">
        <h2 className="text-lg font-semibold text-white">Preview</h2>
        <ImageViewerControls />
      </div>
    </div>
  );
};

ImageViewerFullScreen.displayName = 'ImageViewer.FullScreen';

const ImageViewerControls = () => {
  const { toggleFullScreen, handleZoom, handleRotate, resetImage } = useImageViewer();

  const controlsButtonData = [
    {
      text: 'Zoom In',
      action: () => handleZoom(0.1),
      icon: <ZoomIn className="w-5 h-5" />,
    },
    {
      text: 'Zoom Out',
      action: () => handleZoom(-0.1),
      icon: <ZoomOut className="w-5 h-5" />,
    },
    {
      text: 'Rotate',
      action: () => handleRotate(90),
      icon: <RotateCcw className="w-5 h-5" />,
    },
    {
      text: 'Reset',
      action: resetImage,
      icon: <RefreshCw className="w-5 h-5" />,
    },
  ];

  return (
    <div className="flex gap-4">
      {controlsButtonData.map((button, index) => (
        <button
          key={index}
          title={button.text}
          onClick={button.action}
          className="p-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none"
        >
          {button.icon}
        </button>
      ))}
      <button
        onClick={() => toggleFullScreen()}
        className="p-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 focus:outline-none"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

ImageViewerControls.displayName = 'ImageViewer.Controls';

export default Object.assign(
  ImageViewer as React.ForwardRefExoticComponent<ImageViewerProps & React.RefAttributes<HTMLDivElement>>,
  {
    Image: ImageViewerImage,
    Controls: ImageViewerControls,
    FullScreen: ImageViewerFullScreen,
  }
);

export { ImageViewer, ImageViewerControls, ImageViewerFullScreen };
