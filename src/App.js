import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import News from './containers/News/News';
import Auth from './containers/Auth/Auth';
import Main from './containers/Main/Main';
import Profile from './containers/Profile/Profile';
import Layout from './hoc/Layout/Layout';
import { connect } from 'react-redux';
import NotFound from './containers/NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path={'/news'} component={News} />
          <Route
            path={'/login'}
            render={() =>
              !this.props.loggedIn ? <Auth /> : <Redirect to={'/profile'} />
            }
          />

          <Route
            path={'/profile'}
            render={() =>
              this.props.loggedIn ? <Profile /> : <Redirect to={'/login'} />
            }
          />
          {/* Only for deployment on Github Pages */}
          <Route path={'/test'} render={() => <Redirect to={'/'} />} />
          <Route path={'/'} exact component={Main} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.login.loggedIn,
  };
}

export default withRouter(connect(mapStateToProps)(App));
