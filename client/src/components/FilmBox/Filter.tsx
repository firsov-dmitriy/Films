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
  const [selectGenre, setSelectGenre] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectGenre>) => {
    const {
      target: { value },
    } = event;
    setSelectGenre(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  return (
    <Box p={5}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Genre </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectGenre}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {genres.map((genre, index) => (
            <MenuItem key={index} value={genre}>
              <Checkbox checked={selectGenre.indexOf(genre) > -1} />
              <ListItemText primary={genre} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filter;
