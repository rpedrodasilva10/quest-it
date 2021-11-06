import React from 'react';
import { BrowserRouter as ReactRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <ReactRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
      <GlobalStyle />
    </ReactRouter>
  );
};

export default App;
