import { Button, Typography } from '@mui/material';
import React from 'react';
import { Params, useParams } from 'react-router';
import { useGetOneFilmQuery } from '../../service/filmService';
import { BgPaper } from '../../styles/style/style';
import { BoxFilmPage, ContainerFilmPage, ImageFilmPage, MenuFilmPage } from './style';

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
      <ContainerFilmPage container flexWrap={'nowrap'}>
        <ImageFilmPage src={movie?.medium_cover_image} alt={movie?.title} />
        <Typography variant="h5"> {movie?.title}</Typography>

        <MenuFilmPage>
          <Button variant="contained">KP : {movie?.rating || 0}</Button>
          {movie?.yt_trailer_code && (
            <Button
              variant="contained"
              target={'_blanc'}
              href={`https://www.youtube.com/watch?v=${movie?.yt_trailer_code}`}
            >
              About film
            </Button>
          )}
        </MenuFilmPage>

        <BoxFilmPage>
          <Typography variant="subtitle1">Discription : {movie?.description_full}</Typography>
          <Typography variant="subtitle1">Discription : {movie?.description_full}</Typography>
        </BoxFilmPage>
      </ContainerFilmPage>
    </BgPaper>
  );
};

export default FilmPage;
