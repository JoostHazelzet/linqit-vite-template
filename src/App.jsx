import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Container, Typography, Stack
} from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Container maxWidth="xl" fixed={false}>
      <Stack spacing={2}>
        <Typography variant="h3" marginTop={3} marginBottom={3} align='center'>
          [Application title]
        </Typography>
        
      </Stack>
    </Container>
  </ThemeProvider>
  );
}
export default App;
