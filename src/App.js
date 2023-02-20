import React, { useState, useEffect } from 'react';
import axios from "axios";
import {
  ChakraProvider,
  Flex,
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
import Navbar from './Navbar';

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
      setFilms(response.data.results);
    }
    fetchPeople();

    async function fetchPlanets() {
      const response = await axios.get("https://swapi.dev/api/planets/");
      setFilms(response.data.results);
    }
    fetchPlanets();

  }, []);

  return (

    < ChakraProvider theme={theme} >

      <ColorModeSwitcher justifySelf="flex-end" />

      < Navbar />

      <Flex bg="teal.500">
        <Tabs align="center" variant='enclosed' isFitted width="full">

          <TabList>
            <Tab>Films</Tab>
            <Tab>Actors</Tab>
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
              <p>Films</p>
            </TabPanel>
            <TabPanel>
              <p>Actors</p>
            </TabPanel>
            <TabPanel>
              <p>Planets</p>
            </TabPanel>

          </TabPanels>

        </Tabs>
      </Flex>

    </ChakraProvider >
  );
}

export default App;
