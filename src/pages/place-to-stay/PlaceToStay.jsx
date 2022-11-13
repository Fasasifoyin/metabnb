import { Box } from '@chakra-ui/react';
import React from 'react';
import GridDisplay from '../../components/grid-display/GridDisplay';
import PlaceToStayTab from '../../components/tabs/PlaceToStayTab';
import { metaverse } from '../../utilities';

const PlaceToStay = () => {
  return (
    <main>
      <Box className="cc-container page_alignment" mt={`127px`} mb={`77px`}>
        <PlaceToStayTab />
      </Box>
      <Box className="cc-container page_alignment" mb={`5.75rem`}>
        <GridDisplay collections={metaverse} />
      </Box>
    </main>
  );
};

export default PlaceToStay;
