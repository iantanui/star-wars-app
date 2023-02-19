import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Navbar from './Navbar';

function App() {
  return (

    < ChakraProvider theme={theme} >
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            < Navbar />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider >
  );
}

export default App;
