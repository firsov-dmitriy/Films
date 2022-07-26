import { Grid } from '@mui/material';
import React, { FC } from 'react';
import { useGetListFilmQuery } from '../../service/filmService';
import FilmItem from '../FilmItem/FilmItem';

const ListFilms: FC = () => {
  const { data } = useGetListFilmQuery({ minimum_rating: 9, genre: 'drama' });
  console.log(data);

  return (
    <Grid container display={'flex'} justifyContent={'center'}>
      {data?.data.movies.map((film) => (
        <FilmItem key={film.id} film={film} />
      ))}
    </Grid>
  );
};

export default ListFilms;
