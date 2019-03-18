import React, { Component } from 'react';
import classes from './Profile.module.sass';

export default class Profile extends Component {
  render() {
    return (
      <div className={classes.Profile}>
        <h1>Profile page</h1>
        Username: Admin <br />
        Password: 12345
      </div>
    );
  }
}
