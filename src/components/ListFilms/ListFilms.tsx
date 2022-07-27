import { Grid, Skeleton } from '@mui/material';
import React, { FC, useState } from 'react';
import { useGetListFilmQuery } from '../../service/filmService';
import FilmItem from '../FilmItem/FilmItem';

const ListFilms: FC = () => {
  const [limit, setLimit] = useState(6);
  const { data, isLoading } = useGetListFilmQuery({ minimum_rating: 9, genre: 'drama', limit });
  if (isLoading) {
    throw new Error();
    const arrSkeleton = Array(limit).fill(0);
    return (
      <Grid container display={'flex'} justifyContent={'space-around'}>
        {arrSkeleton.map((el, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            height={300}
            width={200}
            sx={{ margin: 3, borderRadius: '4px' }}
          />
        ))}
      </Grid>
    );
  }
  return (
    <Grid container display={'flex'} justifyContent={'space-around'}>
      {data?.data.movies.map((film) => (
        <FilmItem key={film.id} film={film} />
      ))}
    </Grid>
  );
};

export default ListFilms;
