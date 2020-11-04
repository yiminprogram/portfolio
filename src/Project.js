import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Theme from './theme/Theme';
//components
import Header from './containers/Header/Index';
//router components
import Home from './pages/Home/Index';
import TodoList from './pages/Todo_List/Index';
import Table from './pages/Table/Index';
import Login from './pages/Login/Index';
import Footer from './containers/Footer/Index';

const Project = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <Switch>
        <Route exact path="/portfolio" component={Home} />
        <Route path="/todolist" component={TodoList} />
        <Route path="/login" component={Login} />
        <Route path="/table" component={Table} />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
};

export default Project;
