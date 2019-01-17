import React, { Component } from 'react';
import TreeComponent from './components/TreeComponent';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={TreeComponent}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
