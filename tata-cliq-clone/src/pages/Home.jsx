import { Box } from '@chakra-ui/react';
import Carousel from '../components/Carousel';
import DealSection from '../components/DealSection';

const Home = () => {
  return (
    <Box>
      <Carousel />
      <DealSection />
    </Box>
  );
};

export default Home;

