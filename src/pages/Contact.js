import React from "react";
import "/Users/juanlucasumali/Desktop/berkeley/codebase/mentoredfa22/website-juan/src/pages/Contact.css";
import linkedin from '/Users/juanlucasumali/Desktop/berkeley/codebase/mentoredfa22/website-juan/src/linkedin-icon.png';
import github from '/Users/juanlucasumali/Desktop/berkeley/codebase/mentoredfa22/website-juan/src/github-icon.png';
import mail from '/Users/juanlucasumali/Desktop/berkeley/codebase/mentoredfa22/website-juan/src/email-icon.png'
import SpecificLogo from "/Users/juanlucasumali/Desktop/berkeley/codebase/mentoredfa22/website-juan/src/components/contactLogo.js";


export default function Contact(){
    return(
        <div className="wrapper">
            <div id="contact"></div>
            <div className="contact-box">
                <div className="contactTitle">let's connect!</div>
            </div>
            <div className="logo-box">
            <SpecificLogo 
                className='logo-img linkedin'
                link="https://www.linkedin.com/in/juanlucasumali/"
                src={linkedin}
            />
            <SpecificLogo 
                className="logo-img github"
                link="https://github.com/juanlucasumali"
                src={github}
            />
            <SpecificLogo 
                className="logo-img email"
                link="mailto:juanlucasumali@berkeley.edu"
                src={mail}
            />
            </div>
        </div>
    )
}