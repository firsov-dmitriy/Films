import { Card, CardMedia } from '@mui/material';
import styled from '@emotion/styled';
import { rootShouldForwardProp } from '@mui/material/styles/styled';
interface CardMediaProp {
  isShow: boolean;
}

export const StyledCard = styled(Card)({
  position: 'relative',
  margin: 3,
  ':hover': {
    cursor: 'pointer',
  },
}) as typeof Card;
export const StyledCardMedia = styled(CardMedia)(() => ({})) as typeof CardMedia;
