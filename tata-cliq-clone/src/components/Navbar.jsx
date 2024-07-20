import { Link } from 'react-router-dom';
import { Box, Button, Input, Flex } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log(searchQuery);
  };

  return (
    <Box as="nav" p="4" bg="teal.500" color="white">
      <Flex justify="space-between" align="center">
        <Link to="/">Home</Link>
        <form onSubmit={handleSearch}>
          <Input
            placeholder="Search products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            width="300px"
            bg="white"
            color="black"
            mr="2"
          />
          <Button type="submit">Search</Button>
        </form>
        <Flex>
          {user ? (
            <>
              <Button onClick={logout}>Logout</Button>
              <Link to="/cart">Cart</Link>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
