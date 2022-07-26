import { Paper } from '@mui/material';
import React from 'react';
import WebTorrent, { Torrent } from 'webtorrent';
import { useGetListFilmQuery } from '../../service/filmService';

const MainPage = () => {
  const { data, isLoading } = useGetListFilmQuery({ page: 2 });
  console.log(data);
  const showFilm = () => {
    // const client = new WebTorrent();
    const torrentId =
      'magnet:?xt=urn:btih:6RIOZT5RWQJLRA3FEKRXKH2RWPLK7AY3&dn=The%20Reef%20Stalked%20(2022)%20%5B1080p%5D%20%5BWEBRip%5D%20%5B5.1%5D%20%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce';
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Paper>{data && data.data.movies.map((film) => <div key={film.id}>{film.title}</div>)}</Paper>
  );
};

export default MainPage;
