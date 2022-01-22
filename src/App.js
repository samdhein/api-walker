import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HeaderForm from './components/HeaderForm';
import { useParams } from 'react-router-dom';
import Person from './views/Person';
import Planet from './views/Planet';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='container mt-5'>
        <HeaderForm />
      </div>
      <Switch>
        <Route path="/person/:id">
          <Person />
        </Route>
        <Route path="/planet/:id">
          <Planet />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
