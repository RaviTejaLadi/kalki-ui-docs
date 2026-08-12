import { Box, Stack, StackItem } from 'kalki-ui';
export const NestedStacksExample = () => (
  <Stack direction="column" spacing={20}>
    <StackItem>
      <Stack spacing={10}>
        <Box padding="10px" shadow="sm" rounded>
          <StackItem>
            <Box padding="10px" shadow="sm" className="text-muted-foreground bg-gray-100" rounded>
              Nested Item 1
            </Box>
          </StackItem>
          <StackItem>
            <Box padding="10px" shadow="sm" className="text-muted-foreground bg-gray-100" rounded>
              Nested Item 2
            </Box>
          </StackItem>
        </Box>
      </Stack>
    </StackItem>
    <StackItem>
      <Box padding="10px" shadow="sm" rounded>
        <Stack direction="column" spacing={5}>
          <StackItem>
            <Box padding="10px" shadow="sm" className="text-muted-foreground bg-gray-100" rounded>
              Nested Item 3
            </Box>
          </StackItem>
          <StackItem>
            <Box padding="10px" shadow="sm" className="text-muted-foreground bg-gray-100" rounded>
              Nested Item 4
            </Box>
          </StackItem>
        </Stack>
      </Box>
    </StackItem>
  </Stack>
);
