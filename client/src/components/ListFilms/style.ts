import { Grid, Skeleton } from '@mui/material';
import styled from '@emotion/styled';

export const StyledSkeleton = styled(Skeleton)({
  margin: '10px 5px',
  borderRadius: '4px',
  height: 250,
  width: 160,
});

export const StyledGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-around',
});
