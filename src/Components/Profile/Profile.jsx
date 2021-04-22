import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Navbar } from "../Navbar/Navbar";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchProfileData } from "../../Redux/profile/action";
export const ProfileSideBar = () => {
  return (
    <div>
      <PROFILE__DIV>
        <IoPersonCircleOutline></IoPersonCircleOutline>
        <h4>PROFILE</h4>
      </PROFILE__DIV>
    </div>
  );
};
export const NewsLetter = () => {
  const { data } = useSelector((state) => state.profile, shallowEqual);

  const [text, setText] = useState(false);

  const handleButtonClck = () => {
    setText(!text);
    // alert("Thanks for Subscribed my News Letter");
  };
  return (
    <NEWSLETTER__DIV>
      <h1>Newsletter Subscriptions</h1>
      <p>Manage your email subscriptions to our newsletters below.</p>
      <div>
        {data?.map((item) => (
          <p> You are subscribing at {item.email}</p>
        ))}
      </div>
      <SUBSCRIBE_NEWS>
        <NEWS_DIV>
          <img
            src="https://cdn.cnn.com/cnn/2020/images/07/02/breaking-news_2.jpg"
            alt="breaking"
          />
          <HEAD>
            <h5>Breaking News</h5>
            <p>
              Be the first to know about the biggest stories as they break. Sign
              up for breaking news email alerts from CNN.
            </p>
          </HEAD>
          <button
            onClick={handleButtonClck}
            style={text ? { color: "red" } : { color: "#4866fb" }}
          >
            <AiOutlinePlusCircle></AiOutlinePlusCircle>
            {text ? "Subscribed" : "Subscribe"}
          </button>
        </NEWS_DIV>
        <NEWS_DIV>
          <img
            src="https://cdn.cnn.com/cnn/2020/images/07/02/five_things_2.jpg"
            alt="fivething"
          />
          <HEAD>
            <h5>Five Things</h5>
            <p>
              You give us five minutes, we'll give you five things you must know
              for the day.
            </p>
          </HEAD>
          <button
            onClick={handleButtonClck}
            style={text ? { color: "red" } : { color: "#4866fb" }}
          >
            <AiOutlinePlusCircle></AiOutlinePlusCircle>
            {text ? "Subscribed" : "Subscribe"}
          </button>
        </NEWS_DIV>
        <NEWS_DIV>
          <img
            src="https://cdn.cnn.com/cnn/2020/images/07/02/the-good-stuff_2.jpg"
            alt="goodstuff"
          />
          <HEAD>
            <h5>The Good Stuff</h5>
            <p>
              A weekly digest of uplifting and inspiring news from around the
              world.
            </p>
          </HEAD>
          <button
            onClick={handleButtonClck}
            style={text ? { color: "red" } : { color: "#4866fb" }}
          >
            <AiOutlinePlusCircle></AiOutlinePlusCircle>
            {text ? "Subscribed" : "Subscribe"}
          </button>
        </NEWS_DIV>
        <NEWS_DIV>
          <img
            src="https://cdn.cnn.com/cnn/2020/images/12/07/logo_keep_watching.jpg"
            alt="keep watching"
          />
          <HEAD>
            <h5>Keep Watching</h5>
            <p>
              Join Keep Watching, a members-only community from CNN Films &
              Series, for access to exclusive events, content, and more.
            </p>
          </HEAD>
          <button
            onClick={handleButtonClck}
            style={text ? { color: "red" } : { color: "#4866fb" }}
          >
            <AiOutlinePlusCircle></AiOutlinePlusCircle>
            {text ? "Subscribed" : "Subscribe"}
          </button>
        </NEWS_DIV>
        <NEWS_DIV>
          <img
            src="https://cdn.cnn.com/cnn/2020/images/07/02/health_2.jpg"
            alt="result"
          />
          <HEAD>
            <h5>The Results are In with Dr. Sanjay Gupta </h5>
            <p>
              Don't miss the latest expert advice, medical advancements and
              inspiring techniques to live a healthier, happier and longer life.
            </p>
          </HEAD>
          <button
            onClick={handleButtonClck}
            style={text ? { color: "red" } : { color: "#4866fb" }}
          >
            <AiOutlinePlusCircle></AiOutlinePlusCircle>
            {text ? "Subscribed" : "Subscribe"}
          </button>
        </NEWS_DIV>
      </SUBSCRIBE_NEWS>
    </NEWSLETTER__DIV>
  );
};

export const AccountSetting = () => {
  const handleSubmit = (e) => {
    //
    // e.preventDefault();
  };
  const { data } = useSelector((state) => state.profile, shallowEqual);

  return (
    <>
      <ACC__MAIN__DIV>
        <h1>My Account Settings</h1>
        <span>These details will only be visible to you and CNN.</span>

        <FORM__DIV>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Display Name</label>
            <input type="text" name="username" />
            <input type="submit" id="btn" value="Save Changes" />
          </form>
        </FORM__DIV>
        <HR__DIV>
          <span>&nbsp;</span>
        </HR__DIV>

        <div></div>
      </ACC__MAIN__DIV>
    </>
  );
};

const Profile = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth, shallowEqual);
  const { token, username } = useSelector((state) => state.auth, shallowEqual);
  const { data } = useSelector((state) => state.profile, shallowEqual);
  console.log(data, "userDa");
  useEffect(() => {
    dispatch(fetchProfileData({ token: token, username: username }));
  }, [dispatch]);

  return (
    <>
      <Navbar></Navbar>

      <MAIN__DIV>
        <LEFT__DIV>
          <ProfileSideBar></ProfileSideBar>
          <USER_NAME>
            <div>
              {data?.map((item) => (
                <h3> Hii {item.username}</h3>
              ))}
            </div>
          </USER_NAME>
        </LEFT__DIV>
        <RIGHT__DIV>
          <AccountSetting></AccountSetting>
          <NewsLetter></NewsLetter>
        </RIGHT__DIV>
      </MAIN__DIV>
    </>
  );
};

export { Profile };

const MAIN__DIV = styled.div`
  display: flex;
  width: 90%;
  /* height: 80vh; */
  margin: auto;
  /* padding: 10px; */
  flex-direction: row;
  justify-content: space-evenly;
  /* border: 1px solid red; */
`;

const LEFT__DIV = styled.div`
  display: flex;
  flex-direction: column;
  width: 14%;
  background-color: #e6e6e6;
  /* border: 1px solid red; */
`;
const RIGHT__DIV = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  width: 86%;
  background-color: #fff;
`;

const PROFILE__DIV = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  align-items: center;

  h4 {
    margin-left: 5px;
  }
  svg {
    font-size: 40px;
    margin-left: 20px;
  }
`;

const ACC__MAIN__DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`;

const FORM__DIV = styled.div`
  display: flex;
  flex-direction: column;
  form {
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    label {
    }

    input {
      height: 35px;
      width: 300px;
      margin-top: 10px;
      font-size: 18px;
    }

    #btn {
      width: 170px;
      margin-top: 25px;

      background-color: black;
      color: #fff;
      height: 45px;
      font-size: 20px;

      border: 1px solid #ccc;
      border-radius: 5px;
    }
    #btn:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`;

const HR__DIV = styled.div`
  border: 1px solid #ccc;
  width: 100%;
  margin: 30px auto;
  background-color: #ccc;
  height: 0px;
`;

const NEWSLETTER__DIV = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  width: 100%;

  h1 {
    font-size: 20px;
    margin: 10px 20px;
  }
  p {
    padding: 0;
    margin: 10px 20px;
  }
`;

const USER_NAME = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SUBSCRIBE_NEWS = styled.div`
  display: flex;

  flex-direction: column;
`;

const NEWS_DIV = styled.div`
  border: 1px solid #ccc;
  width: 100%;
  height: 100px;
  display: flex;
  margin: 2px auto;
  align-items: center;
  img {
    width: 200px;
    height: 100px;
  }
  button {
    display: flex;
    align-items: center;
    width: 150px;
    height: 40px;
    margin: auto;
    background: none;
    border: none;
    font-size: 20px;
    color: #4866fb;
    outline: none;
    svg {
      font-size: 24px;
    }
  }
  button:hover {
    cursor: pointer;
    color: #6b83ff;
  }
`;

const HEAD = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  h5 {
    padding: 0;
    margin: 10px;
  }
  p {
    padding: 0;
    margin: 10px;
  }
`;
