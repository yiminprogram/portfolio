import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Theme from './theme/Theme';
import Header from './containers/Header/Index';
import Home from './pages/Home/Index';
import TodoList from './pages/Todo_List/Index';
import Footer from './containers/Footer/Index';

const Project = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/todolist"
          component={TodoList}
        />
      </Switch>

      <Footer />
    </ThemeProvider>
  );
};

export default Project;
