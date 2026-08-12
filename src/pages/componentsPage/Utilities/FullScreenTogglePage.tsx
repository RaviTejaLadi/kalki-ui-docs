import { SectionHeader, Separator, TableList, SectionHeaderTitle, SectionHeaderSubTitle } from 'kalki-ui';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import { docs, columns, rows } from './data/fullscreenToggleData';
// import ComponentMetaCard from '@/components/shared/ComponentMetaCard';
// import { ComponentMeta } from '@/components/types/ComponentMeta';

const FullScreenTogglePage = () => {
  // const meta: ComponentMeta = {
  //   import: `import { FullScreenToggle } from "kalki-ui";`,
  //   source: 'components/space',
  //   createAnIssue: 'https://github.com/your-repo/issues/new',
  //   componentName: 'Space',
  //   status: 'stable',
  //   usageLevel: 'common',
  // };

  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">FullScreen Toggle</SectionHeaderTitle>
        <SectionHeaderSubTitle className="tracking-wide">
          A Fullscreen toggle is a user interface element that, when clicked, expands the current webpage to occupy the
          entire screen, effectively removing any browser borders or toolbars, allowing the content to be viewed
          full-size.
        </SectionHeaderSubTitle>
      </SectionHeader>
      <Separator />
      {/* <ComponentMetaCard meta={meta} />
      <Separator /> */}
      <DocumentationRenderer data={docs} componentName="FullScreenToggle" />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
      </SectionHeader>
      <TableList columns={columns} rows={rows} code CodeColumn={0} />
    </div>
  );
};

export default FullScreenTogglePage;
