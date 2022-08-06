import { Theme, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';
import FilmBox from '../../components/FilmBox/FilmBox';
import GenreList from '../../components/GenreList/GenreList';
import ListFilms from '../../components/ListFilms/ListFilms';
import RandomFilm from '../../components/RandomFilm/RandomFilm';

const genres: string[] = [
  'comedy',
  'romance',
  'drama',
  'animation',
  'sci-fi',
  'action',
  'mystery',
  'adventure',
  'horror',
  'thriller',
  'crime',
  'fantasy',
];

const MainPage = () => {
  const theme = useTheme();
  const matchMobile = useMediaQuery('(max-width:439px)');
  const matchDesk = useMediaQuery(theme.breakpoints.up('xl'));
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    matchDesk && setLimit(8);
    matchMobile ? setLimit(2) : setLimit(6);
  }, [matchDesk, matchMobile]);
  return (
    <div>
      <ListFilms minimum_rating={9} genre={'drama'} limit={limit} />
      <RandomFilm />
      <GenreList genres={genres} />
    </div>
  );
};

export default MainPage;
