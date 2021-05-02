import React from "react";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./views/Home/Home";
import Services from "./views/Services/Services";
import Portfolio from "./views/Portfolio/Portfolio";
import Contact from "./views/Contact/Contact";
import NotFound from "./views/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MobileFooter from "./components/Mobile/MobileFooter/MobileFooter";

function App() {
  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      // the "I am a keyboard user" key
      document.body.classList.add("user-is-tabbing");
      window.removeEventListener("keydown", handleFirstTab);
    }
  }

  window.addEventListener("keydown", handleFirstTab);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });
  return (
    <Router>
      <div>
        <Navbar />
        <main className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact-us" component={Contact} />
            <Route path="*" component={NotFound} />            
          </Switch>
        </main>
        {isTabletOrMobile ? <MobileFooter /> : <Footer />}
      </div>
    </Router>
  );
}

export default App;
