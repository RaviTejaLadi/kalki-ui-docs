import { Breadcrumb, BreadcrumbItem } from 'kalki-ui';
export const BreadcrumbPreviews = {
  basic: (
    <Breadcrumb separator="chevron" size="sm">
      <BreadcrumbItem to="/">Home</BreadcrumbItem>
      <BreadcrumbItem to="/docs">Docs</BreadcrumbItem>
      <BreadcrumbItem active>Components</BreadcrumbItem>
    </Breadcrumb>
  ),
};
