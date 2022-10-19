import styled from '@emotion/styled';
import { Box, Grid, Stack } from '@mui/material';

export const ContainerFilmPage = styled(Grid)({
  height: 'calc(100vh )',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const ImageFilmPage = styled.img({
  borderRadius: 10,
  //   height: '33%',
  width: '300px',
  margin: '10px 0 10px 0 ',
});

export const BoxFilmPage = styled(Box)({
  width: '50%',
});

export const MenuFilmPage = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
});
