import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Theme from './theme/Theme';
//components
import Header from './containers/header/Index';
import Footer from './containers/footer/Index';
//router components
import Home from './pages/home/Index';
import TodoList from './pages/react-todo-list/Index';
import Table from './pages/react-table/Index';
import Login from './pages/react-login/Index';
import ProjectPage from './pages/project/Index';

const Project = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/react-todolist" component={TodoList} />
        <Route path="/react-login" component={Login} />
        <Route path="/react-table" component={Table} />
        <Route path="/project/:project" component={ProjectPage} />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
};

export default Project;
