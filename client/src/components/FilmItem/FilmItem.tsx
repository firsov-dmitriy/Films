import { Typography, CardMedia } from '@mui/material';
import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router';
import { IFilm } from '../../types/IFilm';
import { StyledCard, StyledCardContent } from './style';

interface FilmItemProps {
  film: IFilm;
}

const FilmItem: FC<FilmItemProps> = ({ film }) => {
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    try {
      navigate('film/' + event.target.parentElement.id);
    } catch (error) {
      throw new Error(error);
    }
  };
  const [isShow, setIsShow] = useState(false);
  return (
    <StyledCard
      id={film.id.toString()}
      onMouseMove={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <CardMedia
        component="img"
        height={250}
        sx={{ opacity: isShow ? 0.3 : 1 }}
        image={film.large_cover_image}
        alt={film.title}
      />
      {isShow && (
        <StyledCardContent id={film.id.toString()}>
          <Typography gutterBottom variant="h5" component="div" onClick={handleClick}>
            {film.title}
          </Typography>
        </StyledCardContent>
      )}
    </StyledCard>
  );
};

export default FilmItem;
