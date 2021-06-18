import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className="nav">
            <img 
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" 
                alt="Netflix Logo"
            />

            <img
            className="nav__avatar"
            src="https://i.stack.imgur.com/34AD2.jpg"
            alt="Profile Pic"
            />
        </div>
    )
}

export default Navbar
