import { Box, Container, CssBaseline } from '@mui/material';
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Layout from './components/Layout/Layout';
import MainPage from './components/MainPage/MainPage';
import WelcomPage from './components/WelcomePage/WelcomPage';

const style = {
  box: {
    background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
  },
};

const App = () => {
  const navigate = useNavigate();
  return (
    <>
      <CssBaseline />
      <ErrorBoundary navigate={navigate}>
        <Layout>
          <Box sx={style.box}>
            <Container maxWidth={false}>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/welcome" element={<WelcomPage />} />
                <Route path="*" element={<h1>404 not found</h1>} />
              </Routes>
            </Container>
          </Box>
        </Layout>
      </ErrorBoundary>
    </>
  );
};

export default App;
