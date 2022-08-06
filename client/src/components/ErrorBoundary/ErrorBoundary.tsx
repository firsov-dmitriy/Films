import { Alert } from '@mui/material';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { StyledGrid, StyledBox } from '../../styles/style/style';
import { StyledBtn } from '../GenreList/style';

interface Props {
  children?: ReactNode;
  navigate: NavigateFunction;
}

interface State {
  hasError: boolean;
}
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  public state: State = {
    hasError: false,
  };
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }
  public render() {
    if (this.state.hasError) {
      return (
        <StyledGrid container>
          <StyledBox>
            <Alert severity="error">Sorry.. there was an error</Alert>
            <StyledBtn color="inherit" variant="outlined" onClick={() => this.props.navigate(-1)}>
              Go Back
            </StyledBtn>
          </StyledBox>
        </StyledGrid>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
