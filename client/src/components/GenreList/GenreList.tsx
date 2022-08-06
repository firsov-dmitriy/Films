import { Grid } from '@mui/material';
import React, { FC, MouseEventHandler, useState } from 'react';
import { BgPaper } from '../../common/style/style';
import { StyledPaper } from '../FilmBox/style';
import ListFilms from '../ListFilms/ListFilms';
import { StyledBtn } from './style';

interface GenreListProps {
  genres: string[];
}

const GenreList: FC<GenreListProps> = ({ genres }) => {
  const [genre, setGenre] = useState<string>();
  const handleClick = (event: React.MouseEventHandler<HTMLButtonElement>) => {
    setGenre(event.target.id);
  };

  return (
    <>
      <BgPaper>
        <Grid container justifyContent={'center'}>
          {genres.map((genre, index) => (
            <StyledBtn onClick={handleClick} id={genre} variant="contained" key={index}>
              {genre}
            </StyledBtn>
          ))}
        </Grid>
      </BgPaper>
      <ListFilms genre={genre} limit={20} minimum_rating={8} />
    </>
  );
};

export default GenreList;
