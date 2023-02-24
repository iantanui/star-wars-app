import { Link } from 'react-router-dom';
import { Box, Flex, Heading, Spacer, Button } from '@chakra-ui/react';

function Header() {
    return (
        <Flex as="nav" align="center" justify="space-between" wrap="wrap" bg="teal.500" color="white" p={6}>
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg">
                    <Link to="/">Star Wars App</Link>
                </Heading>
            </Flex>
            <Spacer />
            <Box>
                <Link to="/films">
                    <Button mr={2} bg="teal.500" border="solid 2px white">Films</Button>
                </Link>
                <Link to="/people">
                    <Button mr={2} bg="teal.500" border="solid 2px white">People</Button>
                </Link>
                <Link to="/planets">
                    <Button mr={2} bg="teal.500" border="solid 2px white">Planets</Button>
                </Link>
            </Box>

            <Box display={{ base: 'block', md: 'none' }} onClick={() => console.log('clicked')}>
                {/* Hamburger menu icon */}
            </Box>

        </Flex>
    );
}

export default Header;