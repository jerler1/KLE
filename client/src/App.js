import React from "react";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./views/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MobileFooter from "./components/Mobile/MobileFooter/MobileFooter";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });
  return (
    <Router>
      <div>
        <Navbar />
        <main className="App">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
        {isTabletOrMobile ? <MobileFooter /> : <Footer />}
      </div>
    </Router>
  );
}

export default App;
