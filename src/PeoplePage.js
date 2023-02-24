import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heading, Box, Text, SimpleGrid } from '@chakra-ui/react';

function People() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then((response) => response.json())
            .then((data) => setPeople(data.results))
            .catch((error) => console.log(error));
    }, []);

    return (
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' padding='60px'>
            <Box>
                <Heading as="h1" mb={4} align='center'>
                    Star Wars Characters
                </Heading>
                {people.map((person, index) => (
                    <Box key={index} borderWidth="1px" borderRadius="lg" p={4} mb={4}>
                        <Link to={`/people/${index + 1}`}>
                            <Heading as="h2" size="md">
                                {person.name}
                            </Heading>
                        </Link>
                        <Text mt={2}>{`Gender: ${person.gender}`}</Text>
                        <Text>{`Birth year: ${person.birth_year}`}</Text>
                    </Box>
                ))}
            </Box>
        </SimpleGrid>
    );
}

export default People;
