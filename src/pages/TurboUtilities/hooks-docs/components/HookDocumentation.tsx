import React from 'react';
import { Shield, Code, Lightbulb, ScrollText, CheckCircle2, ChevronRight, Eye } from 'lucide-react';
import { HookDocs } from '../types';
import { SyntaxHighlighter } from '@/components/common/SyntaxHighLighter/SyntaxHighLighter';
import  Alert  from '@/components/common/Alert';
import Card, { CardContent } from '@/components/common/Card';

interface HookDocsProps {
  data: HookDocs | undefined;
}

const iconMap: Record<string, { Icon: React.ElementType; color: string; bgColor: string }> = {
  Installation: { Icon: Code, color: 'text-purple-500', bgColor: 'bg-purple-500/10' },
  Features: { Icon: Lightbulb, color: 'text-yellow-500', bgColor: 'bg-yellow-500/10' },
  'Implementation Details': { Icon: ScrollText, color: 'text-blue-500', bgColor: 'bg-blue-500/10' },
  'Example use cases': { Icon: CheckCircle2, color: 'text-green-500', bgColor: 'bg-green-500/10' },
  'Best Practices': { Icon: Shield, color: 'text-red-500', bgColor: 'bg-red-500/10' },
  Preview: { Icon: Eye, color: 'text-blue-500', bgColor: 'bg-blue-500/10' },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const iconDetails = iconMap[title];

  return (
    <div className="mb-12  bg-background dark:bg-inherit ">
      <div className="flex items-center gap-3 mb-6 p-4 border-b border-gray-100 dark:border-gray-800">
        {iconDetails && (
          <div className={`p-2 rounded-lg ${iconDetails.bgColor}`}>
            <iconDetails.Icon className={`w-5 h-5 ${iconDetails.color}`} />
          </div>
        )}
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

const FeatureCard = ({ 
  title, 
  items, 
  accentColor,
  icon: Icon 
}: { 
  title: string; 
  items: string[]; 
  accentColor: string;
  icon: React.ElementType;
}) => (
  <Card className="group w-full md:w-[calc(50%-0.5rem)] dark:bg-inherit  border-0 ">
    <CardContent className="p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 rounded-lg ${accentColor}/10`}>
          <Icon className={`w-5 h-5 text-${accentColor}`} />
        </div>
        <h3 className="text-lg font-semibold text-foreground group-hover:text-blue-500 transition-colors">
          {title}
        </h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="text-muted-foreground text-sm flex items-center gap-3 group-hover:translate-x-1 transition-transform">
            <div className={`w-1.5 h-1.5 rounded-full bg-${accentColor}`} />
            {item}
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export const HookDocumentation: React.FC<HookDocsProps> = ({ data }) => {
  if (!data) return null;

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <Alert variant="info" >
          <Alert.Header className="text-base font-medium">
            {data.description}
          </Alert.Header>
        </Alert>
      </div>

      <Section title="Preview">
        <div className="rounded-lg overflow-hidden bg-background dark:bg-gray-900 p-4">
          {data.example}
        </div>
      </Section>

      <Section title="Installation">
        <div className="rounded-lg overflow-hidden">
          <SyntaxHighlighter code={data.snippet || ''} language="jsx" />
        </div>
      </Section>

      <Section title="Features">
        <div className="grid md:grid-cols-2 gap-4">
          {data.feature?.list?.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.item}
              items={feature.options}
              accentColor="blue-500"
              icon={ChevronRight}
            />
          ))}
        </div>
      </Section>

      <Section title="Implementation Details">
        <div className="grid md:grid-cols-2 gap-4">
          {data.implementationDetails?.list?.map((detail, index) => (
            <FeatureCard
              key={index}
              title={detail.item}
              items={detail.options}
              accentColor="purple-500"
              icon={ChevronRight}
            />
          ))}
        </div>
      </Section>

      <Section title="Example use cases">
        <div className="grid md:grid-cols-2 gap-4">
          {data.useCases?.list?.map((useCase, index) => (
            <FeatureCard
              key={index}
              title={useCase.item}
              items={useCase.options}
              accentColor="green-500"
              icon={ChevronRight}
            />
          ))}
        </div>
      </Section>

      <Section title="Best Practices">
        <div className="grid md:grid-cols-2 gap-4">
          {data.bestPractices?.list?.map((practice, index) => (
            <FeatureCard
              key={index}
              title={practice.item}
              items={practice.options}
              accentColor="red-500"
              icon={ChevronRight}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default HookDocumentation;