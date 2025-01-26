import { ToastContainer } from '@/components/common/Toast/ToastContainer';
import { ToastProvider } from '@/components/common/Toast/ToastContext';
import DemoButtons from './DemoButtons';

const ToastPage = () => {
  return (
    <div>
      <ToastProvider>
        <DemoButtons />

        <ToastContainer position="top-center" rounded />
      </ToastProvider>
    </div>
  );
};

export default ToastPage;
