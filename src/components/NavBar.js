import './NavBar.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link} from 'react-router-hash-link';


function NavBar(props) {
return (
    <BrowserRouter>
    <div className='everything-bro'>
    <nav className="navbar">
        <Link to='home-page' activeClass="active" onClick={()=>{window.scrollTo({top: 0,left: 0,behavior: 'smooth'});}} ><a class="site-icon"> </a></Link>
        <ul>
            <li>
            <a class="navbar-item"> <Link to='#about' smooth activeClass="active">about</Link> </a>
            </li>
            <li>
            <a class="navbar-item"> <Link to='#experiences' smooth activeClass="active">experiences</Link> </a>
            </li>
            <li>
            <a class="navbar-item"> <Link to='#projects' smooth activeClass="active">projects</Link> </a>
            </li>
            <li>
            <a class="navbar-item"> <Link to='#contact' smooth activeClass="active">contact</Link> </a>
            </li>
        </ul>
    </nav>
    
    </div>
    </BrowserRouter>
)
}


export default NavBar;