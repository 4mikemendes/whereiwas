import React from "react";
import "./Cards.css";


export default function Cards(props) {
    return (
        <>
    <div className="card-container">
                 <img src={props.item.image} width="200px" height="250px"/>
        <div className="card">
            <div className="location">
                 <h3 className="country"><i class="fa fa-map-marker" aria-hidden="true"></i> {props.item.location}</h3>
                 <a href={props.item.googleMaps}id="google"><p> View on Google Maps</p></a>
            </div>
                
            <h1 className="title">{props.item.location}</h1>

            <div className="description">
                <p id="dates">{props.item.startDate} {props.item.endDate}</p>
                <p id="text">{props.item.description}</p>
            </div>
        
        </div>
        

    </div>
    <hr className="bottomLine"/>
    </>)
}