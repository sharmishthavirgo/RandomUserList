import React from "react";
import { Route, Switch } from "react-router-dom";
import UsersList from "./UsersList";
import User from "./User";

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={UsersList} />
        <Route path="/user/:id" exact component={User} />
      </Switch>
    </div>
  );
}
