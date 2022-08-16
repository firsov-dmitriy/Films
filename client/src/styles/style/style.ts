import styled from '@emotion/styled';
import { Box, Grid, Paper } from '@mui/material';

export const StyledGrid = styled(Grid)({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(292deg, rgba(103,83,92,1) 33%, rgba(175,142,142,1) 93%)',
});
export const StyledBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: 24,
  borderRadius: 24,
  backgroundColor: 'white',
  boxShadow: '5px -3px 15px 5px rgba(0,0,0,0.48)',
});

export const BgPaper = styled(Paper)({ backgroundColor: '#f1e8e6', margin: '0 20px 20px 20px' });
