import './SwimEmoji.css';
import React, { useState } from 'react';


function SwimEmoji(props) {
    const [isShown, setIsShown] = useState(false);
    const [isNotShown, setIsNotShown] = useState(true);
  
    return (
      <div className="swim-show">
        <div id='swim-cloud'></div>
        <div className='swim-emoji'
          onMouseEnter={() => {setIsShown(true); setIsNotShown(false)}}
          onMouseLeave={() => {setIsShown(false); setIsNotShown(true)}}>
          🏊‍♂️
        </div>
        {isShown && (
          <p className='swim-text'>
            i'm most at home in h2o! <br></br> i've competed internationally <br></br> and my strokes are fly and back.
          </p>
        )}
        {isNotShown && (
            <p className='swim-text-after'>
            i'm most at home in h2o! <br></br> i've competed internationally <br></br> and my strokes are fly and back.
          </p>
        )}
      </div>
    );
  }

export default SwimEmoji;