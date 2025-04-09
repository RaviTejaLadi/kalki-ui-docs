import Box from "@/components/common/Box";
import Stack from "@/components/common/Stack";


export const AlignedStackExample = () => (
  <Stack justifyContent="center" alignItems="center" style={{ height: "200px", border: "1px solid #ccc" }}>
    <Stack.Item>
      <Box padding="10px" shadow="sm" className="text-muted-foreground bg-gray-100" rounded>
        Centered Item
      </Box>
    </Stack.Item>
  </Stack>
);
