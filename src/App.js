import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './Header';
import HomePage from './HomePage';
import FilmsPage from './FilmsPage';
import FilmDetails from './FilmDetails';
import PeoplePage from './PeoplePage';
import PlanetsPage from './PlanetsPage';
import PlanetDetails from './PlanetDetails';

function App() {
  return (
    < ChakraProvider>

      <ColorModeSwitcher justifySelf="flex-end" />

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/films" element={<FilmsPage />} />
          <Route path="/films/:id" element={<FilmDetails />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/planets" element={<PlanetsPage />} />
          <Route path="/planet/:id" element={<PlanetDetails />} />
        </Routes>
      </Router>

    </ChakraProvider >
  );
}

export default App;
