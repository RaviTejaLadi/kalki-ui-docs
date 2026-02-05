import Spinner from '@/components/common/Spinner';

export const SpinnerPreviews = {
  basic: (
    <div className="flex gap-4 items-center">
      <Spinner variant="primary" size="sm" />
      <Spinner variant="success" size="md" />
      <Spinner variant="danger" size="lg" />
    </div>
  ),
};
