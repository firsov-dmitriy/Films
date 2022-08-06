import React from 'react';
import { Params, useParams } from 'react-router';
import { useGetOneFilmQuery } from '../../service/filmService';

interface ParamsProps extends Params {
  id: string;
}

const FilmPage = () => {
  const { id } = useParams<ParamsProps>();
  const { data } = useGetOneFilmQuery({ movieId: id ? parseInt(id) : 231 });

  return <div></div>;
};

export default FilmPage;
