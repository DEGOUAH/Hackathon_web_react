import React, { useRef, useState } from 'react'
  


export default function Nouveau (){

  const baseURL = "https://reqres.in/api/posts";

  const post_event = useRef(null);
  const post_periode = useRef(null);
  const post_site = useRef(null);
  const post_adresse = useRef(null);
  const post_email = useRef(null);
  const post_discipline = useRef(null);

  const [postResult, setPostResult] = useState(null);

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  }
  
  async function postData() {
    const postData = {
      event: post_event.current.value,
      periode: post_periode.current.value,
      site: post_site.current.value,
      adresse: post_adresse.current.value,
      email: post_email.current.value,
      discipline: post_discipline.current.value,
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
          <label>Nom de l'evenement</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nom de l'evenement"
            ref={post_event}
          />
        </div>
        <div className="mb-3">
          <label>Periode principal de déroulement</label>
          <input
            type="text"
            className="form-control"
            placeholder="Periode principal"
            ref={post_periode}
          />
          </div> 
          <div className="mb-3">
          <label>Site internet de l'evenement</label>
          <input
            type="text"
            className="form-control"
            placeholder="Site internet de l'evenement"
            ref={post_site}
          />
        </div>
        <div className="mb-3">
          <label>Adresse</label>
          <input
            type="text"
            className="form-control"
            placeholder="Adresse"
            ref={post_adresse}
          />
           </div>
        <div className="mb-3">
          <label>Adresse e-mail</label>
          <input
            type="email"
            className="form-control"
            placeholder="Adresse e-mail"
            ref={post_email}
          />
        </div>
        <div className="mb-3">
          <label>Discipline dominante</label>
          <input
            type="text"
            className="form-control"
            placeholder="Discipline dominante"
            ref={post_discipline}
          />
        </div>

          <div className="d-grid">
          <button className="btn btn-sm btn-primary" onClick={postData}>Ajouter l'evenement</button>
          </div>
          { postResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{postResult}</pre></div> }
        </div>
      </div>

    );
}