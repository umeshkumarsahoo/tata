import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from 'axios';
import { Box, Image, Text } from '@chakra-ui/react';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Box>
      <Image src={product.image} alt={product.title} />
      <Text as="h2" fontWeight="bold" fontSize="xl">{product.title}</Text>
      <Text>{product.description}</Text>
      <Text>${product.price}</Text>
    </Box>
  );
};

export default ProductPage;

