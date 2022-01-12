import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages";
import Menu from "./pages/menu";
import About from "./pages/about";
import Contact from "./pages/contact";
import NoPage from "./pages/nopage";
import DropDown from "./components/DropDown";
import Login from "./components/Login";
import Register from "./components/Register";
import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialsList from "./components/TutorialsList";



function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <Router>
        <NavBar toggle={toggle} />
        <DropDown isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/nopage" component={NoPage} />
          <Route exact path="/tour-list" component={TutorialsList} />
          <Route exact path="/add/tour" component={AddTutorial} />
          <Route path="/tutorials/:id" component={Tutorial} />
           <Route path="/tutorials/:id" component={Tutorial} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
