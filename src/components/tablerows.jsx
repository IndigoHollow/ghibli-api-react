import React, { Component } from "react";

export default class TableRows extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    const url = "https://ghibliapi.herokuapp.com/films/";

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({ data: result });
      });
  }

  render() {
    return (
      <tbody>
        <tr>
          <td>id</td>
          <td>title</td>
          <td>director</td>
          <td>producer</td>
        </tr>
        {this.state.data.map((value, key) => (
          <tr>
            <td>{key + 1}</td>
            <td>{value.title}</td>
            <td>{value.director}</td>
            <td>{value.producer}</td>
          </tr>
        ))}
      </tbody>
    );
  }
}
