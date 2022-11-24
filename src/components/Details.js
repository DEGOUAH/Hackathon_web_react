import React, { useEffect, useState } from "react";
import FestivalData from './../festivalData.json';
import festival from './../festival.png';
import "./Festival.css";
import { Link, useParams } from 'react-router-dom'

const Details = (props) => {
    const params = useParams();
    const [detailsId, setDetailsId] = useState(params.id);
    let detailsData = FestivalData.filter((value) => {
        return value.recordid.includes(detailsId);
      });
debugger

/* useEffect(() => {  
   setDetailsId(params.id);
   detailsData = FestivalData.filter((value) => {
    return value.recordid.includes(detailsId);
  });
 },[]); */

    return (
        <div className='card' onClick={onclick}>
            <div className='card_image'>
                <img src={festival}  alt="festival image"  />
            </div>
            <div className='card_info'>
                <h2><span className="description">Nom du festival :</span>{detailsData[0].fields.nom_du_festival}</h2>
                <h2><span className="description">Anne de creation :</span>{detailsData[0].fields.annee_de_creation_du_festival}</h2>
                <h2><span className="description">Commune : </span>{detailsData[0].fields.nom_du_festival}</h2>
                <h2><span className="description">Departement ;</span>{detailsData[0].fields.departement_principal_de_deroulement}</h2>
                <h2><span className="description">Site web ; </span>{detailsData[0].fields.site_internet_du_festival}</h2>           
              {/*   <h2>{FestivalData.fields.annee_de_creation_du_festival}</h2> */}
               {/*  <h2>{name}</h2>
                <h3><span className="description">Genre : </span>{discipline}</h3>
                <h3><span className="description">Ville : </span>{commune}</h3> */}
                <div className="btnModifContainer">
                <Link className="btnModif" to={'/Accueil'}>
                    Accueil
                </Link>
                </div>
            </div>
        </div>
    );
};

export default Details;