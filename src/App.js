import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./component/Checkout";
import Signin from "./component/Signin";
import SignUpForm from "./component/Signup";

import { AuthProvider } from "./component/logContext.js";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Header />
              <Home />
            </Route>
            <Route exact path="/Signin">
              <Signin />
            </Route>
            <Route exact path="/Signup">
              <SignUpForm />
            </Route>
            <Route path="/checkout">
            <Header />
              <Checkout />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
