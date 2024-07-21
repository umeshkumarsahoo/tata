import { Box, Flex, Link, Input, IconButton, Spacer, Text } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaHome, FaStore } from "react-icons/fa";

const Navbar = () => {
  return (
    <Box
      bg="black"
      px={4}
      py={2}
      position="sticky"
      top="0"
      zIndex="10"
    >
      <Flex alignItems="center">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="2xl" fontWeight="bold">
            Tata CLiQ
          </Link>
        </Box>
        <Spacer />
        <Box display="flex" alignItems="center" color="white">
          <Input
            placeholder="Search for Categories"
            bg="white"
            color="black"
            borderRadius="md"
            width="300px"
            mr={4}
          />
          <IconButton
            aria-label="Search"
            icon={<SearchIcon />}
            bg="white"
            color="black"
            _hover={{ bg: "gray.200", color: "black" }}
            mr={4}
          />
          <Link as={RouterLink} to="/products" mx={2} _hover={{ color: "gray.300" }}>
            <Flex direction="column" alignItems="center">
              <FaStore size="1.5em" />
              <Text fontSize="xs">Products</Text>
            </Flex>
          </Link>
          <Link as={RouterLink} to="/wishlist" mx={2} _hover={{ color: "gray.300" }}>
            <Flex direction="column" alignItems="center">
              <FaHeart size="1.5em" />
              <Text fontSize="xs">Wishlist</Text>
            </Flex>
          </Link>
          <Link as={RouterLink} to="/cart" mx={2} _hover={{ color: "gray.300" }}>
            <Flex direction="column" alignItems="center">
              <FaShoppingCart size="1.5em" />
              <Text fontSize="xs">Cart</Text>
            </Flex>
          </Link>
          <Link as={RouterLink} to="/login" mx={2} _hover={{ color: "gray.300" }}>
            <Flex direction="column" alignItems="center">
              <FaHome size="1.5em" />
              <Text fontSize="xs">Login</Text>
            </Flex>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;




