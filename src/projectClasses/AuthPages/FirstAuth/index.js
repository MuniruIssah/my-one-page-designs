import React from "react";
import {
  faFacebookF,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "./styles.scss";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import SignIn from "./pages/SignIn/signIn";
import SignUp from "./pages/SignUp/signUp";
import BackToHome from "./components/BackToHome/backToHome";
//Brands

const brands = [
  { icon: faFacebookF, color: "#4267B2" },
  { icon: faTwitter, color: "#1DA1F2" },
  { icon: faGithub },
];

const FirstAuth = () => {
  const { path } = useRouteMatch();
  return (
    <div className="firstAuth">
      <BackToHome/>
      <Switch>
        <Route exact path={path}>
          <SignIn brands={brands} />
        </Route>
        <Route path={`${path}/signUp`}>
          <SignUp brands={brands} />
        </Route>
      </Switch>
    </div>
  );
};

export default FirstAuth;
