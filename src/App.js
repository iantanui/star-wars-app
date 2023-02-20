import React, { useState, useEffect } from 'react';
import axios from "axios";
import {
  ChakraProvider,
  Flex,
  Box,
  Wrap,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Image,
  Tab,
  theme,
  Text,
  List,
  ListItem,
  Link,
  WrapItem
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {

  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);


  useEffect(() => {

    async function fetchFilms() {
      const response = await axios.get("https://swapi.dev/api/films/");
      setFilms(response.data.results);
    }
    fetchFilms();

    async function fetchPeople() {
      const response = await axios.get("https://swapi.dev/api/people/");
      setPeople(response.data.results);
    }
    fetchPeople();

    async function fetchPlanets() {
      const response = await axios.get("https://swapi.dev/api/planets/");
      setPlanets(response.data.results);
    }
    fetchPlanets();

  }, []);

  return (

    < ChakraProvider theme={theme} >

      <ColorModeSwitcher justifySelf="flex-end" />

      <Flex direction="column" minH="1000vh">
        <Box bg="teal.500" p="4">
          <Heading color="white" align="center">Star Wars App</Heading>
        </Box>

        <Tabs isFitted>

          <TabList>
            <Tab>Films</Tab>
            <Tab>People</Tab>
            <Tab>Planets</Tab>
          </TabList>

          <TabPanels color="black">

            <TabPanel>

              <Wrap spacing={4}>
                {films.map((film) => (
                  <WrapItem key={film.episode_id}>
                    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                      <Image src={`https://starwars-visualguide.com/assets/img/films/${film.episode_id}.jpg`} alt={film.title} />
                      <Box>
                        <Heading as="h3" size="md" my={2}>
                          {film.title}
                        </Heading>
                      </Box>
                    </Box>
                  </WrapItem>
                ))}
              </Wrap>

            </TabPanel>
            <TabPanel>
              <List spacing={3}>
                {people.map((actor) => (
                  <ListItem key={actor.name}>
                    <Link href="#">{actor.name}</Link>
                    <Text>{actor.birth_year}</Text>
                  </ListItem>
                ))}
              </List>
            </TabPanel>

            <TabPanel>
              <List spacing={3}>
                {planets.map((planet) => (
                  <ListItem key={planet.name}>
                    <Link href="#">{planet.name}</Link>
                    <Text>{planet.climate}</Text>
                  </ListItem>
                ))}
              </List>
            </TabPanel>

          </TabPanels>

        </Tabs>

      </Flex>

    </ChakraProvider >
  );
}

export default App;
