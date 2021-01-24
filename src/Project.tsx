import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Theme from './theme/Theme';
//components
import Header from './components/header';
import Footer from './components/footer';
import ErrorBoundary from './views/error/index';
//router components
import Home from './views/home';
import TodoList from './views/react-todo-list';
import Table from './views/react-table';
import Login from './views/react-login';
import Weather from './views/react-weather';
import { ReactPortfolio } from './views/portfolio';
import { VuePortfolio } from './views/portfolio';
import { IIIPortfolio } from './views/portfolio';
import About from './views/about';
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
          <Route path="/portfolio/react" component={ReactPortfolio} />
          <Route path="/portfolio/vue" component={VuePortfolio} />
          <Route path="/portfolio/iii" component={IIIPortfolio} />
          <Route path="/about" component={About} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default Project;
