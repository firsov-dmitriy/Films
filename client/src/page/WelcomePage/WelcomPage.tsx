import { Typography, Zoom } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledBox, StyledGrid, StyledTitle } from './style';

const WelcomPage = () => {
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <StyledGrid container>
        <StyledBox onMouseMove={() => setIsShow(true)} onMouseLeave={() => setIsShow(false)}>
          {!isShow ? (
            <Typography variant="h2">Welcome Flybrary</Typography>
          ) : (
            <Zoom in={isShow} style={{ transitionDuration: '1000ms' }}>
              <StyledTitle variant="h2" onClick={() => navigate('/')}>
                Go To Films
              </StyledTitle>
            </Zoom>
          )}
        </StyledBox>
      </StyledGrid>
    </>
  );
};

export default WelcomPage;
