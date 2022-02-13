import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import NavBarClearContainer from "./nav/nav_transparent/navbar_clear_container";

import SplashPage from "./splash/splash";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import FooterContainer from './footer/footer_container'
import FooterClearContainer from "./footer/footer-clear/footer_clear_container";
import HomeContainer from "./home/home_container";
import Modal from './modals/modal'
import EventShowContainer from './event/events_show_container';
import Developers from './developers/developers'
import '../app.scss'

const App = () => (
  <main>
    <Modal />
    <Route exact path={["/home", "/login", "/signup", "/events/:eventId", "/developers"]} component={NavBarContainer} />
    <Route exact path="/" component={NavBarClearContainer} />
    <Switch>
      <Route exact path="/home" component={HomeContainer} />
      <ProtectedRoute exact path="/events/:eventId" component={EventShowContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/developers" component={Developers} />
      <Route exact path="/" component={SplashPage} />
    </Switch>
    <Route exact path={["/home", "/login", "/signup", "/events/:eventId"]} component={FooterContainer} />
    <Route exact path="/" component={FooterClearContainer} />

  </main>
);

export default App;
