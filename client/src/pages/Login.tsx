import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, AuthContextType } from "../context/authContext";
import { DICT } from "../consts/consts";

const Login = () => {
  const {LOGIN, REGISTER, NO_ACCOUNT_MESSAGE} = DICT;
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  
  const { login } = useContext(AuthContext) as AuthContextType;


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await login(inputs)
      await axios.post("/auth/login", inputs);
      navigate("/");
    } catch (err) {
      //@ts-ignore
      setError(err.response.data);
    }
  };
  return (
    <div className="auth">
      <h1>{LOGIN}</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>{LOGIN}</button>
        {err && <p>{err}</p>}
        <span>
          {NO_ACCOUNT_MESSAGE} <Link to="/register">{REGISTER}</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;