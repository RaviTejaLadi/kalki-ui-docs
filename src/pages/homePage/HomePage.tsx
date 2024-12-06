import CodeViewer from '@/components/common/CodeViewer/CodeViewer';
import Quiz from '@/components/common/Quiz/Quiz';
import Head from '@/components/SeoMetaData/SeoMetaData';
import { HeroSection } from './HeroSection';
import { FooterSection } from './FooterSection';
import { FeaturesSection } from './FeaturesSection';
import ComponentCategoriesSection from './ComponentCategoriesSection';
import Gallery from '@/components/common/Gallery/Gallery';
import Div from '@/components/common/Div/Div';
import { Loader2 } from 'lucide-react';

export default function Home() {
  const quizData = {
    name: 'Web Development Fundamentals',
    questions: [
      {
        id: 1,
        question: 'What does HTML stand for?',
        options: [
          { id: 1, text: 'Hyper Text Markup Language' },
          { id: 2, text: 'High Tech Modern Language' },
          { id: 3, text: 'Hyper Transfer Markup Language' },
          { id: 4, text: 'Home Tool Markup Language' },
        ],
        correctAnswerId: 1,
        timeLimit: 30,
      },
      {
        id: 2,
        question: 'Which language is used for styling web pages?',
        options: [
          { id: 1, text: 'JavaScript' },
          { id: 2, text: 'Python' },
          { id: 3, text: 'CSS' },
          { id: 4, text: 'Java' },
        ],
        correctAnswerId: 3,
        timeLimit: 30,
      },
    ],
    totalTime: 120,
  };

  const handleQuizComplete = (score: number, totalQuestions: number) => {
    console.log(`Quiz completed! Score: ${score}/${totalQuestions}`);
    // Handle quiz completion (e.g., save results, show certificate, etc.)
  };
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
    </>
  );
}
