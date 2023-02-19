import React from "react";
import {
    Flex,
    Box,
    Tabs,
    TabList,
    Tab,
    Heading
} from "@chakra-ui/react";

function Navbar() {
    return (
        <Flex as="nav" align="center" justify="space-between" wrap="wrap" bg="teal.500">
            <Box>
                <Heading as="h1" size="md">
                    Star Wars App
                </Heading>
            </Box>
            <Tabs size='md' variant='enclosed'>
                <TabList>
                    <Tab>Films</Tab>
                    <Tab>Actors</Tab>
                    <Tab>Planets</Tab>
                </TabList>

            </Tabs>

        </Flex >
    );
}

export default Navbar;