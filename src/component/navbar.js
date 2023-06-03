import React from 'react';
import '../css/navbar.css';
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <nav className='nav-row'>
            <div className='row justify-content-center'>
                <div className='col-sm-3 nav-option'>
                    <NavLink to="/users" activeclassname="active">
                        <div className='nav-link-box'>
                            Users
                        </div>
                    </NavLink>
                </div>
                <div className='col-sm-3 nav-option'>
                    <NavLink to="/add-user" activeclassname="active">
                        <div className='nav-link-box'>
                            Add User
                        </div>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;