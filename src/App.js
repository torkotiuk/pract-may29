import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import AppBar from './Components/AppBar';
import Container from './Components/share/Container';

const HomePage = lazy(() =>
  import('./pages/HomePage.jsx' /* webpackChunkName: "home-page" */),
);
const UserPage = lazy(() =>
  import('./pages/User.jsx' /* webpackChunkName: "user-page" */),
);
const UsersList = lazy(() =>
  import('./pages/UsersListPage.jsx' /* webpackChunkName: "usersList-page" */),
);

const App = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />;
          <Route path={routes.user} component={UserPage} />;
          <Route path={routes.usersList} component={UsersList} />;
        </Switch>
      </Suspense>
    </Container>
  );
};

export default App;
