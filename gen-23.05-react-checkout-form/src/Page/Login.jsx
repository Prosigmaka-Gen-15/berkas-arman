import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const setInputValue = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:3000/login", formData)
      .then((res) => {
        const { accessToken, user } = res.data;
        dispatch(setToken(accessToken));
        dispatch(setUser(user));
        navigate("/");
      })
      .catch((err) => {
        alert("terjadi kesalahan");
        console.log(err);
        console.log(err.ressponse);
      });
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-blue-300 items-center justify-center">
      <div>
        <h1>Login</h1>
      </div>
      <form onSubmit={handleLogin}>
        <div>
          Email: <br />
          <input type="email" name="email" value={formData.email} onChange={setInputValue} class="border" />
        </div>
        <div>
          Pasword: <br />
          <input type="password" name="password" value={formData.password} onChange={setInputValue} class="border " />
        </div>
        <button className="bg-green-400 rounded-lg p-2">Login</button>
      </form>
    </div>
  );
};

export default Login;
