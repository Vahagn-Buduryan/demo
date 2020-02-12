import React from 'react';
import '../styles/user_page/user.css'

function Card(props) {
    return (
            <div className={"card"}>
                <img src={props.src} alt="Avatar" style={{width:"100%"}}/>
                <div className="container">
                    <h4><b>{props.event}</b></h4> 
                    <p>{props.text}</p> 
                </div>
            </div>
    );
}

export default Card;