import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import styled from 'styled-components'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { loginSuccess, loginUser } from '../../Redux/auth/action'
import { Link } from 'react-router-dom'
const initState = {
  username: '',
  password: '',
}
const Login = () => {
  const [userLoginData, setUserLoginData] = useState(initState)
  const { username, password } = userLoginData
  const isAuth = useSelector((state) => state.auth.isAuth)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (userLoginData.username !== '' && userLoginData.password !== '') {
      const payload = {
        username: userLoginData.username,
        password: userLoginData.password,
      }

      dispatch(loginUser(payload)).then((res) => {
        if (!res) {
          alert('login Success')

          // dispatch(loginSuccess());
        } else if (res) {
          alert('invalid')
          console.log(res)
        }
      })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserLoginData({ ...userLoginData, [name]: value })
  }
  return !isAuth ? (
    <>
      <LOGIN_DIV_CONT>
        <div
          style={{
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            marginTop: '50px',
          }}
        >
          <IoPersonCircleSharp
            style={{
              borderRadius: '50%',
              fontSize: '100px',
              border: '2px solid #ccc',
              color: '#303030',
            }}
          ></IoPersonCircleSharp>
        </div>
        <div>
          <h1>Log In</h1>
        </div>
        <h5>
          Need A CNN account?
          <Link to='/registration'>Sign Up</Link>
        </h5>
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>
            Username:
            <input
              onChange={handleChange}
              type='text'
              value={username}
              name='username'
              placeholder='username'
            />
          </label>

          <label htmlFor='password'>
            Password:
            <input
              onChange={handleChange}
              type='password'
              name='password'
              value={password}
              placeholder='password'
            />
          </label>

          <input type='submit' id='button' value='LOGIN' />
        </form>
      </LOGIN_DIV_CONT>
    </>
  ) : (
    <Redirect to='/profile'></Redirect>
  )
}

export { Login }

const LOGIN_DIV_CONT = styled.div`
  border: 1px solid red;
  width: 50%;
  display: flex;

  background-color: #000000;
  color: #fff;

  margin: 30px auto;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  form {
    border: 1px solid red;
    width: 65%;
    border-radius: 5px;
    margin: 10px auto;
    display: flex;
    padding: 10px;
    align-items: center;
    flex-direction: column;

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
        color: #fff;

        border: 1px solid #ccc;
        background-color: #000000;
      }
      input::placeholder {
        /* text-align: center; */
        font-size: 16px;
        color: #fff;
      }
    }
    #button {
      border: 1px solid #575757;
      display: flex;
      margin-left: 230px;
      justify-content: center;
      align-items: flex-end;
      width: 68%;
      font-size: 18px;
      color: #61dafb;
      background-color: #282c34;

      height: 40px;
      @media (min-width: 320px) {
        margin-left: 90px;
        width: 60%;
      }
      @media (min-width: 1224px) {
        margin-left: 144px;
      }
    }
    #button:hover {
      cursor: pointer;
    }
  }
`
