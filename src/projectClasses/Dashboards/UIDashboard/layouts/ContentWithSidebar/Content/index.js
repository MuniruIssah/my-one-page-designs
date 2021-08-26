import React from "react";
import "./styles.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useRouteMatch,
} from "react-router-dom";
const Content = ({ contentPages }) => {
  const { path } = useRouteMatch();
  return (
    <main className="uiDashboardContentArea">
      <Router>
        <Switch>
          {contentPages.map((item) => (
            <Route path={item.path}>
              {typeof item.component !== "string" ? (
                <item.component {...item} />
              ) : (
                item.component
              )}
            </Route>
          ))}
          <Route exact path={path}>
            <Redirect to={`${path}/home`} />
          </Route>
        </Switch>
      </Router>
    </main>
  );
};

export default Content;
