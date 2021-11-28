import React from 'react';
import { BrowserRouter as ReactRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AppProvider from './hooks';
import AppRoutes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <ReactRouter>
      <AppProvider>
        <AppRoutes />
      </AppProvider>

      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </ReactRouter>
  );
};

export default App;
