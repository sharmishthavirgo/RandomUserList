import React from "react";
import "./App.css";
import Spinner from "./Spinner";

const User = (props) => {
  const user = props.location.state;
  const back = () => {
    props.history.push("/");
  };
  if (!user) return <Spinner />;
  return (
    <div className="App">
      <header className="user-header">
        <div className="back-link" onClick={back}>
          Back
        </div>
        <img src={user.picture.large} className="user_photo" alt="user-logo" />
        <h1 className="user_name">
          Hi {user.name.first} {user.name.last}
        </h1>
        <h6 className="user_name">Phone: {user.phone} </h6>
      </header>
    </div>
  );
};

export default User;
