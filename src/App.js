import React from 'react';
import './App.css';

import Header from './component/Header'
import SearchContainer from './container/SearchContainer'

function App() {         
  return (
    <div className="App">
        <Header />
        <SearchContainer/>
        <div className="push"></div>
    </div>
  );
}

export default App;
