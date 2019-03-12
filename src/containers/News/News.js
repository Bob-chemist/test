import React from 'react'
import classes from './News.module.sass'

const News = props => {
  return (
    <div className={classes.News}>
      News page
      {props.children}
    </div>
  )
}

export default News
