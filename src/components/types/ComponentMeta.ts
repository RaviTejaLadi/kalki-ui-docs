export type statusProps = 'stable' | 'beta' | 'deprecated' | 'experimental';

export interface ComponentMeta {
  import: string;
  source: string;
  createAnIssue?: string;
  componentName?: string;
  status?: statusProps;
  usageLevel?: 'common' | 'advanced' | 'internal-use';
}