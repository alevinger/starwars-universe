import React, { Component } from 'react';
import StarWarsUniverse from './containers/StarWarsUniverse/StarWarsUniverse';
import { BrowserRouter } from 'react-router-dom';
import classes from './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className={classes.App}>
              <StarWarsUniverse/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
