import { Box, Flex, Link, Spacer, Image, Button } from '@chakra-ui/react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box bg="dark_blue" p={4} color="white">
      <Flex alignItems="center">
        <Link href="/" fontSize="xl" fontWeight="bold">
          <Image src='logo.png' height='50px' />
        </Link>
        <Spacer />
        <Flex display={{ base: "none", md: "flex" }} alignItems="center">
          <Link href="/home" marginRight={4}>
            Home
          </Link>
          <Link href="/about" marginRight={4}>
            About
          </Link>
          <Link href="/contact">Contact</Link>
        </Flex>
        <Button
          display={{ base: "block", md: "none" }}
          onClick={toggleMenu}
        >
          Meny
        </Button>
      </Flex>
      {isOpen && (
        <Box mt={4} display={{ base: "block", md: "none" }}>
          <Link href="/home" onClick={toggleMenu} display="block" py={2}>
            Home
          </Link>
          <Link href="/about" onClick={toggleMenu} display="block" py={2}>
            About
          </Link>
          <Link href="/contact" onClick={toggleMenu} display="block" py={2}>
            Contact
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
