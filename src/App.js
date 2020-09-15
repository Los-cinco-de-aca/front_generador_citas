import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import UserComponent from './components/UserComponent';
import CrearUsuarioComponent from "./components/CrearUsuarioComponent";
import ActualizarUsuarioComponent from "./components/ActualizarUsuarioComponent";
import SpecialtyComponent from "./components/SpecialtyComponent";
import CrearSpeciality from "./components/CrearSpeciality";
import ActualizarSpeciality from "./components/ActualizarSpeciality";

function App() {
  return (
    <div>
        <Router>
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={UserComponent}></Route>
                        <Route path="/usuarios" component={UserComponent}></Route>
                        <Route path="/crear-usuario" component={CrearUsuarioComponent}></Route>
                        <Route path="/actualizar-usuario/:id" component={ActualizarUsuarioComponent}></Route>
                        <Route path="/especialidades" component={SpecialtyComponent}></Route>
                        <Route path="/crear-especialidad" component={CrearSpeciality}></Route>
                        <Route path="/actualizar-especialidad/:id" component={ActualizarSpeciality}></Route>
                    </Switch>
                </div>
        </Router>
    </div>
  );
}

export default App;
