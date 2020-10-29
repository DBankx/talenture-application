import React from 'react';
import HomePage from './components/home/HomePage';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/footer/Footer';
import SearchPage from './components/main/SearchPage';
import Job from './components/main/Job';
import NotFound from './components/common/NotFound';

function App() {
  return (
    <div className='container'>
      <div className='wrapper'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route
            exact
            path='/search/:description?/:location?'
            component={SearchPage}
          />
          <Route exact path='/job/:id' component={Job} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
