import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  OutlinedInput,
} from '@mui/material';
import React, { useState } from 'react';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
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

  const handleChange = (event: SelectChangeEvent) => {
    setSelectGenre(event.target.value as string);
  };
  return (
    <Box p={5} m={2}>
      <FormControl variant={'standard'}>
        <InputLabel id="demo-simple-select-label">Genre </InputLabel>
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
    </Box>
  );
};

export default Filter;
