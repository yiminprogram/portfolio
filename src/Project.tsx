import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Theme from './theme/Theme';
//components
import Header from './containers/header/Index';
import Footer from './containers/footer/Index';
import ErrorBoundary from './pages/error/index';
//router components
import Home from './pages/home/Index';
import TodoList from './pages/react-todo-list/Index';
import Table from './pages/react-table/Index';
import Login from './pages/react-login/Index';
import Weather from './pages/react-weather/Index';
import Portfolio from './pages/portfolio-list/Index';
import ErrorPage from './pages/error/Error';

const Project = () => {
  return (
    <ThemeProvider theme={Theme}>
      <ErrorBoundary>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio/react/react-todolist" component={TodoList} />
          <Route path="/portfolio/react/react-login" component={Login} />
          <Route path="/portfolio/react/react-table" component={Table} />
          <Route path="/portfolio/react/react-weather" component={Weather} />
          <Route path="/portfolio/:id" component={Portfolio} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default Project;