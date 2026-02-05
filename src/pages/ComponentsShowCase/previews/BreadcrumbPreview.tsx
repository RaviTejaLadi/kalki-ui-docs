import Breadcrumb from '@/components/common/Breadcrumb';

export const BreadcrumbPreviews = {
  basic: (
    <Breadcrumb separator="chevron" size="sm">
      <Breadcrumb.Item to="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item to="/docs">Docs</Breadcrumb.Item>
      <Breadcrumb.Item active>Components</Breadcrumb.Item>
    </Breadcrumb>
  ),
};
