import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/common/navBar";
import LoginForm from "./components/common/loginForm";
import Movie from "./components/movies";
import Customers from "./components/customer";
import Rental from "./components/rental";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import Register from "./components/register";
import NewMovieForm from "./components/newMovieForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/movies/new" component={MovieForm}></Route>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/movies/:id" component={MovieForm}></Route>
            <Route path="/movies" component={Movie}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rental}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Route path="/register" component={Register}></Route>
            <Redirect from="/" exact to="/movies"></Redirect>
            <Redirect to="/not-found"></Redirect>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
