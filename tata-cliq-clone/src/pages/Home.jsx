import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data));
  }, []);

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6} p="4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
};

export default Home;
