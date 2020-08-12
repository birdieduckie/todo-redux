import React from 'react';

import { Control, List } from '../components';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Control />
        <List />
      </div>
    );
  }
}

export { App }