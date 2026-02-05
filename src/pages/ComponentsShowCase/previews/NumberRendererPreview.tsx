import NumberRenderer from '@/components/common/NumberRenderer/NumberRenderer';

export const NumberRendererPreviews = {
  basic: (
    <div className="flex gap-2 flex-wrap">
      <NumberRenderer number={42} variant="default" size="sm" />
      <NumberRenderer number={100} variant="neon" size="xs" />
    </div>
  ),
};
