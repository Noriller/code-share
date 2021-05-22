import { Flex, Link, Text } from '@chakra-ui/layout';

const Footer = () => (
  <Flex as="footer" width="full" align="center">
    <Text>
      <Link href="https://github.com/noriller" isExternal>
        {new Date().getFullYear()}
        {' '}
        - Noriller
      </Link>
    </Text>
  </Flex>
);

export default Footer;
