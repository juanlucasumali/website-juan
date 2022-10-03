import './SchoolEmoji.css';
import React, { useState } from 'react';


function SchoolEmoji(props) {
    const [isShown, setIsShown] = useState(false);
    const [isNotShown, setIsNotShown] = useState(true);
  
    return (
      <div className="school-show">
        <div id='school-cloud'></div>
        <div className='school-emoji'
          onMouseEnter={() => {setIsShown(true); setIsNotShown(false)}}
          onMouseLeave={() => {setIsShown(false); setIsNotShown(true)}}>
          🐻
        </div>
        {isShown && (
          <p className='school-text'>
            i'm a UC Berkeley student <br></br> double majoring in cs and music. <br></br> FIAT LUX!
          </p>
        )}
        {isNotShown && (
            <p className='school-text-after'>
            i'm a UC Berkeley student <br></br> double majoring in cs and music. <br></br> FIAT LUX!
          </p>
        )}
      </div>
    );
  }

export default SchoolEmoji;