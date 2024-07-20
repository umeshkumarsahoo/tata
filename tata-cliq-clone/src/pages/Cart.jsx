import { useContext } from 'react';
import { Box, Text, Button, Image, Flex } from '@chakra-ui/react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  return (
    <Box p="6">
      <Text as="h1" fontSize="2xl" mb="4">Your Cart</Text>
      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <>
          {cart.map(product => (
            <Flex key={product.id} mb="4" borderWidth="1px" borderRadius="lg" p="4" bg="white">
              <Image src={product.image} alt={product.title} boxSize="100px" objectFit="contain" />
              <Box ml="4" flex="1">
                <Text as="h2" fontWeight="bold" fontSize="xl">{product.title}</Text>
                <Text>${product.price}</Text>
                <Button colorScheme="red" onClick={() => removeFromCart(product.id)} mt="2">
                  Remove
                </Button>
              </Box>
            </Flex>
          ))}
          <Text as="h2" fontSize="xl" fontWeight="bold" mt="4">Total: ${getTotalPrice()}</Text>
        </>
      )}
    </Box>
  );
};

export default Cart;
