import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class NewMovieForm extends Form {
  state = {
    data: { title: "", genre: "", numberInStock: "", rate: "" },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre").min(5),
    numberInStock: Joi.number()
      .required()
      .label("Number In Stock")
      .min(0)
      .max(100),
    rate: Joi.number().min(1).max(10).required().label("Rate"),
  };

  doSubmit = () => {
    console.log("submitted");
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("genre", "Genre")}
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default NewMovieForm;
