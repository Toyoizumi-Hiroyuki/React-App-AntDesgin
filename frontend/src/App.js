import React, { useCallback } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { AuthProvider } from './contexts/Auth';
import LoginPage from './pages/Login';
import DashboardPage from './pages/Dashboard';
import HomePage from './pages/Home';
import Page404 from './pages/404';
import UserPage from './pages/User';

function App() {
  const redirect = useCallback(() => {
    return <Redirect to="/home" />;
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/user" component={UserPage} />
          <Route component={Page404} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
