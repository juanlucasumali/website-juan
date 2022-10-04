import React from "react";

export default function ExperienceItem(props){
    return(
        // <div id="item">
        //    <div id="date">fa'22</div>
        //    <div id="role">mentored developer @ berkeley codebase</div>
        //    <hr id="line"></hr>
        // </div>
        <div id="item">
            <div id='item-box'>
            </div>
            <div id="date">{props.date}</div>
            <div id="role">{props.role}</div>
            <div id='description'>
            <div id='description_1'>{props.description_1}</div>
            <div id='description_2'>{props.description_2}</div>
            <div id='description_3'>{props.description_3}</div>
            </div>
            <hr id="line"></hr>
        </div>
    )
}