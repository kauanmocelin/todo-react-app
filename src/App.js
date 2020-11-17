import React from 'react';
import TodoBuilder from './containers/TodoBuilder/TodoBuilder';
import GlobalStyle from './styles/global'

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoBuilder />
    </>
  );
}

export default App;
