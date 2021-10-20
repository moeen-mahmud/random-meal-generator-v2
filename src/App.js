import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Categories from "./components/Categories/Categories";
import FoodDetails from "./components/FoodDetails/FoodDetails";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Restaurant from "./components/Restaurant/Restaurant";
import Suggestion from "./components/Suggestion/Suggestion";

function App() {
  return (
    <div className="app-main">
      <Helmet>
        <title>FooodZa!</title>
      </Helmet>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/restaurant">
            <Restaurant></Restaurant>
          </Route>
          <Route path="/food/:foodID">
            <FoodDetails></FoodDetails>
          </Route>
          <Route path="/categories/:foodCategory">
            <Categories></Categories>
          </Route>
          <Route path="/suggestion">
            <Suggestion></Suggestion>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
