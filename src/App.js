import React, { Component, Suspense } from 'react';
import { Link, Route } from 'react-router-dom';

import Users from './containers/Users';

const Pizza = React.lazy(() => {
  return import('./containers/Pizza.js');
});

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Users</Link>
          <Link to="/pizza">Pizza</Link>
        </div>
        <div>
          <Route path="/" exact component={Users} />
          <Route path="/pizza" render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <Pizza />
            </Suspense>
          )} />
        </div>
      </div>
    );
  }
}

export default App;