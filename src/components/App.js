import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from 'components/pages/Home';
import Login from 'components/pages/Login';
import LightTheme from 'themes/light';
import DarkTheme from 'themes/dark';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${p => p.theme.bodyBackgroundColor};
    color:  ${p => p.theme.bodyFontColor};
    min-height: 100vh;
    margin: 0;
    font-family: 'Heebo', sans-serif;
  }
`;

function App() {
  const [theme, setTheme] = useState(LightTheme);
  
  return (
    <ThemeProvider theme={{...theme, setTheme: () => {
      setTheme(s => s.id === 'light' ? DarkTheme : LightTheme);
    }}}>
    <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
