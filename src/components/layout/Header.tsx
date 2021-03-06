import { Box, Flex, Heading } from '@chakra-ui/layout';

import AccessibleLink from 'components/AccessibleLink';
import ThemeToggle from './ThemeToggle';

const Header = () => (
  <Flex as="header" width="full" align="center">
    <AccessibleLink href="/">
      <Heading as="h1" size="md">
        Code Sharing Made Easy!
      </Heading>
      <Box fontSize="smaller">And, hopefully, bot free.</Box>
    </AccessibleLink>

    <Box marginLeft="auto">
      <ThemeToggle />
    </Box>

  </Flex>
);

export default Header;
