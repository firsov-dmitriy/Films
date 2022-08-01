import React, { FC, memo } from 'react';
import { useGetListFilmQuery } from '../../service/filmService';
import FilmItem from '../FilmItem/FilmItem';
import { StyledGrid, StyledSkeleton } from './style';

interface ListFilmsProps {
  minimum_rating?: number;
  genre?: string;
  limit?: number;
}

const ListFilms: FC<ListFilmsProps> = memo(({ minimum_rating, genre, limit }) => {
  const { data, isLoading } = useGetListFilmQuery({ minimum_rating, genre, limit });

  if (isLoading) {
    const arrSkeleton = Array(limit).fill(0);
    return (
      <StyledGrid container>
        {arrSkeleton.map((_, index) => (
          <StyledSkeleton key={index} variant="rectangular" />
        ))}
      </StyledGrid>
    );
  }
  return (
    <StyledGrid container>
      {data?.data.movies.map((film) => (
        <FilmItem key={film.id} film={film} />
      ))}
    </StyledGrid>
  );
});

export default ListFilms;
