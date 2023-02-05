import React, { Component } from 'react'
import { SignUpForm } from '../../constants.js';

export default class Register extends Component {
  render() {
    return (
        <>        
            <h1>Register</h1>
            <SignUpForm/>
        </>    
    )
  }
}
