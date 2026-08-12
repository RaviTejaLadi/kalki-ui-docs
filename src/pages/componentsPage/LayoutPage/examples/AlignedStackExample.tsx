import { Box, Stack, StackItem } from 'kalki-ui';
export const AlignedStackExample = () => (
  <Stack justifyContent="center" alignItems="center" style={{ height: '200px', border: '1px solid #ccc' }}>
    <StackItem>
      <Box padding="10px" shadow="sm" className="text-muted-foreground bg-gray-100" rounded>
        Centered Item
      </Box>
    </StackItem>
  </Stack>
);
