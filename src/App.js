import React, { Component } from 'react';
import './assets/css/index.css'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import PageRouting from './PageRouting';
import PrivateRoute from './components/PrivateRoute';
import LoginContainer from './containers/LoginContainer';


class App extends Component {
  render() {
    return (
      <Router>
          <Route path="/login" component={LoginContainer} />
          <PrivateRoute path='/pocetna' component={PageRouting} />
          <PrivateRoute path='/listaKorisnika' component={PageRouting} />
          <PrivateRoute path='/neaktivniKorisnici' component={PageRouting} />
          <PrivateRoute path='/dodajKorisnika' component={PageRouting} />
          <PrivateRoute path='/istekleLicence' component={PageRouting} />
          <PrivateRoute path='/isticuUskoro' component={PageRouting} />
      </Router>
    );
  }
}

export default App;
