import Box from '@/components/common/Box';
import Stack from '@/components/common/Stack';

export const BasicHorizontalStackExample = () => (
  <Stack spacing={10}>
    <Stack.Item>
      <Box padding="10px" shadow="sm" className="text-muted-foreground bg-gray-100" rounded>
        Item 1
      </Box>
    </Stack.Item>
    <Stack.Item>
      <Box padding="10px" shadow="sm" className="text-muted-foreground bg-gray-100" rounded>
        Item 2
      </Box>
    </Stack.Item>
    <Stack.Item>
      <Box padding="10px" shadow="sm" className="text-muted-foreground bg-gray-100" rounded>
        Item 3
      </Box>
    </Stack.Item>
  </Stack>
);
