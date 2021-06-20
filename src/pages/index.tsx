import { Box } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/react';

const Home = ({ codes }: { codes: any[] }) => {
  function handleChange() {}

  return (
    <Box mb={8} w="full">
      <Input
        variant="outline"
        placeholder="Search codes..."
        onChange={handleChange}
      />
      {codes?.map((code, index) => (
        <Box key={`code___${index}`}>{JSON.stringify(code)}</Box>
      ))}
    </Box>
  );
};

export default Home;
