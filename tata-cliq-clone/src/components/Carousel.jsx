import { useState } from 'react';
import { Box, Image, Flex, Button } from '@chakra-ui/react';

const images = [
  'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
  'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
  'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <Box
      position="relative"
      width="full"
      height="450px"
      overflow="hidden"
      mt="4"
      bgGradient="linear(to-r, blue.200, red.200)"
    >
      <Flex
        transition="transform 0.5s"
        transform={`translateX(-${currentIndex * 100}%)`}
        height="100%"
      >
        {images.map((image, index) => (
          <Box key={index} minWidth="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              objectFit="contain"
              maxWidth="100%"
              maxHeight="100%"
            />
          </Box>
        ))}
      </Flex>
      <Button
        onClick={prevSlide}
        position="absolute"
        top="50%"
        left="0"
        transform="translateY(-50%)"
        zIndex="10"
        colorScheme="blue"
      >
        Prev
      </Button>
      <Button
        onClick={nextSlide}
        position="absolute"
        top="50%"
        right="0"
        transform="translateY(-50%)"
        zIndex="10"
        colorScheme="blue"
      >
        Next
      </Button>
    </Box>
  );
};

export default Carousel;


