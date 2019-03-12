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
      },
      password: {
        value: '12345',
        type: 'password',
        autocomplete: 'current-password',
        label: 'Password',        
      },
    },
    login: 'admin',
    password: '12345',
    isFormValid: false,
    errorMessage: 'Имя пользователя или пароль введены не верно',
  }

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Login, please</h1>
          <form className={classes.AuthForm}>
            <Input
              value={this.state.formControls.login.value}
            ></Input>
            <Button>
              Login
            </Button>
          </form>
        </div>
      </div>
    )
  }
}