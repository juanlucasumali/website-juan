import './NavBar.css';
import React from 'react';


function NavBar(props) {
return (
    <div className='everything-bro'>
    <nav className="navbar">
        <a class="site-icon" href='/'> </a>
        <ul>
            <li>
            <a class="navbar-item" href='/about'> about </a>
            </li>
            <li>
            <a class="navbar-item" href='/projects'> projects </a>
            </li>
            <li>
            <a class="navbar-item" href='/experiences'> experiences </a>
            </li>
            <li>
            <a class="navbar-item" href='/contact'> contact </a>
            </li>
        </ul>
    </nav>
    
    </div>
)
}


export default NavBar;