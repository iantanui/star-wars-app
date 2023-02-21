import React, { useState, useEffect } from 'react';
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
  WrapItem,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import FilmDetails from './FilmDetails';

function App() {

  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);


  useEffect(() => {

    axios
      .get("https://swapi.dev/api/films/")
      .then((response) => setFilms(response.data.results))
      .catch((error) => console.log(error));

    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => setPeople(response.data.results))
      .catch((error) => console.log(error));

    axios
      .get("https://swapi.dev/api/planets/")
      .then((response) => setPlanets(response.data.results))
      .catch((error) => console.log(error));

  }, []);

  return (

    < ChakraProvider theme={theme} >

      <ColorModeSwitcher justifySelf="flex-end" />

      <Flex direction="column" minH="1000vh">
        <Box bg="teal.500" p="4">
          <Heading color="white" align="center">Star Wars App</Heading>
        </Box>

        <BrowserRouter>
          <Routes>
            <Route path='/films/:episodeId'>
              <FilmDetails films={films} />
            </Route>
          </Routes>
          <Tabs isFitted>

            <TabList>
              <Tab>Films</Tab>
              <Tab>People</Tab>
              <Tab>Planets</Tab>
            </TabList>

            <TabPanels color="black">

              <TabPanel>


                <Wrap spacing={4} justify="center" gridTemplateColumns='repeat(auto-fill)'>
                  {films.map((film) => (
                    <WrapItem key={film.episode_id} maxW="390px">
                      <Link to={`/films/${film.episode_id}`}>
                        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                          <Image src={`https://starwars-visualguide.com/assets/img/films/${film.episode_id}.jpg`} alt={film.title} />
                          <Box>
                            <Heading as="h3" size="md" my={2}>
                              {film.title}
                            </Heading>
                            <Text>
                              {film.release_date}
                            </Text>
                            <Text my={4}>{film.opening_crawl}</Text>
                          </Box>
                        </Box>
                      </Link>
                    </WrapItem>
                  ))}
                </Wrap>

              </TabPanel>

              <TabPanel>

                <Wrap spacing={4} justify="center" gridTemplateColumns='repeat(auto-fill)'>
                  {people.map((actor) => (
                    <WrapItem key={actor.id} maxW="390px">
                      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                        <Image
                          src={`https://starwars-visualguide.com/assets/img/characters/${actor.id}.jpg`}
                          alt={actor.name}
                        />
                        <Box>
                          <Heading as="h3" size="md" my={2}>
                            {actor.name}
                          </Heading>
                          <Text>
                            <strong>Gender:</strong> {actor.gender}
                          </Text>
                          <Text>
                            <strong>Birth Year:</strong> {actor.birth_year}
                          </Text>
                        </Box>
                      </Box>
                    </WrapItem>
                  ))}
                </Wrap>

              </TabPanel>

              <TabPanel>

                <Wrap spacing={4} justify="center" gridTemplateColumns='repeat(auto-fill)'>
                  {planets.map((planet) => (
                    <WrapItem key={planet.name} maxW="390px">
                      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                        <Image src={`https://starwars-visualguide.com/assets/img/characters/${planet.url.match(/\d+/)}.jpg`} alt={planet.name} />
                        <Box>
                          <Heading as="h3" size="md" my={2}>
                            {planet.name}
                          </Heading>
                          <Text>
                            <strong>Population:</strong> {planet.population}
                          </Text>
                          <Text>
                            <strong>Climate:</strong> {planet.climate}
                          </Text>
                        </Box>
                      </Box>
                    </WrapItem>
                  ))}
                </Wrap>

              </TabPanel>

            </TabPanels>

          </Tabs>

        </BrowserRouter>

      </Flex>

    </ChakraProvider >
  );
}

export default App;
