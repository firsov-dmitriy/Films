import { Button, FormControl, Grid, IconButton, Paper, TextField } from '@mui/material';
import React, { useRef, useState } from 'react';
import ListFilms from '../ListFilms/ListFilms';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Filter from './Filter';
import { StyledForm, StyledPaper } from './style';
import { useGetListFilmQuery } from '../../service/filmService';

const FilmBox = () => {
  const [searchValue, setValue] = useState<string>();
  const [isShow, setIsShow] = useState(false);
  const { data, isLoading } = useGetListFilmQuery({ searchValue });
  const searchRef = useRef<HTMLInputElement>();

  const handleClick = (eve: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    eve.preventDefault();
    setIsShow((prev) => !prev);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValue(searchRef.current?.value);
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
      {isShow && <Filter />}
      <ListFilms limit={50} searchValue={searchValue} />
    </StyledPaper>
  );
};

export default FilmBox;
