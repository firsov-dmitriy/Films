import { useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import GenreList from '../../components/GenreList/GenreList';
import ListFilms from '../../components/ListFilms/ListFilms';
import RandomFilm from '../../components/RandomFilm/RandomFilm';
import { genres } from '../../constance/ganre';

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
