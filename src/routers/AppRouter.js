import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { Carta } from '../components/carta/Carta';
import { Frases } from '../components/frases/Frases';
import { Nosotros } from '../components/nosotros/Nosotros';
import { ScreenMain } from '../components/PantallaPrinci/ScreenMain';
import { Navbar } from '../components/ui/NavBar';

export const AppRouter = () => {
  return (

    

    <Router>
    <div>
      <Navbar />
     
      <Switch>
        <Route  path="/nosotros" component={Nosotros} />
        <Route  path="/frases" component={Frases} />
        <Route  path="/carta" component={Carta} />
        <Route  path="/" component={ScreenMain} />
      </Switch>
    </div>
  </Router>
  );
}
