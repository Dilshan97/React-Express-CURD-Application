import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Index from './components/index';
import Create from './components/create';
import Edit from './components/edit';

function App() {
  
  return (
      <Router>
          <div className="container">
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to={'/'} className="navbar-brand">React</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">

                    <li className="nav-item active">
                      <Link to={'/'} className="nav-link">Home <span className="sr-only">(current)</span></Link>
                    </li>

                    <li className="nav-item">
                      <Link to={'/index'} className="nav-link">Index</Link>
                    </li>

                    <li className="nav-item">
                      <Link to={'/create'} className="nav-link">Create</Link>
                    </li>

                  </ul>
                </div>
              </nav> 

              <Switch>
                  <Route exact path='/create' component={Create}/>
                  <Route path='/edit/:id' component={Edit}/>
                  <Route path='/index' component={Index}/>
              </Switch>   
          </div>
        </Router>

        
  );
}

export default App;
