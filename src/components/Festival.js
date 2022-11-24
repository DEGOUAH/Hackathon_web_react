import React from "react";
import festival from './../festival.png';
import "./Festival.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const Festival = ({ name, discipline, commune, id  }) => {
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
                <div className="btnModifContainer">
                <Link className="btnModif" to={'/modification'}>
                    Modifier
                </Link>
                <Link className="btnModif" to={'/details/'+ id}>
                    Details
                </Link>
                </div>
            </div>
        </div>
    );
};

export default Festival;