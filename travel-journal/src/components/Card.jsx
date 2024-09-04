import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.imageUrl} alt={props.title} />
            </div>
            <div className="card-content">
                <div className="card-location">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{props.location}</span>
                    <p className="gmaps">
                        <a href={props.googleMapsUrl} target="_blank">
                            View on Google Maps
                        </a>
                    </p>
                </div>
                <h1 className="card-title">{props.title}</h1>
                <p className="dates">{props.startDate} - {props.endDate}</p>
                <p className="card-description">{props.description}</p>
            </div>
        </div>
    );
}
