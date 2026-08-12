import { Box, Stack, StackItem } from 'kalki-ui';
export const VerticalStackExample = () => (
  <Stack direction="column" spacing={20}>
    <StackItem>
      <Box padding="10px" shadow="sm" className="text-muted-foreground bg-gray-100" rounded>
        Item 1
      </Box>
    </StackItem>
    <StackItem>
      <Box padding="10px" shadow="sm" className="text-muted-foreground bg-gray-100" rounded>
        Item 2
      </Box>
    </StackItem>
    <StackItem>
      <Box padding="10px" shadow="sm" className="text-muted-foreground bg-gray-100" rounded>
        Item 3
      </Box>
    </StackItem>
  </Stack>
);
