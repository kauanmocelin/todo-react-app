import React from 'react';
import TodoBuilder from './components/TodoBuilder/TodoBuilder';
import GlobalStyle from './styles/global'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
