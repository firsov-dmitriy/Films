import { Typography } from '@mui/material';
import React from 'react';
import { Params, useParams } from 'react-router';
import { useGetOneFilmQuery } from '../../service/filmService';
import { BgPaper } from '../../styles/style/style';
import { BoxFilmPage, ContainerFilmPage, ImageFilmPage } from './style';

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
        <BoxFilmPage>
          <Typography variant="subtitle1">
            Discription : {data?.data.movie.description_full}
          </Typography>
        </BoxFilmPage>
      </ContainerFilmPage>
    </BgPaper>
  );
};

export default FilmPage;
