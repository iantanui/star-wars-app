import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heading, Box, Text } from '@chakra-ui/react';

function Planets() {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/planets/')
            .then((response) => response.json())
            .then((data) => setPlanets(data.results))
            .catch((error) => console.log(error));
    }, []);

    return (
        <Box>
            <Heading as="h1" mb={4} align="center">
                Star Wars Planets
            </Heading>
            {planets.map((planet, index) => (
                <Box key={index} borderWidth="1px" borderRadius="lg" p={4} mb={4}>
                    <Link to={`/planets/${index + 1}`}>
                        <Heading as="h2" size="md">
                            {planet.name}
                        </Heading>
                    </Link>
                    <Text mt={2}>{`Climate: ${planet.climate}`}</Text>
                    <Text>{`Terrain: ${planet.terrain}`}</Text>
                </Box>
            ))}
        </Box>
    );
}

export default Planets;
