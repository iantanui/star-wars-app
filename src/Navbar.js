import React from "react";
import {
    Flex,
    Box,
    Tabs,
    TabList,
    TabPanels,
    TabPanel,
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
            <Flex align="center">
                <Tabs align="center" size='md' variant='enclosed'>
                    <TabList>
                        <Tab>Films</Tab>
                        <Tab>Actors</Tab>
                        <Tab>Planets</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <p>Films</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Actors</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Planets</p>
                        </TabPanel>
                    </TabPanels>

                </Tabs>
            </Flex>
        </Flex >
    );
}

export default Navbar;