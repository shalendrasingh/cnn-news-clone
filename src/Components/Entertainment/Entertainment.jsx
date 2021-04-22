import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { Footer } from "../Footer/Footer";

import CircularProgress from "@material-ui/core/CircularProgress";
import {
  getentertainmentAxios,
  delete_entertainmentAxios,
} from "../../Redux/Entertainment/action";
import { AddEntertainment } from "./AddEnternainment";
import { useHistory } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

const Entertainment = () => {
  const dispatch = useDispatch();

  var username = useSelector((state) => state.profile.data[0].username);

  // eslint-disable-next-line eqeqeq
  const isAdmin = username == "admin";
  // const isAdmin = false;

//   const isAdmin = username == "admin";
 


  const { entertainmentNews, isLoading } = useSelector(
    (state) => state.entertainment
  );

  const history = useHistory();
  const goToLink = (data) => {
    history.push(`/entertainment/${data}`);
  };
  const edit = (id) => {
    history.push(`/edit/${id}`);
  };
  const deleting = (id) => {
    dispatch(delete_entertainmentAxios(id));
  };

  useEffect(() => {
    dispatch(getentertainmentAxios());
  }, [dispatch]);
  return isLoading ? (
    <div
      style={{
        position: "relative",
        marginTop: "100px",
        fontFamily: "serif",
      }}
    >
      {/* <h1 style={{ textAlign: 'center' }}>HAPPINESS</h1> */}
      <CircularProgress
        color="primary"
        size={100}
        left={-20}
        top={10}
        status={"loading"}
        style={{ marginLeft: "46%", marginTop: "100px" }}
      />
      <p style={{ textAlign: "center", fontSize: "20px" }}>Loading...</p>
    </div>
  ) : (
    <>
      <EntertainmentWrapper>
        <TopEntertainment>
          <TopLeftEntertainment>
            {entertainmentNews.slice(9, 10).map((item, index) => (
              <TopLeftEntertainmentCard
                key={index}
                onClick={() => goToLink(item.publishedAt)}
              >
                <div>
                  <img src={item.urlToImage} alt={item.title}></img>
                </div>

                <h3>{item.title}</h3>
              </TopLeftEntertainmentCard>
            ))}
          </TopLeftEntertainment>
          <TopRightEntertainment>
            <AddEntertainment />
            {entertainmentNews.slice(10, 12).map((item, index) => (
              <TopRightEntertainmentCard
                key={index}
                onClick={() => goToLink(item.publishedAt)}
              >
                <img src={item.urlToImage} alt={item.title}></img>
                <h3>{item.title}</h3>
              </TopRightEntertainmentCard>
            ))}
          </TopRightEntertainment>
        </TopEntertainment>

        <MiddleEntertainment>
          {entertainmentNews.map((item, index) => (
            <TopMiddleEntertainmentCard key={index}>
              {isAdmin && (
                <BsPencilSquare onClick={() => edit(item.id)}></BsPencilSquare>
              )}
              {isAdmin && (
                <AiFillDelete onClick={() => deleting(item.id)}></AiFillDelete>
              )}
              <img
                src={item.urlToImage}
                alt={item.title}
                onClick={() => goToLink(item.publishedAt)}
              ></img>
              <h4 onClick={() => goToLink(item.publishedAt)}>{item.title}</h4>
            </TopMiddleEntertainmentCard>
          ))}
        </MiddleEntertainment>
      </EntertainmentWrapper>
      <Footer />
    </>
  );
};

export { Entertainment };

const EntertainmentWrapper = styled.div`
  width: 80%;
  /* border: 1px solid black; */
  margin: 20px auto;
  /* height: 1000px; */
`;

const TopEntertainment = styled.div`
  display: flex;
`;

const TopLeftEntertainment = styled.div`
  /* border: 1px solid black; */
  width: 70%;
`;

const TopRightEntertainment = styled.div`
  /* border: 1px solid black; */
  width: 30%;
  margin: 0px 1%;
`;

const TopLeftEntertainmentCard = styled.div`
  /* border: 1px solid black; */

  img {
    width: 100%;
    height: 400px;
  }
  h3 {
    position: absolute;
    border: 3px solid black;
    padding: 20px;
    text-align: center;
    width: 600px;
    margin-left: 6%;
    margin-top: -20px;
  }
`;
const TopRightEntertainmentCard = styled.div`
  /* border: 1px solid black; */
  padding: 10px;
  margin-bottom: 100px;
  img {
    width: 100%;
    height: 200px;
  }
  h3 {
    position: absolute;
    border: 2px solid black;
    padding: 20px;
    text-align: center;
    width: 200px;
    margin-left: 3%;
    margin-top: -20px;
  }
`;
const MiddleEntertainment = styled.div`
  /* border: 1px solid black; */
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  padding: 0px 20px;
  margin-left: 30px;
`;

const TopMiddleEntertainmentCard = styled.div`
  width: 300px;
  img {
    width: 100%;
    height: 200px;
  }
  margin-bottom: 150px;

  h4 {
    position: absolute;
    border: 2px solid black;
<<<<<<< HEAD
    padding: 30px;
=======
<<<<<<< HEAD
    padding: 30px 20px;
=======
    padding: px;
>>>>>>> 35d6c6b3178791c9f5eebc8440cc63a2c9f12a54
>>>>>>> a6ce90a1064caef94273e817232d5322e5ccc53d
    text-align: center;
    width: 200px;
    height: 60px;
    
    margin-left: 2%;
    margin-top: -20px;
    justify-content: center;
    align-items: center;
  }
`;
