import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heading, Text, Box, Image, Badge, SimpleGrid } from '@chakra-ui/react';

function FilmsPage() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const fetchFilms = async () => {
            const response = await fetch('https://swapi.dev/api/films/');
            const data = await response.json();
            setFilms(data.results);
        };
        fetchFilms();
    }, []);

    return (
        <Box>
            <Heading as="h1" mb={4} textAlign="center" padding='3%'>
                Star Wars Films
            </Heading>

            <SimpleGrid spacing={10} templateColumns='repeat(auto-fill, minmax(400px, 1fr))' padding='60px'>
                {films.map((film) => (

                    <Box key={film.episode_id} borderWidth='1px' borderRadius='lg' overflow='hidden'>

                        <Link to={`/films/${film.episode_id}`}>
                            <Box borderWidth='1px' borderRadius='lg' overflow='hidden' padding='70px'>

                                <Image src={`https://starwars-visualguide.com/assets/img/films/${film.episode_id}.jpg`} alt={film.title} objectFit='cover' />

                                <Box p='6'>
                                    <Box d='flex' alignItems='baseline'>
                                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                                            {film.director}
                                        </Badge>
                                        <Text color='gray.500' fontSize='sm'>  {film.release_date}   </Text>
                                    </Box>

                                    <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
                                        {film.title}
                                    </Box>

                                    <Box as='p' mb='1' lineHeight='tall' maxH='1.8em' sx={{ 'WebkitLineClamp': 3 }} >
                                        {film.opening_crawl}
                                    </Box>
                                </Box>
                            </Box>
                        </Link>
                    </Box >
                ))
                }
            </SimpleGrid >
        </Box>
    );
}

export default FilmsPage;