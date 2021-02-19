
import './App.css';
import Header from  "./component/Header"
import Home from  "./component/Home"
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";
import Checkout from "./component/Checkout"


function App() {
  return (
    <Router>
    <div className="App">
    <Header/>
      <Switch>
        <Route exact path="/">
         
         <Home/>
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
