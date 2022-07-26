import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';

export const StyledGrid = styled(Grid)({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
export const StyledBox = styled.div({
  display: 'flex',
  alignItems: 'center',
  transitionDuration: '3s',
  height: '30vh',
});

export const StyledTitle = styled(Typography)({
  ':hover': {
    cursor: 'pointer',
  },
});
