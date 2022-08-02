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

const Filter = () => {
  const [selectGenre, setSelectGenre] = useState<string>();
  const [minRating, setMinRating] = useState<number | number[]>();
  const handleChange = (event: SelectChangeEvent) => {
    event.preventDefault();
    setSelectGenre(event.target.value);
  };
  const handleChangeRating = (event: Event, newValue: number | number[]) => {
    setMinRating(newValue);
  };
  return (
    <Grid display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
      <FormControl variant={'standard'} sx={{ width: '10%' }}>
        <InputLabel id="demo-simple-select-label">Genre</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          placeholder="Genre"
          value={selectGenre}
          onChange={handleChange}
        >
          {genres.map((genre, index) => (
            <MenuItem key={index} value={genre}>
              {genre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box sx={{ width: '10%' }}>
        <Typography>Rating</Typography>
        <Slider
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={9}
          onChange={handleChangeRating}
        />
      </Box>

      <Button variant={'contained'}>Sort</Button>
    </Grid>
  );
};

export default Filter;
