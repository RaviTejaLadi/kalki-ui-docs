import Link from '@/components/common/Link';

export const LinkPreviews = {
  basic: (
    <div className="flex gap-4">
      <Link to="/docs">Default Link</Link>
      <Link to="/docs" variant="subtle" size="sm">Subtle Link</Link>
    </div>
  ),
};
