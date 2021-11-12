/* src/App.js */
import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import Header from './layouts/Main/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}
export default App;