import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { DICT } from "../consts/consts";

const Register = () => {
  const {REGISTER, LOGIN, HAVE_ACCOUNT_MESSAGE} = DICT;
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  
  const [err, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", inputs);
      console.log(res)
      navigate("/login");
    } catch (err) {
      //@ts-ignore
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>{REGISTER}</h1>
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
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>{REGISTER}</button>
        {err && <p>{err}</p>}
        <span>
          {HAVE_ACCOUNT_MESSAGE} <Link to="/login">{LOGIN}</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;