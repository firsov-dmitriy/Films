import React from 'react';
import { useGetListFilmQuery, useGetOneFilmQuery } from '../../service/filmService';
import { FilmResponse } from '../../types/IFilm';
import { endpointsFilm } from '../../utils/contcts';

const getRandomId = (data: FilmResponse | undefined) => {
  const maxId = data ? data?.data.movie_count : '1';
  return 43112;
};

const RandomFilm = () => {
  const { data } = useGetListFilmQuery({});
  const { data: film, error } = useGetOneFilmQuery({ movieId: Math.floor(Math.random() * 43112) });
  return <div>{}</div>;
};

export default RandomFilm;
