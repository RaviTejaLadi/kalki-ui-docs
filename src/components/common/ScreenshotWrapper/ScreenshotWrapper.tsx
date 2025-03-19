import { useRef, useState, ReactNode, FC } from 'react';
import { Camera } from 'lucide-react';
import html2canvas from 'html2canvas';

interface ScreenshotWrapperProps {
  children: ReactNode;
}

const ScreenshotWrapper: FC<ScreenshotWrapperProps> = ({ children }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const takeScreenshot = async (): Promise<void> => {
    try {
      if (!contentRef.current) return;

      const canvas = await html2canvas(contentRef.current, {
        useCORS: true,
        scale: 2,
        logging: false,
        backgroundColor: null,
      });

      const blob = await new Promise<Blob>((resolve) => {
        canvas.toBlob((blob) => {
          if (blob) resolve(blob);
        }, 'image/png');
      });

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `screenshot-${new Date().getTime()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    } catch (error) {
      console.error('Screenshot error:', error instanceof Error ? error.message : 'Unknown error');
    }
  };

  return (
    <div className="relative w-full">
      <button
        onClick={takeScreenshot}
        className="absolute top-4 right-4 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors flex items-center gap-2 z-10"
        type="button"
      >
        <Camera size={20} />
        <span>Snap</span>
      </button>

      {showMessage && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md z-20">
          Screenshot saved!
        </div>
      )}

      <div ref={contentRef} className="relative bg-white">
        {children}
      </div>
    </div>
  );
};

export default ScreenshotWrapper;
