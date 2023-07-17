import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../Slices/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);

  const handleLogoutClick = () => {
    setAge(0);
    setPassword("");
    setUsername("");
    dispatch(logout());
  };

  return (
    <div>
      <label> username: </label>
      <input
        type="text"
        placeholder="name"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <label> password: </label>
      <input
        type="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <label> age: </label>
      <input
        type="number"
        value={age}
        onChange={(event) => {
          setAge(event.target.value);
        }}
      />

      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(
            login({
              Username: username,
              Password: password,
              Age: age,
            })
          );
        }}
      >
        {" "}
        Login{" "}
      </button>
      <button className="btn btn-dark" onClick={handleLogoutClick}>
        {" "}
        Logout{" "}
      </button>
    </div>
  );
};

export default Login;
