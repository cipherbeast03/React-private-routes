import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// Public route component
const PublicRoute = ({ component: Component, restricted, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      restricted ? (
        <Redirect to="/dashboard" /> // Redirect to the dashboard if user is logged in
      ) : (
        <Component {...props} />
      )
    }
  />
);

// Private route component
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" /> // Redirect to the login page if user is not logged in
      )
    }
  />
);

// In your App component
const App = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute
          restricted={false}
          component={PublicComponent}
          path="/"
          exact
        />
        <PublicRoute restricted={true} component={Login} path="/login" exact />
        <PrivateRoute component={Dashboard} path="/dashboard" exact />
        <PrivateRoute component={PrivateComponent} path="/private" exact />
      </Switch>
    </Router>
  );
};
