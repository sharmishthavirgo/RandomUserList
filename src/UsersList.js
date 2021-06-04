import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getUsers } from "./users.api";
import BasicTable from "./BasicTable";
import Spinner from "./Spinner";

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null
    };
  }

  componentDidMount() {
    this.getUsersList();
  }

  getUsersList() {
    getUsers().then((res) => this.setState({ users: res.data.results }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to UsersList</h1>
        </header>
        {this.state.users ? (
          <BasicTable users={this.state.users} />
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}

export default UsersList;
