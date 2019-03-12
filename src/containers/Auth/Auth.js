import React, { Component } from 'react';
import classes from './Auth.module.sass';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';


export default class Auth extends Component {

  state = {
    formControls: {
      login: {
        value: '',
        type: 'text',
        autocomplete: 'username',
        label: 'Login',
      },
      password: {
        value: '',
        type: 'password',
        autocomplete: 'current-password',
        label: 'Password',        
      },
    },
    login: 'Admin',
    password: '12345',
    loggedIn: false,
    errorMessage: 'Имя пользователя или пароль введены не верно',
  }

  onChangeHandler(event, controlName) {
    const formControls = {...this.state.formControls};
    const control = {...formControls[controlName]};

    control.value = event.target.value;   

    formControls[controlName] = control;
    
    this.setState({
      formControls,    
    });
  }
  
  submitHandler = event => {
    event.preventDefault()
  }

  loginHandler = async () => {
    const authData = {
      login: this.state.formControls.login.value,
      password: this.state.formControls.password.value,
    }  
    
    if (authData.login === this.state.login && authData.password === this.state.password) {
      await this.setState({
        loggedIn: true,
      });
    }
  }

  renderInput() {
    return Object.keys(this.state.formControls).map((control, index) => {
      const field = this.state.formControls[control];
      return (
        <Input
          key={index}
          value={field.value}
          type={field.type}
          autocomplete={field.autocomplete}
          label={field.label}
          onChange={event => this.onChangeHandler(event, control)}
        />
      )
    })
  }

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Login, please</h1>
          <form onSubmit={this.submitHandler} className={classes.AuthForm}>
            {this.renderInput()}
            <Button
              onClick={this.loginHandler}
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    )
  }
}