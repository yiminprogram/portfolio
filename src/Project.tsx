import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Theme from './theme/Theme';
//components
import Header from './components/header';
import Footer from './components/footer';
import ErrorBoundary from './views/error/index';
//router components
import Home from './views/home/Index';
import TodoList from './views/react-todo-list';
import Table from './views/react-table/Index';
import Login from './views/react-login/Index';
import Weather from './views/react-weather/Index';
import Portfolio from './views/portfolio-list/Index';
import ErrorPage from './views/error/Error';

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
