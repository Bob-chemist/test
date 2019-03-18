import React from 'react';
import classes from './Content.module.sass';

const Content = props => {
  return (
    <div className={classes.Content}>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
};

export default Content;
