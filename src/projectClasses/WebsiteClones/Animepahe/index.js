import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AnimepaheHomePage from "./pages/AnimepaheHome";
import AnimepaheWebPlayerView from "./pages/AnimepaheWebPlayerView";

const Animepahe = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/theatre`}>
        <AnimepaheWebPlayerView />
      </Route>
      <Route exact path={path}>
        <AnimepaheHomePage />
      </Route>
    </Switch>
  );
};

export default Animepahe;
