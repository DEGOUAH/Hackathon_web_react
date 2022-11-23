import React from "react";
import festival from './../festival.png';
import "./Festival.css";

const Festival = ({ name, discipline, commune  }) => {
    const onclick = () => {

    }
    return (
        <div className='card' onClick={onclick}>
            <div className='card_image'>
                <img src={festival}  alt="festival image"  />
            </div>
            <div className='card_info'>
                <h2>{name}</h2>
                <h3><span className="description">Genre : </span>{discipline}</h3>
                <h3><span className="description">Ville : </span>{commune}</h3>
                {/* <h2>{title}</h2> */}
            </div>
        </div>
    );
};

export default Festival;