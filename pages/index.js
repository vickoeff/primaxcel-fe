import { useEffect, useState } from "react";
import { Box, Button, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { ContainerSection } from "../components/Container";
import { callApi } from "../api/useApiHook";

export default function Home() {
  const [random, setRandom] = useState(null);

  useEffect(() => {
    getRandomData();
  }, []);

  const getRandomData = () => {
    callApi("get", "/random")
      .then((res) => setRandom(res))
      .catch((err) => alert(err.message));
  };

  return (
    <ContainerSection>
      <Box>
        <Button colorScheme="blue" onClick={() => getRandomData()}>
          Refetch
        </Button>
        <Table mt={6}>
          <Thead>
            <Tr>
              <Th>API</Th>
              <Th>Category</Th>
              <Th>Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            {random?.entries?.map((entry, key) => (
              <Tr key={key}>
                <Td>{entry.API}</Td>
                <Td>{entry.Category}</Td>
                <Td>{entry.Description}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </ContainerSection>
  );
}
