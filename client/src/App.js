import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./views/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main className="App">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
