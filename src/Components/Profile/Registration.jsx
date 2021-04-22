import React, { useState } from "react";
import { regUser } from "../../Redux/registration/action";

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
const initState = {
  name: "",
  email: "",
  password: "",
  username: "",
  mobile: "",
  description: "",
};
const Registration = () => {
  const [data, setData] = useState(initState);
  const { name, email, password, username, mobile, description } = data;
  const dispatch = useDispatch();

  const { isLoading, isError } = useSelector((state) => state.registration);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      data.name !== "" &&
      data.email !== "" &&
      data.password !== "" &&
      data.username !== "" &&
      data.mobile !== "" &&
      data.description !== ""
    ) {
      const payload = {
        name: data.name,
        email: data.email,
        password: data.password,
        username: data.username,
        mobile: data.mobile,
        description: data.description,
      };

      dispatch(regUser(payload)).then((res) => {
        if (!res) {
          alert("Registration Success");
        } else if (res) {
          alert("Registration failed, user already exists");
        }
      });
    } else {
      alert("Check once something went wrong");
    }
  };
  return (
    <>
      <FORM_DIV>
        <img src="cnn_logo.png" alt="logo" />
        <h2>Create your CNN account</h2>
        <h5>
          Already have an account?
          <Link to="/login">Log In</Link>
        </h5>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name:
            <input
              placeholder="name"
              onChange={handleChange}
              name="name"
              value={name}
              type="text"
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              placeholder="register@gmail.com"
              onChange={handleChange}
              name="email"
              value={email}
              type="text"
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              placeholder="password"
              onChange={handleChange}
              name="password"
              value={password}
              type="text"
            />
          </label>
          <label htmlFor="username">
            Username:
            <input
              placeholder="username"
              onChange={handleChange}
              name="username"
              value={username}
              type="text"
            />
          </label>
          <label htmlFor="mobile">
            Mobile:
            <input
              placeholder="eg. +91 7599xxxx76"
              onChange={handleChange}
              name="mobile"
              value={mobile}
              type="text"
            />
          </label>
          <label htmlFor="description">
            Description:
            <input
              placeholder="Description"
              onChange={handleChange}
              name="description"
              value={description}
              type="text"
            />
          </label>

          <input type="submit" id="button" value="Create account" />
        </form>
      </FORM_DIV>
    </>
  );
};

export { Registration };

const FORM_DIV = styled.div`
  width: 40%;
  margin: 100px auto;
  padding: 10px;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  color: #000;
  a {
    color: #000;
  }

  form {
    border: 1px solid #ccc;
    width: 80%;
    border-radius: 5px;
    margin: 10px auto;
    display: flex;
    padding: 10px;
    align-items: center;
    flex-direction: column;
    background-color: #ffffff;

    label {
      display: flex;
      justify-content: space-between;
      text-align: start;
      margin: 10px;
      width: 95%;
      font-size: 18px;
      input {
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        width: 70%;
        height: 40px;
      }
      input::placeholder {
        font-size: 16px;
      }
    }
    #button {
      border: 1px solid #000;
      display: flex;
      margin-left: 180px;
      justify-content: center;
      align-items: flex-end;
      width: 68%;
      font-size: 18px;
      color: #fff;
      background-color: #282c34;

      height: 40px;
      @media (min-width: 320px) {
        margin-left: 90px;
        width: 60%;
      }
      @media (min-width: 1224px) {
        margin-left: 140px;
        width: 68%;
      }
    }
    #button:hover {
      cursor: pointer;
    }
  }
`;
