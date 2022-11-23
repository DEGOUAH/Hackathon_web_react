import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './pages/login'
import SignUp from './pages/signup'
import Modification from './pages/modification'
import Nouveau from './pages/nouveau'
import Accueil from './components/Accueil';

import useToken from './useToken';


function App() {
  const { token, setToken } = useToken();
  if(!token) {
    return (
      <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              Application festival
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
                </ul>
            </div>
          </div>
        </nav>

        <div className="loginContainer">
          <div className="loginClass">
            <Routes>
              <Route exact path="/" element={<Login setToken={setToken} />} />
              <Route path="/sign-in" element={<Login setToken={setToken} />} />
              <Route path="/sign-up" element={<SignUp setToken={setToken} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    )
  }
  else{return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/Accueil'}>
              Application festival
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/modification'}>
                    Modifier un evenement
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/nouveau'}>
                    Ajouter un evenement
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/accueil'}>
                    Page d'accueil
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
          <div className='routesClass'>
            <Routes >
              <Route exact path="/" element={<Accueil />} />
              <Route path="/modification" element={<Modification />} />
              <Route path="/accueil" element={<Accueil />} />
              <Route path="/nouveau" element={<Nouveau />} />
            </Routes>
          </div>
      </div>
    </Router>
  )
}
}

export default App