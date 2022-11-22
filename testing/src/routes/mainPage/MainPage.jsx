import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { host: "" };
  }
  componentDidMount() {
    setTimeout(() => {
      this._getHost();
    }, 3000);
  }
  _getHost = async () => {
    const res = await axios.get("/api/host");
    this.setState({ host: res.data.host });
  };

  mainFunc() {
    const title = (
      <h3>
        Welcome to <u> {this.state.host}</u> React
      </h3>
    );
    return <>{title}</>;
  }

  render() {
    return <>{this.mainFunc()}</>;
  }
}

export default MainPage;
