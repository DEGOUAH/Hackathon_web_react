import React, { useState }  from 'react'
import PropTypes from 'prop-types';

async function SignUpUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function SignUp({setToken}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [prenom, setPrenom] = useState();
  const [nom, setNom] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await SignUpUser({
      email,
      password,
      prenom,
      nom
    });
    setToken(token);
  }
    return (
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>Prénom</label>
          <input
            type="text"
            className="form-control"
            placeholder="Prénom"
            onChange={e => setPrenom(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Nom</label>
          <input type="text" className="form-control" placeholder="Nom" 
          onChange={e => setNom(e.target.value)}/>
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Entrer un email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Mot de passe</label>
          <input
            type="password"
            className="form-control"
            placeholder="Entrer un mot de passe"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Se connecter
          </button>
        </div>
        <p className="forgot-password text-right">
          Deja inscrit ? <a href="/sign-in">login?</a>
        </p>
      </form>
    )
}
SignUp.propTypes = {
  setToken: PropTypes.func.isRequired
};