import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import LineChart from '../../components/LineChart';

const Line = () => {
  return (
    <Box m='20px'>
      <Header title='LINE CHART' subtitle='Simple LINE Chart' />
      <Box height='70vh' width='95%'>
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
