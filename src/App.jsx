import app from "./firebase";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Work from "./pages/workPage/Work";
import Login from "./pages/loginPage/Login";
import Register from "./pages/registerPage/Register";
import { AuthProvider } from "./auth";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Work} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
