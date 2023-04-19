import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';

const App = () => {
  console.log('app');
  return (
    <div>
      <Switch>
        {routes.map((route, index) => (
          <Route exact={route.exact} path={route.path} component={route.component} key={index} />
        ))}
        <Route>
          <div>Did not match any route for provided path.</div>
        </Route>
      </Switch>
    </div>
  )
}

export default App;

