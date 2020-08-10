import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './component/Header';
import HomePage from './page/HomePage';
import Portfolio from './page/Portfolio';
import About from './page/About';
import Footer from './component/Footer';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default App;
