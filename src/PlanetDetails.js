import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Text, Image } from "@chakra-ui/react";

const PlanetDetails = () => {
  const { planetId } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    const fetchPlanet = async () => {
      const response = await fetch(
        `https://swapi.dev/api/planets/${planetId}/`
      );
      const data = await response.json();
      setPlanet(data);
    };

    fetchPlanet();
  }, [planetId]);

  if (!planet) {
    return <div>Loading...</div>;
  }

  return (
    <Box p={10}>
      <Heading as="h1" size="2xl" mb={5}>
        {planet.name}
      </Heading>
      <Box display={{ md: "flex" }}>
        <Box mr={10}>
          <Image src={`https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`} />
        </Box>
        <Box>
          <Text fontSize="xl" mb={5}>
            Climate: {planet.climate}
          </Text>
          <Text fontSize="xl" mb={5}>
            Terrain: {planet.terrain}
          </Text>
          <Text fontSize="xl" mb={5}>
            Population: {planet.population}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default PlanetDetails;
