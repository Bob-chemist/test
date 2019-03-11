import React from 'react'
import classes from './Button.module.sass'

const Button = props => {
  return (
    <button
      className={classes.Button}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button
