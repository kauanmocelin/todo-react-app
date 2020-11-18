import React from 'react';
import TodoBuilder from './containers/TodoBuilder/TodoBuilder';
import GlobalStyle from './styles/global'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <TodoBuilder />
    </>
  );
}

export default App;
