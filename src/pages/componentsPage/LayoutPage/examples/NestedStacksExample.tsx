import Box from '@/components/common/Box';
import Stack from '@/components/common/Stack';

export const NestedStacksExample = () => (
  <Stack direction="column" spacing={20}>
    <Stack.Item>
      <Stack spacing={10}>
        <Box padding="10px" shadow="sm" rounded>
          <Stack.Item>
            <Box padding="10px" shadow="sm" className="text-muted-foreground bg-gray-100" rounded>
              Nested Item 1
            </Box>
          </Stack.Item>
          <Stack.Item>
            <Box padding="10px" shadow="sm" className="text-muted-foreground bg-gray-100" rounded>
              Nested Item 2
            </Box>
          </Stack.Item>
        </Box>
      </Stack>
    </Stack.Item>
    <Stack.Item>
      <Box padding="10px" shadow="sm" rounded>
        <Stack direction="column" spacing={5}>
          <Stack.Item>
            <Box padding="10px" shadow="sm" className="text-muted-foreground bg-gray-100" rounded>
              Nested Item 3
            </Box>
          </Stack.Item>
          <Stack.Item>
            <Box padding="10px" shadow="sm" className="text-muted-foreground bg-gray-100" rounded>
              Nested Item 4
            </Box>
          </Stack.Item>
        </Stack>
      </Box>
    </Stack.Item>
  </Stack>
);
