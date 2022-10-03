import './FlagEmoji.css';
import React, { useState } from 'react';


function FlagEmoji(props) {
    const [isShown, setIsShown] = useState(false);
    const [isNotShown, setIsNotShown] = useState(true);
  
    return (
      <div className="flag-show">
        <div id='flag-cloud'></div>
        <div className='flag-emoji'
          onMouseEnter={() => {setIsShown(true); setIsNotShown(false)}}
          onMouseLeave={() => {setIsShown(false); setIsNotShown(true)}}>
          🇵🇭
        </div>
        {isShown && (
          <p className='flag-text'>
            i was born in Makati City, <br></br> situated in Manila, the Philippines. <br></br>mabuhay! :D 
          </p>
        )}
        {isNotShown && (
            <p className='flag-text-after'>
            i was born in Makati City, <br></br> situated in Manila, the Philippines. <br></br>mabuhay! :D 
          </p>
        )}
      </div>
    );
  }

export default FlagEmoji;