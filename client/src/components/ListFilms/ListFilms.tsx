import { Typography } from '@mui/material';
import React, { FC, memo } from 'react';
import { BgPaper } from '../../styles/style/style';
import { useGetListFilmQuery } from '../../service/filmService';
import FilmItem from '../FilmItem/FilmItem';
import { StyledGrid, StyledSkeleton } from './style';

interface ListFilmsProps {
  minimum_rating?: number;
  genre?: string;
  limit?: number;
  searchValue?: string;
}

const ListFilms: FC<ListFilmsProps> = memo(({ minimum_rating, genre, limit, searchValue }) => {
  const { data, isLoading } = useGetListFilmQuery({ minimum_rating, genre, limit, searchValue });

  if (isLoading) {
    const arrSkeleton = Array(limit).fill(0);
    return (
      <BgPaper>
        <StyledGrid container>
          {arrSkeleton.map((_, index) => (
            <StyledSkeleton key={index} variant="rectangular" />
          ))}
        </StyledGrid>
      </BgPaper>
    );
  }
  if (!data?.data.movies) {
    return (
      <StyledGrid container height={'50vh'} alignItems={'center'}>
        <Typography sx={{ color: 'grey' }} variant={'h2'}>
          Nothing found!
        </Typography>
      </StyledGrid>
    );
  }

  return (
    <BgPaper>
      <StyledGrid container>
        {data?.data.movies &&
          data?.data.movies.map((film) => <FilmItem key={film.id} film={film} />)}
      </StyledGrid>
    </BgPaper>
  );
});

export default ListFilms;
