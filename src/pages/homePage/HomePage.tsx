import CodeViewer from '@/components/common/CodeViewer/CodeViewer';
import Head from '@/components/SeoMetaData/SeoMetaData';
import { HeroSection } from './HeroSection';
import { FooterSection } from './FooterSection';
import { FeaturesSection } from './FeaturesSection';
import ComponentCategoriesSection from './ComponentCategoriesSection';
import { TextReader } from '@/components/common/TextToSpeech/TextReader';
import { ContentViewer } from '@/components/shared/ContentViewer';
import { contentSections } from '@/components/shared/ContentViewer/data';

export default function Home() {
  const images = [
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
  ];

  return (
    <>
      <TextReader>
        <h2 className="text-xl font-semibold mb-4">Sample Article</h2>
        <p className="mb-4">
          Okaappudu Vijayapura raajyamu lo Tenali Raman ane oka nipuNudu undevaadu. AthaNi jnaanam mariyu chithkaalu
          kosam chaala prasidhdi chendhaadu. Oka rooju Raaju tana jnaanaanni parikshinchalaanukuntaa tanaaku oka pani
          ichchaadu.
        </p>
        <p className="mb-4">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>First important point</li>
          <li>Second crucial concept</li>
          <li>Third key takeaway</li>
        </ul>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </TextReader>
      {/* <Div className="p-4">
        <Gallery pattern={'grid'}>
          {images.map((src, index) => (
            <Gallery.Image key={index} src={src} alt={`Image ${index + 1}`} />
          ))}
        </Gallery>
      </Div> */}
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
        {contentSections.map(section => (
          <ContentViewer.ContentSection
            key={section.id}
            id={section.id}
            // title={section.title}
          >
            {section.content}
          </ContentViewer.ContentSection>
        ))}
      </ContentViewer.Content>
      
      <ContentViewer.SideMenu>
        {contentSections.map(section => (
          <ContentViewer.SideMenuItem
            key={section.id}
            id={section.id}
          >
            {section.title}
          </ContentViewer.SideMenuItem>
        ))}
      </ContentViewer.SideMenu>
    </ContentViewer>
    </>
  );
}
