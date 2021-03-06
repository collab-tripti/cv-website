import "./App.css";
import {Router, Switch, Route} from "react-router-dom";
import FinalResume from "./Screens/FinalResume";
import Login from "./Screens/Login";
import { createBrowserHistory } from "history";
import Home from "./Screens/Home";


function App() {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/FinalResume/:phoneNumber" component={FinalResume}/>
        <Route exact path="/home" component={Home}/> 
        <Route exact path="/" component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
