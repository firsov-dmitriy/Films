import { useMediaQuery, useTheme } from '@mui/material';
import { useState, useEffect } from 'react';
import FilmBox from '../FilmBox/FilmBox';
import ListFilms from '../ListFilms/ListFilms';
import RandomFilm from '../RandomFilm/RandomFilm';

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
      <FilmBox />
    </div>
  );
};

export default MainPage;
