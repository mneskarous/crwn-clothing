import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      email: '',
      password: ''
    });
  }

  handleChange = event => {
    event.preventDefault();
    const { value, name } = event.target;
    this.setState({
      [ name ]: value
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            value={email} 
            type="email" 
            label="email"
            handleChange={this.handleChange}
            required 
            />
          <FormInput 
            name="password" 
            value={password} 
            type="password"
            label="password"
            handleChange={this.handleChange}
            required 
            />
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    )
  }


}