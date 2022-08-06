import { Card, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC } from 'react';

interface GenreCardProps {
  genre: string;
}

const GenreCard: FC<GenreCardProps> = ({ genre }) => {
  return (
    <Grid item>
      <Box width={'32vw'} height={150} m={1}>
        <Card
          sx={{
            height: 150,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#6b5235',
          }}
        >
          <Typography variant="h4" color={'white'}>
            {genre}
          </Typography>
        </Card>
      </Box>
    </Grid>
  );
};

export default GenreCard;
