import { Paper } from '@mui/material';
import React from 'react';
import { useGetListFilmQuery } from '../../service/filmService';

const MainPage = () => {
  const { data, isLoading } = useGetListFilmQuery({ page: 2 });
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Paper>{data && data.data.movies.map((film) => <div key={film.id}>{film.title}</div>)}</Paper>
  );
};

export default MainPage;
