import React from "react";
import { Flex, Box, Heading } from "@chakra-ui/react";

function Navbar() {
    return (
        <Flex as="nav" align="center" justify="space-between" wrap="wrap" bg="teal.500">
            <Box>
                <Heading as="h1" size="md">
                    Star Wars App
                </Heading>
            </Box>
        </Flex>
    );
}

export default Navbar;