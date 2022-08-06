import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Params, useParams } from 'react-router';
import { useGetOneFilmQuery } from '../../service/filmService';
import { BgPaper } from '../../styles/style/style';

interface ParamsProps extends Params {
  id: string;
}

const FilmPage = () => {
  const { id } = useParams<ParamsProps>();
  const { data } = useGetOneFilmQuery({ movieId: id ? parseInt(id) : 231 });
  const movie = data?.data.movie;
  console.log(movie);

  return (
    <BgPaper>
      <Grid container flexWrap={'nowrap'}>
        <img src={movie?.medium_cover_image} alt={movie?.title} />
        <Typography variant="subtitle1">{data?.data.movie.description_full}</Typography>
      </Grid>
      {movie?.language}
    </BgPaper>
  );
};

export default FilmPage;
