import './MusicEmoji.css';
import React, { useState } from 'react';


function MusicEmoji(props) {
    const [isShown, setIsShown] = useState(false);
    const [isNotShown, setIsNotShown] = useState(true);
  
    return (
      <div className="music-show">
        <div id='music-cloud'></div>
        <div className='music-emoji'
          onMouseEnter={() => {setIsShown(true); setIsNotShown(false)}}
          onMouseLeave={() => {setIsShown(false); setIsNotShown(true)}}>
          🎧
        </div>
        {isShown && (
          <p className='music-text'>
            i like to write songs! <br></br> i play five instruments <br></br> but my fav is the euphonium. :)
          </p>
        )}
        {isNotShown && (
            <p className='music-text-after'>
            i like to write songs! <br></br> i play five instruments <br></br> but my fav is the euphonium. :)
          </p>
        )}
      </div>
    );
  }

export default MusicEmoji;