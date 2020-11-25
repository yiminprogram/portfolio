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
import ReactPortfolio from './pages/portfolio-react/index';
import VuePortfolio from './pages/portfolio-vue/index';
import IIIPortfolio from './pages/portfolio-iii/index';

const Project = () => {
  return (
    <ThemeProvider theme={Theme}>
      <ErrorBoundary>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/react-todolist" component={TodoList} />
          <Route path="/react-login" component={Login} />
          <Route path="/react-table" component={Table} />
          <Route path="/portfolio-react" component={ReactPortfolio} />
          <Route path="/portfolio-vue" component={VuePortfolio} />
          <Route path="/portfolio-iii" component={IIIPortfolio} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default Project;
