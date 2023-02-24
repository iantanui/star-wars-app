import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heading, Box, Image, Text } from '@chakra-ui/react';

function FilmDetails() {
    const { id } = useParams();
    const [film, setFilm] = useState(null);

    useEffect(() => {
        fetch(`https://swapi.dev/api/films/${id}`)
            .then((response) => response.json())
            .then((data) => setFilm(data))
            .catch((error) => console.log(error));
    }, [id]);

    if (!film) {
        return <div>Loading...</div>;
    }

    return (
        <Box p={4} margin='40px' padding='80px'>
            <Heading as="h1" size="xl" mb={2} align='center'>
                {film.title}
            </Heading>
            <Box>
                <Image src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`} />
            </Box>
            <Text fontSize="xl" mb={4}>
                Directed by {film.director} ({film.release_date})
            </Text>
            <Box
                bg="gray.100"
                p={4}
                borderRadius={4}
                dangerouslySetInnerHTML={{ __html: film.opening_crawl }}
            ></Box>
        </Box>
    );
}

export default FilmDetails;