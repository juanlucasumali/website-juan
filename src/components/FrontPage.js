import './FrontPage.css';
import React from 'react';
import './FlagEmoji.css';
import FlagEmoji from './FlagEmoji';
import './MusicEmoji.css';
import MusicEmoji from './MusicEmoji';
import './SwimEmoji.css';
import SwimEmoji from './SwimEmoji'; 
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link} from 'react-router-hash-link';
import SchoolEmoji from './SchoolEmoji';
import './SchoolEmoji.css';
import CS from './CSEmoji';
import './CSEmoji.css';


function FrontPage(props) {
	const [text, setText] = React.useState('hi');
return (
    <BrowserRouter>
    <div className='first-box'>
    
    <div className='first-ones'>
    <div id='cloud'></div>

    <div className='title-box'>
    <h1 id='first-words'> hi, i'm juan :) </h1>
    </div>
    
    </div>

    <Link to='#about' smooth><div className='arrow-box'>
    <div className='arrow'>v<br></br>v</div>
    </div></Link>

    <div className='emojis-bro'>
    
    </div>
    <div id='about'>
    <div className='it-juan'>
        <p className='it-juan-text'>(hover over the nebulae!)</p>
    <div className='nebulae'>
    <FlagEmoji />
    <MusicEmoji />
    <SwimEmoji />
    <SchoolEmoji />
    <CS />
    </div>
    </div>
    </div>

    <div className='swim-interest emoji'></div>
    <div className='cs-interest emoji'></div>
    <div className='media-interest emoji'></div>

    </div>
    </BrowserRouter>
)
}


export default FrontPage;
