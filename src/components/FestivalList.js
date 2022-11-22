import React from "react";
import Festival from "./Festival";
import "./FestivalList.css";

const FestivalList = ({ festivalsData }) => {
    return (
        <div className='festival_list'>
            
            {
            festivalsData.map((festival) => {
                debugger
               for (let i = 0; i < festivalsData.length; i++) {
                console.log(festivalsData.title + "hello" + festivalsData.length )
              }
                return (
                    <Festival
                        // key={festival.datasetid}
                        discipline={festival.fields.discipline_dominante}
                        name={festival.fields.nom_du_festival}
                        commune={festival.fields.commune_principale_de_deroulement}
                        /* title= {festival.Title} */
                    />
                );
            })}
        </div>
    );
};

export default FestivalList;