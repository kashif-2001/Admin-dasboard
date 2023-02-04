import { colorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Invoice from './scenes/invoice';
import Contacts from './scenes/contacts';
import Bar from './scenes/bar';
import Form from './scenes/form';
import Line from './scenes/line';
import Pie from './scenes/pie';
import FAQ from './scenes/faq';
import Geography from './scenes/geography';
import Calendar from './scenes/calendar';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <Sidebar />
          <main className='content'>
            <Topbar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/team' element={<Team />} />
              <Route path='/invoices' element={<Invoice />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/form' element={<Form />} />
              <Route path='/line' element={<Line />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/geography' element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
