import { Box, Container, CssBaseline } from '@mui/material';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './components/MainPage/MainPage';
import WelcomPage from './components/WelcomePage/WelcomPage';

const style = {
  box: {
    background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
  },
};

const App = () => {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Layout>
          <Box sx={style.box}>
            <Container>
              <Routes>
                <Route path="/welcome" element={<WelcomPage />} />
                <Route path="/" element={<MainPage />} />
                {/* <Route path="*" element={<WelcomPage />} /> */}
              </Routes>
            </Container>
          </Box>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
