import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heading, Box, Text, SimpleGrid, Image, Badge } from '@chakra-ui/react';

function People() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then((response) => response.json())
            .then((data) => setPeople(data.results))
            .catch((error) => console.log(error));
    }, []);

    return (

        <Box >
            <Heading as="h1" mb={4} textAlign="center" padding='3%'>
                Star Wars Characters
            </Heading>

            <SimpleGrid columns={[1, 2, 3]} spacing={10} padding='70px' maxWidth="100%" margin="0 auto">

                {people.map((person, index) => (

                    <Box key={index} borderWidth="1px" borderRadius="lg" p={4} mb={4} padding="80px">

                        <Image src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} alt={person.name} boxSize="80%" objectFit="cover" mr={4} />

                        <Badge borderRadius='full' px='2' colorScheme='teal' margin='10px'>

                            <Link to={`/people/${index + 1}`}>
                                <Heading as="h2" size="md">
                                    {person.name}
                                </Heading>
                            </Link>

                        </Badge>

                        <Text mt={2}>{`Gender: ${person.gender}`}</Text>

                        <Text>{`Birth year: ${person.birth_year}`}</Text>
                    </Box>
                ))}
            </SimpleGrid >
        </Box>

    );
}

export default People;
