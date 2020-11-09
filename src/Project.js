import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Theme from './theme/Theme';
//components
import Header from './containers/Header/Index';
import Footer from './containers/Footer/Index';
//router components
import Home from './pages/Home/Index';
import TodoList from './pages/react-todo-list/Index';
import Table from './pages/react-table/Index';
import Login from './pages/react-login/Index';
import VueShoppingCart from './pages/vue-shopping-cart/Index';
import IIIProject from './pages/iii-project/Index';

const Project = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <Switch>
        <Route exact path="/portfolio" component={Home} />
        <Route path="/react-todolist" component={TodoList} />
        <Route path="/react-login" component={Login} />
        <Route path="/react-table" component={Table} />
        <Route path="/vue-shopping-cart" component={VueShoppingCart} />
        <Route path="/iii-project" component={IIIProject} />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
};

export default Project;
