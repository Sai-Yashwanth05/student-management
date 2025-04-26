import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/students" component={StudentList} />
        <Route exact path="/add" component={AddStudent} />
        <Route exact path="/edit/:id" component={EditStudent} />
      </Switch>
    </Router>
  );
}

export default App;
