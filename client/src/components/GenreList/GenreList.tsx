import { Grid } from '@mui/material';
import React, { FC } from 'react';
import { StyledPaper } from '../FilmBox/style';
import GenreCard from '../GenerCard/GenreCard';

interface GenreListProps {
  genres: string[];
}

const GenreList: FC<GenreListProps> = ({ genres }) => {
  return (
    <StyledPaper>
      <Grid container flexWrap={'nowrap'} sx={{ overflowX: 'auto' }}>
        {genres.map((genre, index) => (
          <GenreCard key={index} genre={genre} />
        ))}
      </Grid>
    </StyledPaper>
  );
};

export default GenreList;
