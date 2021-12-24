import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstAuth from "./projectClasses/AuthPages/FirstAuth";
import Decork from "./projectClasses/LandingPages/Decork";
import GoogleVaultHelp from "./projectClasses/GooglePagesClones/GoogleVaultClone/pages/GoogleVaultHelp";
import BHNetwork from "./projectClasses/LandingPages/BHNetwork";
import Animepahe from "./projectClasses/WebsiteClones/Animepahe";
import TWorkDashboard from "./projectClasses/Dashboards/Twork";
import GhulamRasoolFinanceDashboard from "./projectClasses/Dashboards/GhulamRasoolFinanceDashboard";
import ScroltDashboard from "./projectClasses/Dashboards/Scrolt";
import FreshMarket from "./projectClasses/Dashboards/FreshMarket";
import UIDashboard from "./projectClasses/Dashboards/UIDashboard";
import Momatu from "./projectClasses/LandingPages/Momatu";
import Waxot from "./projectClasses/LandingPages/Waxot";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/firstAuth" component={FirstAuth} />
          <Route path="/decork" component={Decork} />
          <Route path="/twork" component={TWorkDashboard} />
          <Route path="/scrolt" component={ScroltDashboard} />
          <Route path="/fmarket" component={FreshMarket} />
          <Route path="/uidashboard" component={UIDashboard} />
          <Route path="/ghulam" component={GhulamRasoolFinanceDashboard} />
          <Route path="/animepahe" component={Animepahe} />
          <Route path="/gclones" component={GoogleVaultHelp} />
          <Route path="/momatu" component={Momatu} />
          <Route path="/waxot" component={Waxot} />


          <Route path="/" component={BHNetwork} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
