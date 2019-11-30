import React, { Component } from 'react';

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
    }, () => console.log(this.state));
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <input 
            name="email" 
            value={email} 
            type="email" 
            onChange={this.handleChange}
            required 
          />
          <label>Email</label>
          <input 
            name="password" 
            value={password} 
            type="password"
            onChange={this.handleChange}
            required 
          />
          <label>Password</label>
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    )
  }


}