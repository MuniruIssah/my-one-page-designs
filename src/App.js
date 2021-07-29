import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstAuth from "./projectClasses/AuthPages/FirstAuth";
import Decork from "./projectClasses/LandingPages/Decork";
import GoogleVaultHelp from "./projectClasses/GooglePagesClones/GoogleVaultClone/pages/GoogleVaultHelp";
import BHNetwork from "./projectClasses/LandingPages/BHNetwork";
import Animepahe from "./projectClasses/WebsiteClones/Animepahe";
import TWorkDashboard from "./projectClasses/Dashboards/Twork";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/firstAuth" component={FirstAuth} />
          <Route path="/decork" component={Decork} />
          <Route path="/twork" component={TWorkDashboard} />
          <Route path="/animepahe" component={Animepahe} />
          <Route path="/gclones" component={GoogleVaultHelp} />
          <Route path="/" component={BHNetwork} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
