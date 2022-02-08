import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";

import SplashPage from "./splash/splash";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import FooterContainer from './footer/footer_container'
import '../app.scss'
import HomeCalendar from "./calendar/calendar"

const App = () => (
  <main>
    <NavBarContainer />
    <Switch>
      <Route path="/calendar" component={HomeCalendar} />
      <AuthRoute exact path="/" component={SplashPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
    <FooterContainer />
  </main>
);

export default App;
