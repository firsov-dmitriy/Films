import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Slider,
  Typography,
} from '@mui/material';
import React, { FC, useState } from 'react';
import { StyledForm, StyledFormControl } from './style';

const genres: string[] = [
  'comedy',
  'romance',
  'drama',
  'animation',
  'comedy-romance',
  'sci-fi',
  'action',
  'mystery',
  'adventure',
  'action-comedy',
  'horror',
  'thriller',
  'crime',
  'fantasy',
  'superhero',
];

interface FilterProps {
  getValueSort: (rating: number | number[], genre: string) => void;
}

const Filter: FC<FilterProps> = ({ getValueSort }) => {
  const [selectGenre, setSelectGenre] = useState<string>();
  const [minRating, setMinRating] = useState<number | number[]>();
  const handleChange = (event: SelectChangeEvent) => {
    event.preventDefault();
    setSelectGenre(event.target.value);
  };
  const handleChangeRating = (event: Event, newValue: number | number[]) => {
    event.preventDefault();
    setMinRating(newValue);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    minRating && selectGenre && getValueSort(minRating, selectGenre);
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Grid container justifyContent={'space-around'} alignItems={'center'}>
        <StyledFormControl>
          <InputLabel id="demo-simple-select-label">Genre</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            placeholder="Genre"
            label="Genre"
            value={selectGenre}
            onChange={handleChange}
          >
            {genres.map((genre, index) => (
              <MenuItem key={index} value={genre}>
                {genre}
              </MenuItem>
            ))}
          </Select>
        </StyledFormControl>

        <Box sx={{ width: '20%' }}>
          <Typography>Rating</Typography>
          <Slider
            valueLabelDisplay="auto"
            value={minRating}
            defaultValue={0}
            step={1}
            marks
            min={0}
            max={9}
            onChange={handleChangeRating}
          />
        </Box>

        <Button type="submit" variant={'contained'}>
          Sort
        </Button>
      </Grid>
    </StyledForm>
  );
};

export default Filter;
