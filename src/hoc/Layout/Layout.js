import React, { Component } from 'react';
import classes from './Layout.module.sass';
import Navigation from '../../components/Navigation/Navigation';

export default class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <Navigation />

        <main>{this.props.children}</main>
      </div>
    );
  }
}
