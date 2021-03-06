import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/layout';
import Link, { LinkProps } from 'next/link';

type AccessibleLinkProps = LinkProps & ChakraLinkProps;

const AccessibleLink = ({
  href,
  isExternal,
  children,
  as,
}: AccessibleLinkProps) => (
  <Link href={href} as={as} passHref>
    <ChakraLink isExternal={isExternal}>{children}</ChakraLink>
  </Link>
);

export default AccessibleLink;
