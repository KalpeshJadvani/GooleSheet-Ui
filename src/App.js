import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Feedback from './scenes/Feedback';


import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Provider store={store}>
            <Feedback />
          </Provider>
      </div>
    );
  }
}

export default App;
