import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Client from './client/Client';
import Admin from './admin/Admin';
 


function App() {
  return (
   <Router>
      <Switch>
          <Route path='/Admin' component={Admin} />
          <Route path='/' component={Client} />    
      </Switch>
    </Router>
  );
}

export default App;
