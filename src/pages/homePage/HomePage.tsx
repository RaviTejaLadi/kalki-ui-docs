import CodeViewer from '@/components/common/CodeViewer/CodeViewer';
import Head from '@/components/SeoMetaData/SeoMetaData';
import { HeroSection } from './HeroSection';
import { FooterSection } from './FooterSection';
import { FeaturesSection } from './FeaturesSection';
import ComponentCategoriesSection from './ComponentCategoriesSection';
import { ContentViewer } from '@/components/shared/ContentViewer';
import { contentSections } from '@/components/shared/ContentViewer/data';

export default function Home() {
  return (
    <>
      <Head title="Home" />
      <HeroSection />
      <FeaturesSection />
      <ComponentCategoriesSection />
      <FooterSection />
      <CodeViewer>
        <CodeViewer.Explorer>
          <CodeViewer.Folder name="app">
            <CodeViewer.Folder name="dashboard">
              <CodeViewer.File id="1" name="page.tsx">
                {`import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"`}
              </CodeViewer.File>
            </CodeViewer.Folder>
          </CodeViewer.Folder>
          <CodeViewer.Folder name="components">
            <CodeViewer.File id="2" name="app-sidebar.tsx">
              {/* Content */}
            </CodeViewer.File>
            <CodeViewer.File id="3" name="search-form.tsx">
              {/* Content */}
            </CodeViewer.File>
            <CodeViewer.File id="4" name="version-switcher.tsx">
              {/* Content */}
            </CodeViewer.File>
          </CodeViewer.Folder>
        </CodeViewer.Explorer>
        <CodeViewer.Preview language="jsx" />
      </CodeViewer>
      <ContentViewer>
        <ContentViewer.Content>
          {contentSections.map((section) => (
            <ContentViewer.ContentSection key={section.id} id={section.id} title={section.title}>
              {section.content}
            </ContentViewer.ContentSection>
          ))}
        </ContentViewer.Content>
        <ContentViewer.SideMenu>
          {contentSections.map((section) => (
            <ContentViewer.SideMenuItem key={section.id} id={section.id}>
              {section.title}
            </ContentViewer.SideMenuItem>
          ))}
        </ContentViewer.SideMenu>
      </ContentViewer>
    </>
  );
}
