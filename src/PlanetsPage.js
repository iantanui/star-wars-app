import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heading, SimpleGrid, Badge, Box, Image, Text } from '@chakra-ui/react';

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

            <Heading as="h1" mb={4} align="center" padding='3%'>
                Star Wars Planets
            </Heading>

            <SimpleGrid columns={[1, 2, 3]} spacing={10} padding='70px' maxWidth="100%" margin="0">

                {planets.map((planet, index) => (

                    <Box key={planet.name} borderWidth="1px" borderRadius="lg" p={4} mb={4}>

                        <Image src={planet.imageUrl} alt={planet.name} objectFit="cover" height={200} />

                        <Badge borderRadius='full' px='2' colorScheme='teal' margin='10px'>

                            <Link to={`/planets/${index + 1}`}>
                                <Heading as="h2" size="md">
                                    {planet.name}
                                </Heading>
                            </Link>
                        </Badge>

                        <Text mt={2}>{`Climate: ${planet.climate}`}</Text>

                        <Text>{`Terrain: ${planet.terrain}`}</Text>
                    </Box>
                ))
                }
            </SimpleGrid >
        </Box >
    );
}

export default Planets;
