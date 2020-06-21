import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SearchContainer from './containers/searchContainer';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/search" component={SearchContainer} />
        <Route path="/">
          <Redirect to="/search" />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
