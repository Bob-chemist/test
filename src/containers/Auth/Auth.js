import React, { Component } from 'react';
import classes from './Auth.module.sass';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';


export default class Auth extends Component {

  state = {
    formControls: {
      login: {
        value: '',
        type: 'email',
        autocomplete: 'username',
        label: 'Login',
        errorMessage: 'Имя пользователя или пароль введены не верно',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true,
        }
      },
      password: {
        value: '',
        type: 'password',
        autocomplete: 'current-password',
        label: 'Password',
        errorMessage: 'Имя пользователя или пароль введены не верно',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6,
        }
      },
    },
    isFormValid: false,
  }

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Login, please</h1>
          <form className={classes.AuthForm}>
            <Input></Input>
            <Button>
              Login
            </Button>
          </form>
        </div>
      </div>
    )
  }
}