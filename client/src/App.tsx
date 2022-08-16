import { Box, CssBaseline } from '@mui/material';
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import FilmPage from './page/FilmPage/FilmPage';
import Layout from './components/Layout/Layout';
import MainPage from './page/MainPage/MainPage';
import NotFound from './components/NotFound/NotFound';
import WelcomPage from './page/WelcomePage/WelcomPage';

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
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/welcome" element={<WelcomPage />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/film/:id" element={<FilmPage />} />
            </Routes>
          </Box>
        </Layout>
      </ErrorBoundary>
    </>
  );
};

export default App;
