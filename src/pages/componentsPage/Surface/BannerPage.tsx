import { SectionHeader } from '@/components/common/SectionHeader';
import Separator from '@/components/common/Separator';
import TableList from '@/components/common/Table/TableList';
import { docs, columns, rows, bannerSubTitleRows, bannerTitleRows } from './data/bannerData';
import DocumentationRenderer from '@/components/shared/DocumentationRenderer/DocumentationRenderer';
import Code from '@/components/common/Code';
import Div from '@/components/common/Div';
import { Heading } from '@/components/common/Typography';

const BannerPage = () => {
  return (
    <div className="container">
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Banner</SectionHeader.Title>
        <SectionHeader.SubTitle className="tracking-wide">
          The <Code>Banner</Code> component is a versatile UI element designed to display prominent messages with
          optional titles, subtitles, and images. It supports various visual styles through the <Code>variant </Code>{' '}
          and <Code>size </Code> props, allowing it to adapt to different contexts within an application. The component
          is highly customizable, offering properties to adjust its appearance and behavior. This makes it suitable for
          a wide range of use cases, from simple informational banners to more complex promotional displays.
        </SectionHeader.SubTitle>
      </SectionHeader>
      <Separator />
      <DocumentationRenderer className="my-4" data={docs} />
      <SectionHeader variant="transparent" size="sm">
        <SectionHeader.Title className="tracking-wide">Props</SectionHeader.Title>
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
