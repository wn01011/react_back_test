import React, { Component } from "react";
import "./App.css";
import MainPage from "./routes/mainPage/MainPage";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <MainPage></MainPage>
      </div>
    );
  }
}

export default App;
