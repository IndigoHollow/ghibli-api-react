import React, { Component } from "react";
import ReactDOM from "react-dom";
import TableRows from "./components/tablerows";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <table>
        <tbody>
          <TableRows />
        </tbody>
      </table>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
