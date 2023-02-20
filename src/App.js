import React, { useState, useEffect } from 'react';
import axios from "axios";
import {
  ChakraProvider,
  Flex,
  Box,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  theme,
  Text,
  List,
  ListItem,
  Link
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
          <Heading color="white">Star Wars App</Heading>
        </Box>

        <Tabs align="center" variant='enclosed' isFitted width="full">

          <TabList>
            <Tab>Films</Tab>
            <Tab>People</Tab>
            <Tab>Planets</Tab>
          </TabList>

          <TabPanels color="black">

            <TabPanel>
              <List spacing={3}>
                {films.map((film) => (
                  <ListItem key={film.title}>
                    <Link href="#">{film.title}</Link>
                    <Text>{film.release_date}</Text>
                  </ListItem>
                ))}
              </List>
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
