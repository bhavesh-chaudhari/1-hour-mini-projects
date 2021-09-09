import React, { useState, useEffect } from "react";
import "./App.css"
import "./components/Pages/Page.css"
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import PreLoader from "./components/PreLoader/PreLoader" 
import HomePage from "./components/Pages/HomePage";
import AboutPage from "./components/Pages/AboutPage";
import ContactPage from "./components/Pages/ContactPage";
import ErrorPage from "./components/Pages/ErrorPage"

const App = () => {

  const [loading, setLoading] = useState(false);

   useEffect(() => {
     setLoading(true);
     setTimeout(() => setLoading(false), 4500);
   }, []);

   
  return (
    <div className="App">
      {loading ? (
        <div className="preloader-container">
          <PreLoader></PreLoader>
        </div>
      ) : (
        <Router>
          <div className="app-conatiner">
            <Navbar />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
              <Route path="/contact">
                <ContactPage />
              </Route>
              <Route path="*">
                <ErrorPage />
              </Route>
            </Switch>
          </div>
        </Router>
      )}
    </div>
  );
};

export default App;