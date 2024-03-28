import {
    Center,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    HStack,
    Icon,
    useBreakpointValue
  } from '@chakra-ui/react';
  import PictureCard from '../components/PictureCard';

const Ball = () => {
    return (
        <Icon viewBox='0 0 200 200' color='red'>
            <path
                fill='currentColor'
                d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
            />
        </Icon>
    );
}
  
  const HomePage = () => {
    const isVertical = useBreakpointValue({ base: true, md: false });
  
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Eskilsminne{' '}
            <Text as={'span'} color={'red'}>
              Grannar
            </Text>
          </Heading>
          <Heading fontWeight={400} fontSize={['xl', '2xl']}>
            Vi{' '}
            <Text as='i'>ser</Text> <Ball /> Vi{' '}
            <Text as='i'>noterar</Text> <Ball /> Vi{' '}
            <Text as='i'>reagerar</Text> <Ball /> Vi{' '}
            <Text as='i'>agerar</Text>
          </Heading>
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'red'}
              bg={'red'}
              _hover={{ bg: 'dark_blue' }}>
              Om Oss
            </Button>
            <Button rounded={'full'} px={6}>
              Nyheter
            </Button>
          </Stack>
          <Center>
            {/* Conditionally render HStack based on screen size */}
            {isVertical ? (
              <Stack spacing={'60px'} marginTop={10}>
                <PictureCard image='logo.png' text='Vi boende rör oss mycket utomhus och vi organiserar nattvandringar vid behov. Vi använder oss av modern digital teknik för snabb kommunikation oss grannar emellan och vi håller tät dialog med Helsingborgs kommunpolis.' />
                <PictureCard image='grannar.png' text='På Eskilsminne har vi en aktiv grannsamverkan i tätt samarbete med Polisen, Kommunen och Länsförsäkringar Skåne.' />
                <PictureCard image='coyards.png' text='Vi som ansvarar för grannsamverkan i området kommer att använda oss av en kommunikationsplattform som heter Coyards. Målet är att effektivisera kommunikationen och göra det brottsförebyggande arbetet ännu bättre.' />
              </Stack>
            ) : (
              <HStack spacing={'60px'} marginTop={10}>
                <PictureCard image='logo.png' text='Vi boende rör oss mycket utomhus och vi organiserar nattvandringar vid behov. Vi använder oss av modern digital teknik för snabb kommunikation oss grannar emellan och vi håller tät dialog med Helsingborgs kommunpolis.' />
                <PictureCard image='grannar.png' text='På Eskilsminne har vi en aktiv grannsamverkan i tätt samarbete med Polisen, Kommunen och Länsförsäkringar Skåne. Konceptet heter Grannar mot brott.' />
                <PictureCard image='coyards.png' text='Vi som ansvarar för grannsamverkan i området kommer att använda oss av en kommunikationsplattform som heter Coyards. Målet är att effektivisera kommunikationen och göra det brottsförebyggande arbetet ännu bättre.' />
              </HStack>
            )}
          </Center>
        </Stack>
      </Container>
    );
  };
  
  export default HomePage;
  