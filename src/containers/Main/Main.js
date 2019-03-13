import React, { Component } from 'react';
import classes from './Main.module.sass';
import {connect} from 'react-redux'
import Content from '../../components/Content/Content';

class Main extends Component {
  render() {
    return (
      <div className={classes.Main}>
        <h1>Main Page</h1>
        <Content 
          text={this.props.main}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {  
  return {
    main: state.main.main
  }
}

export default connect(mapStateToProps)(Main);