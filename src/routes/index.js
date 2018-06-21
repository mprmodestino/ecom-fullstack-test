import React from "react";
import { Router, Route, hashHistory } from "react-router";
import { Provider } from "react-redux";
import configureStore from "../store/configureStore";
import HomePageContainer from "../views/containers/HomePageContainer";
const store = configureStore();

const HomePage = () => {
  return (
    <div>
      <main>Listing page</main>
      <HomePageContainer store={store} />
    </div>
  );
};

export default (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={HomePage} />
    </Router>
  </Provider>
);
