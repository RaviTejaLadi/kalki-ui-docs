import { useToast } from '@/components/common/Toast/ToastContext';
import { AlertCircle, AlertTriangle, Bell, CheckCircle, Info, Rocket, Star, Zap } from 'lucide-react';

const DemoButtons = () => {
  const { addToast } = useToast();

  // Default Toast
  const showDefaultToast = () => {
    addToast({
      message: 'This is a default toast message',
      icon: <Bell className="w-5 h-5" />,
    });
  };

  // Description Toast
  const showDescriptionToast = () => {
    addToast({
      variant: 'secondary',
      message: (
        <div className="flex flex-col gap-1">
          <span className="font-semibold">Toast with Description</span>
          <span className="text-xs opacity-90">This toast includes a detailed description below the title</span>
        </div>
      ),
      icon: <Star className="w-5 h-5" />,
      autoClose: 4000,
    });
  };

  // Success Toast
  const showSuccessToast = () => {
    addToast({
      variant: 'success',
      message: (
        <div className="flex items-center gap-2">
          <span className="font-semibold">Success!</span>
          <span>Operation completed successfully</span>
        </div>
      ),
      icon: <CheckCircle className="w-5 h-5" />,
      autoClose: 3000,
    });
  };

  // Info Toast
  const showInfoToast = () => {
    addToast({
      variant: 'info',
      message: 'New updates are available',
      icon: <Info className="w-5 h-5" />,
      autoClose: 4000,
    });
  };

  // Warning Toast
  const showWarningToast = () => {
    addToast({
      variant: 'warning',
      message: 'Please backup before proceeding',
      icon: <AlertTriangle className="w-5 h-5" />,
      autoClose: 5000,
    });
  };

  // Error Toast
  const showErrorToast = () => {
    addToast({
      variant: 'danger',
      message: (
        <div className="flex flex-col gap-1">
          <span className="font-semibold">Error</span>
          <span className="text-xs opacity-90">Something went wrong. Please try again.</span>
        </div>
      ),
      icon: <AlertCircle className="w-5 h-5" />,
      autoClose: false,
    });
  };

  // Action Toast
  const showActionToast = () => {
    addToast({
      variant: 'primary',
      message: (
        <div className="flex items-center justify-between gap-4 w-full">
          <span>New version available!</span>
          <button
            onClick={() => alert('Update clicked')}
            className="px-3 py-1 bg-white/20 rounded-md hover:bg-white/30 transition-colors text-sm"
          >
            Update
          </button>
        </div>
      ),
      icon: <Rocket className="w-5 h-5" />,
      autoClose: false,
    });
  };

  // Promise Toast
  const showPromiseToast = async () => {
    addToast({
      variant: 'help',
      message: (
        <div className="flex items-center gap-2">
          <span className="font-semibold">Loading...</span>
          <span>Please wait while we process your request</span>
        </div>
      ),
      icon: <Zap className="w-5 h-5" />,
      autoClose: false,
    });

    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 2000));

    addToast({
      variant: 'success',
      message: 'Operation completed successfully!',
      icon: <CheckCircle className="w-5 h-5" />,
      autoClose: 3000,
    });
  };

  // Custom Toast
  const showCustomToast = () => {
    addToast({
      variant: 'dark',
      message: (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces"
              alt="User avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-semibold">John Doe</span>
              <span className="text-xs opacity-90">Sent you a message</span>
            </div>
          </div>
        </div>
      ),
      autoClose: 5000,
      rounded: true,
    });
  };

  const buttons = [
    { label: 'Default', onClick: showDefaultToast, class: 'bg-gray-600' },
    { label: 'Description', onClick: showDescriptionToast, class: 'bg-gray-700' },
    { label: 'Success', onClick: showSuccessToast, class: 'bg-green-600' },
    { label: 'Info', onClick: showInfoToast, class: 'bg-cyan-600' },
    { label: 'Warning', onClick: showWarningToast, class: 'bg-yellow-500' },
    { label: 'Error', onClick: showErrorToast, class: 'bg-red-600' },
    { label: 'Action', onClick: showActionToast, class: 'bg-blue-600' },
    { label: 'Promise', onClick: showPromiseToast, class: 'bg-purple-600' },
    { label: 'Custom', onClick: showCustomToast, class: 'bg-gray-800' },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {buttons.map((button) => (
        <button
          key={button.label}
          onClick={button.onClick}
          className={`${button.class} text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity`}
        >
          {button.label} Toast
        </button>
      ))}
    </div>
  );
};

export default DemoButtons;
