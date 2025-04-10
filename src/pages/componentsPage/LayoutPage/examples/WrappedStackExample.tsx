import Box from '@/components/common/Box';
import Stack from '@/components/common/Stack';

export const WrappedStackExample = () => (
  <Stack flexWrap="wrap" spacing={10} style={{ maxWidth: '300px' }}>
    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
      <Stack.Item key={item} style={{ padding: '10px' }}>
        <Box padding="10px" shadow="sm" className="text-muted-foreground bg-gray-100" rounded>
          Item {item}
        </Box>
      </Stack.Item>
    ))}
  </Stack>
);
