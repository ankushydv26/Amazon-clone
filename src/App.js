
import './App.css';
import Header from  "./component/Header"
import Home from  "./component/Home"
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";
import Checkout from "./component/Checkout"
import Signin from "./component/Signin"
import SignUpForm from './component/Signup';



function App() {
  return (
    <Router>
    <div className="App">
    <Header/>
      <Switch>
        <Route exact path="/">
         
         <Home/>
        </Route>
        <Route exact path="/Signin">
         
         <Signin/>
        </Route>
        <Route exact path="/Signup">
         
         <SignUpForm/>
        </Route>
        <Route  path="/checkout">
          <Checkout/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
