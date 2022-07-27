import { Grid, IconButton, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';
import ListFilms from '../ListFilms/ListFilms';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Filter from './Filter';

const FilmBox = () => {
  const [searchValue, setValue] = useState<string>();
  const [isShow, setIsShow] = useState(false);
  const handleChange = (eve: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    eve.preventDefault();
    setValue(eve.target.value);
  };
  const handleClick = (eve: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    eve.preventDefault();
    setIsShow((prev) => !prev);
  };
  return (
    <Paper>
      <Grid container display={'flex'} justifyContent={'center'} mt={25}>
        <TextField
          id="standard-basic"
          value={searchValue}
          label="Search"
          variant="standard"
          onChange={handleChange}
        />
        <IconButton onClick={handleClick}>
          {!isShow ? <ArrowDropDownIcon fontSize="large" /> : <ArrowDropUpIcon fontSize="large" />}
        </IconButton>
      </Grid>
      {isShow && <Filter />}
      <ListFilms limit={50} genre={'animation'} />
    </Paper>
  );
};

export default FilmBox;
