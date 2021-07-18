import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import FirstAuth from './projectClasses/AuthPages/FirstAuth';
function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path='/firstAuth' component={FirstAuth} />
          </Switch>
        </Router>

    </div>
  );
}

export default App;
