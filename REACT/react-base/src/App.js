import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    </>
  );
}

export default App;
