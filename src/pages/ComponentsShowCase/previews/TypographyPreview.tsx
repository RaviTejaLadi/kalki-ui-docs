import { Heading, Paragraph, Text } from '@/components/common/Typography';

export const TypographyPreviews = {
  basic: (
    <div className="space-y-2">
      <Heading as="h3">Heading</Heading>
      <Text variant="primary" size="sm">Primary text</Text>
      <Paragraph size="sm" className="text-muted-foreground">A short paragraph for the preview.</Paragraph>
    </div>
  ),
};
