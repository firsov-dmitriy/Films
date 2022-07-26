import { Grid, Skeleton } from '@mui/material';
import React, { FC, useState } from 'react';
import { useGetListFilmQuery } from '../../service/filmService';
import FilmItem from '../FilmItem/FilmItem';
import { StyledCard } from '../FilmItem/style';

const ListFilms: FC = () => {
  const [limit, setLimit] = useState(6);
  const { data, isLoading } = useGetListFilmQuery({ minimum_rating: 9, genre: 'drama', limit });
  if (isLoading) {
    const arrSkeleton = Array(limit).fill(0);
    return (
      <Grid container display={'flex'} justifyContent={'center'} alignContent={'center'}>
        {arrSkeleton.map((el) => (
          <Skeleton variant="rectangular" height={220} width={146} sx={{ margin: 3 }} />
        ))}
      </Grid>
    );
  }
  return (
    <Grid container display={'flex'} justifyContent={'center'}>
      {data?.data.movies.map((film) => (
        <FilmItem key={film.id} film={film} />
      ))}
    </Grid>
  );
};

export default ListFilms;
