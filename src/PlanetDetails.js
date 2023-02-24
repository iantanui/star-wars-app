import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Text, Image } from "@chakra-ui/react";

function PlanetDetails() {
    const { id } = useParams();
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        fetch(`https://swapi.dev/api/planets/${id}/`)
            .then((response) => response.json())
            .then((data) => setPlanet(data))
            .catch((error) => console.log(error));
    }, [id]);

    if (!planet) {
        return <div>Loading...</div>;
    }

    return (
        <Box p={10} margin='40px' padding='80px'>
            <Heading as="h1" size="2xl" mb={2} align='center'>
                {planet.name}
            </Heading>
            <Box display={{ md: "flex" }}>
                <Box mr={10}>
                    <Image src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
                </Box>
                <Box>
                    <Text fontSize="xl" mb={5}>
                        Climate: {planet.climate}
                    </Text>
                    <Text fontSize="xl" mb={5}>
                        Terrain: {planet.terrain}
                    </Text>
                    <Text fontSize="xl" mb={5}>
                        Population: {planet.population}
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};

export default PlanetDetails;
