import { Box, Button, Grid, IconButton, TextField } from '@mui/material';
import React, { useRef, useState } from 'react';
import ListFilms from '../ListFilms/ListFilms';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Filter from './Filter';
import { StyledForm, StyledPaper } from './style';

const FilmBox = () => {
  const [searchValue, setValue] = useState<string>();
  const [isShow, setIsShow] = useState(false);
  const searchRef = useRef<HTMLInputElement>();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setIsShow((prev) => !prev);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValue(searchRef.current?.value);
  };
  const getSortValue = (rating: number | number[], genre: string) => {
    console.log(rating, genre);
  };

  return (
    <StyledPaper>
      <Grid container display={'flex'} justifyContent={'center'} mt={25}>
        <StyledForm onSubmit={handleSubmit}>
          <TextField inputRef={searchRef} id="standard-basic" label="Search" variant="standard" />
          <Button variant="contained" type="submit">
            Search
          </Button>
        </StyledForm>

        <IconButton onClick={handleClick}>
          {!isShow ? <ArrowDropDownIcon fontSize="large" /> : <ArrowDropUpIcon fontSize="large" />}
        </IconButton>
      </Grid>
      {isShow && <Filter getValueSort={getSortValue} />}
      <Box>
        <ListFilms limit={50} searchValue={searchValue} />
      </Box>
    </StyledPaper>
  );
};

export default FilmBox;
