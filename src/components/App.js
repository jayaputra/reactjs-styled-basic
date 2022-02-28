import {createGlobalStyle} from 'styled-components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from 'components/pages/Home';
import Login from 'components/pages/Login';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fff;
    color: #222;
    height: 100vh;
    margin: 0;
    padding-top: 80px;
    font-family: 'Heebo', sans-serif;
  }
`;

function App() {
  return (
    <>
    <GlobalStyle />
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
      </Router>
      

    </>
  );
}

export default App;
