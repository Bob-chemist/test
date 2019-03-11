import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import News from './components/News/News';
import Auth from './containers/Auth/Auth';
import Main from './containers/Main/Main';
import Profile from './containers/Profile/Profile'


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path={'/login'} component={Auth}/>
        <Route path={'/news'} component={News}/>
        <Route path={'/profile'} component={Profile}/>
        <Route path={'/'} component={Main}/>
      </Switch>
    );
  }
}

export default App;
