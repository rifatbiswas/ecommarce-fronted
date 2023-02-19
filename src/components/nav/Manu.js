import React from 'react';
import { NavLink } from 'react-router-dom';

const Manu = () => {
    return (
        <div>
          <ul className="nav d-flex justify-content-between shadow-sm mb-2 sticky-top bg-light">

            <li className="nav-item">
                <NavLink className="nav-link" to="/">HOME</NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link" to="/login">LOGIN</NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link" to="/register">Register</NavLink>
            </li>   
          </ul>  
        </div>
    );
};

export default Manu;