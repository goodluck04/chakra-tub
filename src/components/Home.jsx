import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";


// object for styling heading 
const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};


const Home = () => {
  return (
    <Box>
        <MyCarousel />
        <Container 
          maxW={'container.lg'}
          minH={'100vh'}
          p={'16'}
          >
          <Heading
            textTransform={'uppercase'}
            py={'2'}
            w={'fit-content'}
            borderBottom={'2px solid'}
            m={'auto'}
          >Services</Heading>

          <Stack 
            h={'full'}
            p={'4'}
            alignItems={'center'}
            direction={['column', 'row']}
          >
          <Image
           src={img5} 
           filter={'hue-rotate(-130deg)'}
           h={['40', '400']}

          />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”
            As Cicero would put it, “Um, not so fast.”
            The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.
            Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.
            In particular, the garbled words of lorem ipsum bear an unmistakable resemblance to sections 1.10.32–33 of Cicero's work, with the most notable passage excerpted below:
          </Text>
          </Stack>
        </Container>
    </Box>
  )
}

const MyCarousel = () => (
    <Carousel
     autoPlay 
     infiniteLoop
     interval={1000}
     showArrows={false}
     showThumbs={false}
     showStatus={false}
     >
        <Box w="full" h={"100vh"}>
            <Image src={img1} h={'full'} w={'full'} objectFit={'cover'} />
            <Heading 
              bg={'blackAlpha.600'}
              color={'white'}
              {...headingOptions}
            >
              Watch the Future
            </Heading>   
        </Box>

        <Box w="full" h={"100vh"}>
            <Image src={img2} h={'full'} w={'full'} objectFit={'cover'} />
            <Heading 
              bg={'whiteAlpha.900'}
              color={'black'}
              {...headingOptions}
            >
              Gaming is future 
            </Heading>   
        </Box>

        <Box w="full" h={"100vh"}>
            <Image src={img3} h={'full'} w={'full'} objectFit={'cover'} />
            <Heading 
              bg={'whiteAlpha.600'}
              color={'black'}
              {...headingOptions}
            >
              Gaming on Console 
            </Heading>   
        </Box>

        <Box w="full" h={"100vh"}>
            <Image src={img4} h={'full'} w={'full'} objectFit={'cover'} />
            <Heading 
              bg={'blackAlpha.600'}
              color={'white'}
              {...headingOptions}
            >
              Tvf series 
            </Heading>   
        </Box>

    </Carousel>
)

export default Home