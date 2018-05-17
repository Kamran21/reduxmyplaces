import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <nav className="nav">
                <li>
                    <NavLink to='/' activeClassName="nav__link--active" className='nav__link' exact>Locations</NavLink>
                </li>
                <li>
                    <NavLink to='/cat' activeClassName="nav__link--active" className='nav__link'>Categories</NavLink>
                </li>
            </nav>
        );
    }
}
 
export default Nav;