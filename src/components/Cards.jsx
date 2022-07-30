import React from "react"

export default function Card(props){
    return(
        <>
        <div className="main">
            <div className="left">
            <img src={props.img}/>
            </div>
            <div className="right">
            <span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Google_Maps_pin.svg/585px-Google_Maps_pin.svg.png"/>{props.location}         </span>
            <span><a href ={props.googleMapsUrl}>View Location</a></span>
            <h2>{props.title}</h2>
            <span>{props.startDate} - {props.endDate}</span>
            <p>{props.description}</p>
            
            </div>
            
        </div>
        <hr ></hr>
        </>
    )
}