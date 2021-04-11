import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./components/login_page";
import EmployeeDashboard from "./employeeDashboard";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/home">
          <LoginPage />
        </Route>
        <Route exact path="/EmployeeList">
          <EmployeeDashboard />
        </Route>
      </Switch>
    </Router>
  </Provider>,

  document.getElementById("root")
);
