import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";

import SplashPage from "./splash/splash";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import FooterContainer from './footer/footer_container'
import HomeContainer from "./home/home_container";
import Modal from './modals/modal'
import EventShowContainer from './event/events_show_container';
import '../app.scss'

const App = () => (
  <main>
    <Modal />
    <NavBarContainer /> 
    <Switch>
      <Route exact path="/home" component={HomeContainer} />
      <Route exact path='/events/:eventId' component={EventShowContainer}/>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={SplashPage} />
    </Switch>
     <FooterContainer /> 
  </main>
);

export default App;
