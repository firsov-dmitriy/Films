import { Typography } from '@mui/material';
import React from 'react';
import { StyledBox, StyledGrid } from '../../common/style/style';

const NotFound = () => {
  return (
    <StyledGrid container>
      {/* <StyledBox> */}
      <Typography color={'white'} variant="h2" component={'div'}>
        404
      </Typography>
      <Typography variant="h1" component={'div'}>
        /
      </Typography>
      <Typography variant="h2" component={'div'}>
        Page Not Found
      </Typography>
      {/* </StyledBox> */}
    </StyledGrid>
  );
};

export default NotFound;
