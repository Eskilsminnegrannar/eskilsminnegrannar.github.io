import {
    Box,
    Center,
    Container,
    Heading,
    Stack,
    HStack,
    Icon,
    useBreakpointValue,
} from '@chakra-ui/react';
import PictureCard from '../components/PictureCard';

const Ball = () => {
    return (
        <Icon viewBox="0 0 50 50" color="white" w={6} h={6}>
            <path
                fill="currentColor"
                d="M 25, 25 m -20, 0 a 20,20 0 1,0 40,0 a 20,20 0 1,0 -40,0"
            />
        </Icon>
    );
};

const HomePage = () => {
    const isVertical = useBreakpointValue({ base: true, md: false });

    return (
        <Box width="100%">
            <Box
                width="100%"
                bg="dark_blue"
                borderBottomRadius="20px"
                px={4}
                py={8}
                textAlign="center"
            >
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                    lineHeight={'110%'}
                    textColor={'white'}
                >
                    Eskilsminne Grannar
                </Heading>
                <Heading
                    fontWeight={400}
                    fontSize={['xl', '4xl']}
                    textColor={'white'}
                    marginTop={5}
                >
                    Vi ser <Ball /> Vi noterar {isVertical ? <br /> : <Ball />}{' '}
                    Vi reagerar <Ball /> Vi agerar
                </Heading>
            </Box>
            <Container maxW="container.xl">
                <Center>
                    <Stack
                        textAlign={'center'}
                        align={'center'}
                        spacing={{ base: 8, md: 10 }}
                        py={{ base: 20, md: 28 }}
                    >
                        {/* Conditionally render HStack based on screen size */}
                        {isVertical ? (
                            <Stack spacing={'60px'}>
                                <PictureCard
                                    image="logo.png"
                                    text="Vi boende rör oss mycket utomhus och vi organiserar nattvandringar vid behov. Vi använder oss av modern digital teknik för snabb kommunikation oss grannar emellan och vi håller tät dialog med Helsingborgs kommunpolis."
                                />
                                <PictureCard
                                    image="grannar.png"
                                    text="På Eskilsminne har vi en aktiv grannsamverkan i tätt samarbete med Polisen, Kommunen och Länsförsäkringar Skåne. Konceptet heter Grannar mot brott."
                                />
                                <PictureCard
                                    image="coyards.png"
                                    text="Vi som ansvarar för grannsamverkan i området kommer att använda oss av en kommunikationsplattform som heter Coyards. Målet är att effektivisera kommunikationen och göra det brottsförebyggande arbetet ännu bättre."
                                />
                            </Stack>
                        ) : (
                            <HStack spacing={'60px'} marginTop={10}>
                                <PictureCard
                                    image="logo.png"
                                    text="Vi boende rör oss mycket utomhus och vi organiserar nattvandringar vid behov. Vi använder oss av modern digital teknik för snabb kommunikation oss grannar emellan och vi håller tät dialog med Helsingborgs kommunpolis."
                                />
                                <PictureCard
                                    image="grannar.png"
                                    text="På Eskilsminne har vi en aktiv grannsamverkan i tätt samarbete med Polisen, Kommunen och Länsförsäkringar Skåne. Konceptet heter Grannar mot brott."
                                />
                                <PictureCard
                                    image="coyards.png"
                                    text="Vi som ansvarar för grannsamverkan i området kommer att använda oss av en kommunikationsplattform som heter Coyards. Målet är att effektivisera kommunikationen och göra det brottsförebyggande arbetet ännu bättre."
                                />
                            </HStack>
                        )}
                    </Stack>
                </Center>
            </Container>
        </Box>
    );
};

export default HomePage;
