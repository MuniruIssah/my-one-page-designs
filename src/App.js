import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import FirstAuth from './projectClasses/AuthPages/FirstAuth';
import Decork from './projectClasses/LandingPages/Decork'
import GoogleVaultHelp from './projectClasses/GooglePagesClones/GoogleVaultClone/pages/GoogleVaultHelp';
function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path='/firstAuth' component={FirstAuth} />
            <Route path='/decork' component={Decork} />
            <Route path="/gclones" component={GoogleVaultHelp}/>

          </Switch>
        </Router>

    </div>
  );
}

export default App;
