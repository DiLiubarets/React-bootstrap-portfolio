import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/home";
import AboutMe from "../components/aboutme";
import Resume from "../components/resume";
import Contact from "../components/contact";
import Projects from "../components/projects";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
);
export default Main;
