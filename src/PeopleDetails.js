import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heading, Box, Image, Link, Badge, List, ListItem, Text } from '@chakra-ui/react';

function PeopleDetails() {
    const { id } = useParams();
    const [person, setPerson] = useState(null);

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}/`)
            .then((response) => response.json())
            .then((data) => setPerson(data))
            .catch((error) => console.log(error));
    }, [id]);

    if (!person) {
        return <div>Loading...</div>;
    }

    return (
        <Box p={10} margin="50px" padding="40px" borderWidth='1px' borderRadius='lg' overflow='hidden'>

            {/* <Link to="/people">Back to People</Link> */}

            <Heading as="h1" padding={20}>
                {person.name}
            </Heading>

            <Box display={{ md: "flex" }}>
                <Box mr={16}>
                    <Image src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`} />
                </Box>
                <Box marginTop="18%">
                    <Text>
                        Birth Year: {person.birth_year}
                    </Text>
                    <Text>
                        Gender: {person.gender}
                    </Text>
                    <Text>
                        Eye Color: {person.eye_color}
                    </Text>

                    <List>
                        {person.films.map((filmUrl) => (
                            <ListItem key={filmUrl}>
                                <Link to={`/films/${filmUrl.split("/").slice(-2)[0]}`}>
                                    {filmUrl}
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </Box>
    );
}

export default PeopleDetails;
