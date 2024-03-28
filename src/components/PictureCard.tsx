import { Box, Image, Text, Flex } from '@chakra-ui/react';

interface PictureCardProps {
  image: string;
  text: string;
}

const PictureCard: React.FC<PictureCardProps> = ({ image, text }) => {
  return (
    <Flex justify="center" align="center" direction="column" width="100%">
      <Box width="350px" height={["250px", '275px', '325px', '350px']} backgroundColor="transparent">
        <Image src={image} alt="Picture" height="100%" width="100%" objectFit="contain" />
      </Box>
      <Text fontWeight={400} fontSize={['lg', 'xl']} marginTop={10} height="150px">
        {text}
      </Text>
    </Flex>
  );
};

export default PictureCard;
