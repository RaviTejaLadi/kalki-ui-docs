import { SectionHeader, TableList, Div, Heading, SectionHeaderTitle, SectionHeaderSubTitle, Code } from 'kalki-ui';
import { DocsDivider } from '@/components/shared/DocsDivider';
import { docs, columns, rows, bannerSubTitleRows, bannerTitleRows } from './data/bannerData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
const BannerPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Banner</SectionHeaderTitle>
        <SectionHeaderSubTitle className="tracking-wide">
          The <Code>Banner</Code> component is a versatile UI element designed to display prominent messages with
          optional titles, subtitles, and images. It supports various visual styles through the <Code>variant </Code>{' '}
          and <Code>size </Code> props, allowing it to adapt to different contexts within an application. The component
          is highly customizable, offering properties to adjust its appearance and behavior. This makes it suitable for
          a wide range of use cases, from simple informational banners to more complex promotional displays.
        </SectionHeaderSubTitle>
      </SectionHeader>
      <DocsDivider />
      <DocumentationRenderer className="my-4" data={docs} componentName="Banner" />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeaderTitle className="tracking-wide">Props</SectionHeaderTitle>
      </SectionHeader>
      <Div className="space-y-5">
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            Banner
          </Heading>
          <TableList columns={columns} rows={rows} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            BannerTitle
          </Heading>
          <TableList columns={columns} rows={bannerTitleRows} code CodeColumn={0} />
        </Div>
        <Div>
          <Heading as="h6" className="mb-2 text-muted-foreground">
            BannerSubTitle
          </Heading>
          <TableList columns={columns} rows={bannerSubTitleRows} code CodeColumn={0} />
        </Div>
      </Div>
    </div>
  );
};

export default BannerPage;
