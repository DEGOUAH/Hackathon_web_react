import React, { useRef, useState } from 'react'
  


export default function Modification (){
  const baseURL = "https://reqres.in/api/posts";

  const post_nbPlace = useRef(null);
  const post_billeterie = useRef(null);

  const [postResult, setPostResult] = useState(null);

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  }
  
  async function postData() {
    const postData = {
      nbPlace: post_nbPlace.current.value,
      billeterie: post_billeterie.current.value,
    };

    try {
      const res = await fetch(`${baseURL}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          //"x-access-token": "token-value",
        },
        body: JSON.stringify(postData),
      });

      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }

      const data = await res.json();

      const result = {
        status: res.status + "-" + res.statusText,
        headers: {
          "Content-Type": res.headers.get("Content-Type"),
          "Content-Length": res.headers.get("Content-Length"),
        },
        data: data,
      };

      setPostResult(fortmatResponse(result));
    } catch (err) {
      setPostResult(err.message);
    }
  }
    return (
      <div>
        <h3>Modifier l'evenement</h3>
        <div>
          <div className="mb-3">
          <label>Nombre de places prévus</label>
            <input type="number" className="form-control" ref={post_nbPlace} placeholder="Nombre de places prévues" />
          </div>
          <div className="mb-3">
          <label>Etat de la billeterie&emsp;&emsp;</label>
          <select name="billeterie" id="billeterie" ref={post_billeterie}>
            <option valeur="ferme">Fermée</option>
            <option valeur="ouvert">Ouverte</option>
            <option valeur="derniere">Dernières places</option>
            <option valeur="complet">Complet</option>
            </select >
          </div>
          <div className="d-grid">
          <button className="btn btn-sm btn-primary" onClick={postData}>Modifier l'evenement</button>
          </div>
          { postResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{postResult}</pre></div> }
        </div>
      </div>
    );
}