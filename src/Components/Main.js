import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Landingpage from './Landingpage';
import Aboutme from './Aboutme';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';

const Main = () => (
  <HashRouter>
  <Switch>
    <Route exact path="/" component={Landingpage} />
    <Route path="/Resume" component={Resume} />
    <Route path="/Aboutme" component={Aboutme} />
    <Route path="/Projects" component={Projects} />
    <Route path="/Contact" component={Contact} />
  </Switch>
  </HashRouter>
)

export default Main;
