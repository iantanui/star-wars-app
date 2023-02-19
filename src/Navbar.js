import React from "react";
import {
    Heading
} from "@chakra-ui/react";

function Navbar() {
    return (
        <Heading as="nav" align="center" justify="space-between" wrap="wrap" bg="teal.500">
            Star Wars App
        </Heading>


    );
}

export default Navbar;