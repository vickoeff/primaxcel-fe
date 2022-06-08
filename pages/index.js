import { Box, Button, Table, Tr, Th, Td } from "@chakra-ui/react";
import { ContainerSection } from "../components/Container";

export default function Home() {
  return (
    <ContainerSection>
      <Box>
        <Button colorScheme="blue">Test fetch</Button>
        <Table mt={6}>
          <Tr>
            <Th>No.</Th>
            <Th>Tittle</Th>
            <Th>Content</Th>
          </Tr>
          <Tr>
            <Td>1</Td>
            <Td>Get Content API</Td>
            <Td>
              1. Product A<br />
              2. Product B
            </Td>
          </Tr>
        </Table>
      </Box>
    </ContainerSection>
  );
}
