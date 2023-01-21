import React, { Component } from 'react'
import Logo from './Logo'

export default class NavBar extends Component {
  render() {
    return (
      <div className='navbar'>
        <Logo/>
        <ul className='menu'>
            <li><a href="/orangepill">HOME</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/">PILLS</a></li>
        </ul>
      </div>
    )
  }
}
