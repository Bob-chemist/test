import React, { Component } from 'react';
import classes from './News.module.sass';
import Content from '../../components/Content/Content';
import {connect} from 'react-redux';

class News extends Component {
  
  renderContent() {
    return this.props.news.map((article, index) => {      
      return (
        <Content 
          key={index}
          title={article.title}
          text={article.text}
        />
      )
    })
  }
  
  render() {
    return (
      <div className={classes.News}>
        <h1>News</h1>
        {this.renderContent()}
      </div>
    )
  }
}


function mapStateToProps(state) {  
  return {
    news: state.news.news
  }
}

export default connect(mapStateToProps)(News);