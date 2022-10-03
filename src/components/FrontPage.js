import './FrontPage.css';
import React from 'react';
import './FlagEmoji.css';
import FlagEmoji from './FlagEmoji';
import './MusicEmoji.css';
import MusicEmoji from './MusicEmoji';
import './SwimEmoji.css';
import SwimEmoji from './SwimEmoji';

function FrontPage(props) {
	const [text, setText] = React.useState('hi');
return (
    <div className='first-box'>
    
    <div className='first-ones'>
    <div id='cloud'></div>

    <div className='title-box'>
    <h1 id='first-words'> hi, i'm juan :) </h1>
    </div>
    
    </div>

    <div className='emojis-bro'>
    <p className='about'>about</p>
    <FlagEmoji />
    <MusicEmoji />
    <SwimEmoji />
    </div>

    <div className='swim-interest emoji'></div>
    <div className='cs-interest emoji'></div>
    <div className='media-interest emoji'></div>

    <div className='arrow-box'>
    <div className='arrow'>v<br></br>v</div>
    </div>

    </div>
)
}


export default FrontPage;
