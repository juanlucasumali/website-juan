import React from "react";

export default function SpecificLogo(props){
    return(
        <a href={props.link} target="_blank" rel="noopener noreferrer"><img className={props.className} src={props.src} alt="contact logo"/></a>
    )
}