import React from 'react';
import classes from './Navigation.module.sass';
import { NavLink } from 'react-router-dom';

const links = [
  {to: '/', label: 'Main', exact: true,},
  {to: '/profile', label: 'Profile', exact: false,},
  {to: '/news', label: 'News', exact: false,}, 
];

class Navigation extends React.Component {
  
  
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}                   
          >
            {link.label}
          </NavLink>
        </li>
      )
    })
  }
  
  render() {
    return (
      <header className={classes.Navigation}>
        <nav>
          <ul>
            {this.renderLinks()}
          </ul>
        </nav>        
      </header>      
    )
  }
  
}

export default Navigation
