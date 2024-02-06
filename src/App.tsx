import React from 'react';
import { AppRoutes } from './routing/routes';
import { MainWrapper } from './wrappers/MainWrapper';
import {ThemeProvider} from "@mui/material";
import { theme } from './styles/theme';
import { SnackbarProvider } from 'notistack'
import {SnackbarCloseButton} from "./hooks/useSnakbar/useSnackbar";


function App() {
  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={5000}
                      action={(key) => <SnackbarCloseButton snackbarKey={key} />} >
        <ThemeProvider theme={theme}>
            <MainWrapper>
                <AppRoutes/>
            </MainWrapper>   
        </ThemeProvider>
    </SnackbarProvider>

  );
}

export default App;
