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

const Ball = (isMobile: boolean) => {
    return (
        <Icon
            viewBox="0 0 50 50"
            color="white"
            w={isMobile ? 4 : 6}
            h={isMobile ? 4 : 6}
        >
            <path
                fill="currentColor"
                d="M 25, 25 m -20, 0 a 20,20 0 1,0 40,0 a 20,20 0 1,0 -40,0"
            />
        </Icon>
    );
};

const HomePage = () => {
    const isMobile = useBreakpointValue({ base: true, md: false }) || false;

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
                    Vi ser {Ball(isMobile)} Vi noterar{' '}
                    {isMobile ? <br /> : Ball(isMobile)} Vi reagerar{' '}
                    {Ball(isMobile)} Vi agerar
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
                        {isMobile ? (
                            <Stack spacing={'60px'}>
                                <PictureCard
                                    image="logo.png"
                                    text="Vi boende rör oss mycket utomhus och vi organiserar nattvandringar vid behov. Vi håller tät dialog med Helsingborgs kommunpolis och vår områdespolis."
                                />
                                <PictureCard
                                    image="grannar.png"
                                    text="Vår aktiva grannsamverkan på Eskilsminne sker i tätt samarbete med Polisen, Kommunen och Länsförsäkringar Skåne. Konceptet heter Grannar mot brott."
                                />
                                <PictureCard
                                    image="coyards.png"
                                    text="Vi använder oss av modern digital teknik för snabb kommunikation oss grannar emellan. Coyards effektiviserar vår kommunikation och gör det brottsförebyggande arbetet ännu bättre."
                                />
                            </Stack>
                        ) : (
                            <HStack spacing={'60px'} marginTop={10}>
                                <PictureCard
                                    image="logo.png"
                                    text="Vi boende rör oss mycket utomhus och vi organiserar nattvandringar vid behov. Vi håller tät dialog med Helsingborgs kommunpolis och vår områdespolis."
                                />
                                <PictureCard
                                    image="grannar.png"
                                    text="Vår aktiva grannsamverkan på Eskilsminne sker i tätt samarbete med Polisen, Kommunen och Länsförsäkringar Skåne. Konceptet heter Grannar mot brott."
                                />
                                <PictureCard
                                    image="coyards.png"
                                    text="Vi använder oss av modern digital teknik för snabb kommunikation oss grannar emellan. Coyards effektiviserar vår kommunikation och gör det brottsförebyggande arbetet ännu bättre."
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
