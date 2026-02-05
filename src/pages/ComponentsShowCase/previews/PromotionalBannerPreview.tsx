import PromotionalBanner from '@/components/common/PromotionalBanner';

export const PromotionalBannerPreviews = {
  basic: (
    <div className="max-w-md rounded-lg overflow-hidden">
      <PromotionalBanner
        theme="primary"
        size="sm"
        title="Promo"
        features={[{ text: 'Feature one' }, { text: 'Feature two' }]}
        ctaText="Get started"
      />
    </div>
  ),
};
