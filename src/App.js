import Navbar from './Components/Navbar'
import FRegistration from './Pages/Farmer/FRegistration'
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from "./Pages/About";
import Signin from "./Pages/Signin";
import Footer from './Pages/Foot';
import React from "react"

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={FRegistration} />
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
