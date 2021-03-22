import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <main className="App">
        <Switch>
          
        </Switch>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
