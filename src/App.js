import React from 'react';
import {
  ChakraProvider,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Navbar from './Navbar';

function App() {
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
