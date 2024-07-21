import { Box, Flex, Text, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="black" color="white" py="4">
      <Flex justify="space-between" align="center" px="8">
        <Text fontSize="lg" fontWeight="bold">
          &copy; 2024 TATA CLIQ
        </Text>
        <Flex>
          <Link href="#" p="2" _hover={{ textDecoration: 'none', color: 'gray.300' }}>
            About Us
          </Link>
          <Link href="#" p="2" _hover={{ textDecoration: 'none', color: 'gray.300' }}>
            Contact Us
          </Link>
          <Link href="#" p="2" _hover={{ textDecoration: 'none', color: 'gray.300' }}>
            Privacy Policy
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;

