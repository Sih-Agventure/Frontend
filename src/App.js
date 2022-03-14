import React from "react"
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from "./Pages/About";
import Signin from "./Pages/Signin";
import Footer from './Components/Footer';
import Navbar from './Components/Navbar'
import FRegistration from './Pages/Farmer/FRegistration'
import Rent from "./Pages/Farmer/Rent";
import Buy from "./Pages/Farmer/Buy";
import View from "./Pages/Farmer/View";


function App() {
  return (
      <Router>
      <Navbar/>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/signin" exact component={Signin} />
      <Route path="/signup" exact component={FRegistration} />
      <Route path="/rent" exact component={Rent} />
      <Route path="/buy" exact component={Buy} />
      <Route path="/equipview" exact component={View} />
      <Footer/>
      </Router>
  );
}

export default App;
