import './CSEmoji.css';
import React, { useState } from 'react';


function CSEmoji(props) {
    const [isShown, setIsShown] = useState(false);
    const [isNotShown, setIsNotShown] = useState(true);
  
    return (
      <div className="cs-show">
        <div id='cs-cloud'></div>
        <div className='cs-emoji'
          onMouseEnter={() => {setIsShown(true); setIsNotShown(false)}}
          onMouseLeave={() => {setIsShown(false); setIsNotShown(true)}}>
          💻
        </div>
        {isShown && (
          <p className='cs-text'>
            i build software <br></br> that empowers users <br></br> to inspire and aspire. 
          </p>
        )}
        {isNotShown && (
            <p className='cs-text-after'>
            i build software <br></br> that empowers users <br></br> to inspire and aspire. 
          </p>
        )}
      </div>
    );
  }

export default CSEmoji;