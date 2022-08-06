import { Card, CardContent } from '@mui/material';
import styled from '@emotion/styled';

export const StyledCard = styled(Card)({
  position: 'relative',
  margin: '10px 2px',
  boxShadow: '5px -3px 15px 5px rgba(0,0,0,0.2)',
  ':hover': {
    cursor: 'pointer',
    boxShadow: '5px -3px 15px 5px rgba(0,0,0,0.6)',
  },
}) as typeof Card;
export const StyledCardContent = styled(CardContent)({
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  textAlign: 'center',
  display: 'flex',
});
