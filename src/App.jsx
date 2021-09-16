import app from "./firebase";
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Work from "./pages/workPage/Work";
import Login from "./pages/loginPage/Login";
import Register from "./pages/registerPage/Register";
import { AuthProvider } from "./auth";
import PrivateRoute from "./PrivateRoute";
import Edit from "./pages/editPage/Edit";

function App() {
  return (
    <div className="container">
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Work} />
            <PrivateRoute exact path="/edit" component={Edit} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
