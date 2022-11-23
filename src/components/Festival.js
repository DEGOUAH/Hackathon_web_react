import React from "react";
import festival from './../festival.png';
import "./Festival.css";

const Festival = ({ name, discipline, commune  }) => {
    return (
        <div className='card'>
            <div className='card_image'>
                <img src={festival}  alt="festival image"  />
            </div>
            <div className='card_info'>
                <h2>{name}</h2>
                <h3>{discipline}</h3>
                <h3>{commune}</h3>
                {/* <h2>{title}</h2> */}
            </div>
        </div>
    );
};

export default Festival;