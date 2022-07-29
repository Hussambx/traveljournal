import React from "react"

export default function Card(props){
    return(
        <div className="main">
            <div className="left">
            <img src={props.img}/>
            </div>
            <div className="right">
            <span>{props.location}         </span>
            <span><a href ="www.google.ca">View Location</a></span>
            <h2>{props.title}</h2>
            <span>{props.startDate} - {props.endDate}</span>
            <p>{props.description}</p>
            
            </div>
            
        </div>
    )
}