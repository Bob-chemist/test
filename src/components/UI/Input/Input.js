import React from 'react';
import classes from './Input.module.sass'

const Input = props => {

  const inputType = props.type || 'text';
  const cls = [classes.Input];
  const htmlFor = `${inputType}-${Math.random()}`;

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input 
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
        autoComplete={props.autocomplete}
      />

      {/* {
        isInvalid(props) ? <span>{props.errorMessage || "Enter proper values"}</span>
        : null
      }       */}
    </div>
  )
}

export default Input
