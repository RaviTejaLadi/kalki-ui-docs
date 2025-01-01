import Card, { CardContent, CardTitle, CardHeader } from '@/components/common/Card';

interface FeaturesProps {
  id: number;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    id: Math.random(),
    title: '📦 Kalki UI Package:',
    description:
      " Enhance your React projects with the comprehensive 'ui-essentials-react' package, meticulously crafted with React, HTML, CSS, and JavaScript. This all-in-one toolkit is designed to streamline your development process by providing a rich set of essential components for building dynamic and visually appealing user interfaces.",
  },
  {
    id: Math.random(),
    title: '⚛️ React-Powered Components:',
    description:
      'Leverage the power of React to seamlessly integrate reusable and efficient UI components into your projects.',
  },
  {
    id: Math.random(),
    title: '🎨 HTML and CSS Integration:',
    description:
      '  The package is built with clean HTML and CSS, ensuring easy customization and compatibility with a wide range of project structures.',
  },
  {
    id: Math.random(),
    title: '⚡ JavaScript Functionality:',
    description:
      ' Take advantage of JavaScript functionalities embedded in the components for interactive and dynamic user experiences.',
  },
  {
    id: Math.random(),
    title: '🧩 Comprehensive Component Set:',
    description:
      "From basic elements to advanced widgets, 'ui-essentials-react' includes a diverse range of components to cover all your UI needs.",
  },
  {
    id: Math.random(),
    title: '🔌 Easy Integration:',
    description:
      'Effortlessly integrate the package into your React projects, reducing development time and boosting overall productivity.',
  },
  {
    id: Math.random(),
    title: '📱 Responsive Design:',
    description:
      '  All components are designed with responsiveness in mind, ensuring a seamless user experience across various devices.',
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-5 px-10 ">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-foreground">Why Choose Kalki UI ?</h2>
        <p className="mt-4 text-lg text-muted-foreground">Everything you need to build modern React applications 🚀</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6 sm:grid-cols-2  md:grid-col-3 gap-4">
        {featureList.map(({ id, title, description }) => (
          <div key={id}>
            <Card className="h-full max-w-md md:break-inside-avoid overflow-hidden  hover:shadow-md border dark:border-gray-200/10 dark:bg-background/10 shadow-none">
              <CardHeader className="flex">
                <CardTitle className="text-purple-500 text-base text-left tracking-wide">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm tracking-wide text-muted-foreground text-left">{description}</CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
