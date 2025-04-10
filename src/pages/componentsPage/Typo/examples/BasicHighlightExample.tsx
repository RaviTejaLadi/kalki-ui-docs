import Box from '@/components/common/Box';
import TextHighlighter from '@/components/common/TextHighlighter';

export const BasicHighlightExample = () => {
  return (
    <Box style={{ lineHeight: '30px' }}>
      <TextHighlighter>
        <TextHighlighter.Text variant="glass" sizing="comfortable">
          React
        </TextHighlighter.Text>
        is a
        <TextHighlighter.Text variant="glass" sizing="comfortable">
          JavaScript
        </TextHighlighter.Text>
        library for building user interfaces. It allows developers to create reusable
        <TextHighlighter.Text variant="glass" sizing="comfortable">
          UI components
        </TextHighlighter.Text>
        and manage the state of applications
        <TextHighlighter.Text variant="glass" sizing="comfortable">
          efficiently.
        </TextHighlighter.Text>
      </TextHighlighter>
    </Box>
  );
};
