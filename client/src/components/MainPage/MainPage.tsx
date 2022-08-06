import { Theme, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';
import FilmBox from '../FilmBox/FilmBox';
import GenreList from '../GenreList/GenreList';
import ListFilms from '../ListFilms/ListFilms';
import RandomFilm from '../RandomFilm/RandomFilm';

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
      <FilmBox />
    </div>
  );
};

export default MainPage;
