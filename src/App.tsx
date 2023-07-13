import React from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './components/Home';
import { GlobalStyle } from './utils/globalStyles';
import { lightTheme } from './utils/theme';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
