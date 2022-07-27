import { CardContent, Typography } from '@mui/material';
import React, { FC, useState } from 'react';
import { IFilm } from '../../types/IFilm';
import { StyledCard, StyledCardMedia } from './style';

interface FilmItemProps {
  film: IFilm;
}

const FilmItem: FC<FilmItemProps> = ({ film }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <StyledCard
      id={film.id.toString()}
      onMouseMove={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <StyledCardMedia
        component="img"
        height={300}
        sx={{ opacity: isShow ? 0.3 : 1 }}
        image={film.large_cover_image}
        alt={film.title}
      />
      {isShow && (
        <CardContent sx={{ position: 'absolute', top: 0, left: 0 }}>
          <Typography gutterBottom variant="h5" component="div">
            {film.title}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {film.description_full}
          </Typography> */}
        </CardContent>
      )}
    </StyledCard>
  );
};

export default FilmItem;
