import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import GeographyChart from '../../components/GeographyChart';
import { tokens } from '../../theme';
import { useTheme } from '@mui/material';

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m='20px'>
      <Header title='GEOGRAPHY CHART' subtitle='Simple Geography Chart' />
      <Box
        height='75vh'
        width='95%'
        border={`1px solid ${colors.grey[100]}`}
        borderRadius='4px'
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
