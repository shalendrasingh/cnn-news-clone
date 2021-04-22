import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchAfricaData } from "../../../Redux/world/action";
import styled from "styled-components";
import { Link, useHistory, useParams } from "react-router-dom";
import { Footer } from "../../Footer/Footer";
import { WorldNavBar } from "../../Navbar/WorldNavBar";

const Africa = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { data } = useSelector((state) => state.world, shallowEqual);

  useEffect(() => {
    dispatch(fetchAfricaData());
  }, [dispatch]);

  console.log(data);

  const handleClick = (id) => {
    console.log(id);
    history.push(`/africa/${id}`);
  };
  return (
    <>
      <WorldNavBar></WorldNavBar>
      <BODY_CONTAINER_MAIN_DIV>
        <h1>Africa</h1>
        <TOP_HEADER_DIV_1>
          {data.slice(0, 1).map((item, index) => (
            <IMG_DIV key={index} onClick={(e) => handleClick(item.id)}>
              <img src={item.image} alt="image-1"></img>
              <span onClick={() => handleClick(item.id)}>{item.title}</span>
            </IMG_DIV>
          ))}
          <LINK_DIV>
            {data.slice(2, 6).map((item, index) => (
              <INSIDE_LINK_DIV key={index}>
                <p onClick={() => handleClick(item.id)}>{item.title}</p>
              </INSIDE_LINK_DIV>
            ))}
          </LINK_DIV>
        </TOP_HEADER_DIV_1>

        <AROUND_DIV_CONTENT>
          {data.slice(1, 3).map((item, index) => (
            <IMG__HEADER key={index}>
              <h2>News and Buzz</h2>
              <IMG_DIV_2>
                <img src={item.image} alt="image" />
                <h3 onClick={() => handleClick(item.id)}>{item.title}</h3>
              </IMG_DIV_2>
              <LINK_DIV_2>
                {data.slice(8, 12).map((item, index) => (
                  <INSIDE_LINK_DIV_2 key={index}>
                    <p onClick={() => handleClick(item.id)}>{item.title}</p>
                  </INSIDE_LINK_DIV_2>
                ))}
              </LINK_DIV_2>
            </IMG__HEADER>
          ))}
          <div
            style={{
              width: "300px",
              height: "540px",
              border: "1px solid #ccc",
              overflow: "auto",
              padding: "10px",
              margin: "10px",
            }}
          >
            <a
              class="twitter-timeline"
              href="https://twitter.com/CNNAfrica?ref_src=twsrc%5Etfw"
            >
              Tweets by CNNAfrica
            </a>
          </div>
        </AROUND_DIV_CONTENT>

        {/* code for Featured sections */}

        <AROUND_DIV_CONTENT>
          {data.slice(1, 7).map((item, index) => (
            <IMG__HEADER key={index}>
              <h2>Royal's Comments</h2>
              <IMG_DIV_2>
                <img src={item.image} alt="image" />
                <h3 onClick={() => handleClick(item.id)}>{item.title}</h3>
              </IMG_DIV_2>
              <LINK_DIV_2>
                {data.slice(8, 11).map((item, index) => (
                  <INSIDE_LINK_DIV_2 key={index}>
                    <p onClick={() => handleClick(item.id)}>{item.title}</p>
                  </INSIDE_LINK_DIV_2>
                ))}
              </LINK_DIV_2>
            </IMG__HEADER>
          ))}
        </AROUND_DIV_CONTENT>

        <AROUND_DIV_CONTENT>
          {data.slice(7, 13).map((item, index) => (
            <IMG__HEADER key={index}>
              <h2> Women in space science</h2>
              <IMG_DIV_2>
                <img src={item.image} alt="image" />
                <h3 onClick={() => handleClick(item.id)}>{item.title}</h3>
              </IMG_DIV_2>
            </IMG__HEADER>
          ))}
        </AROUND_DIV_CONTENT>
        <TAG_HEADING>
          <H1_TAG>
            Video
            <span>&nbsp;</span>
          </H1_TAG>
        </TAG_HEADING>

        {/* code for More of the latest stories  */}

        <TAG_HEADING>
          <H1_TAG>
            CNN Specials
            <span>&nbsp;</span>
          </H1_TAG>
        </TAG_HEADING>
        <AROUND_DIV_CONTENT>
          {data.slice(9, 17).map((item, index) => (
            <IMG__HEADER_2 key={index}>
              <IMG_DIV_3>
                <img src={item.image} alt="image" />
                <h3 onClick={() => handleClick(item.id)}>{item.title}</h3>
              </IMG_DIV_3>
            </IMG__HEADER_2>
          ))}
        </AROUND_DIV_CONTENT>
        <TAG_HEADING>
          <H1_TAG_3>
            <span>&nbsp;</span>
          </H1_TAG_3>
        </TAG_HEADING>
      </BODY_CONTAINER_MAIN_DIV>
      <Footer></Footer>
    </>
  );
};

export { Africa };

const BODY_CONTAINER_MAIN_DIV = styled.div`
  border: 1px solid #ddd;
  width: 80%;
  display: flex;
  margin: auto;
  color: black;
  flex-direction: column;
  h1 {
    display: flex;
    margin-left: 20px;

    align-items: flex-start;
  }
`;
const TOP_HEADER_DIV_1 = styled.div`
  display: flex;
  width: 90%;
  margin: 0px auto;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #ccc;
  /* justify-content: center; */
`;

const IMG_DIV = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: flex-start;
  img {
    width: 70%;
    height: 450px;
    margin: 0;
  }
  span {
    margin: 10px;
    color: black;
    font-size: 24px;
  }
  span:hover {
    color: red;
    cursor: pointer;
  }
`;

const LINK_DIV = styled.div`
  display: flex;
  margin: 0px 20px;
  width: 80%;
  flex-direction: column;
  align-items: flex-start;
`;

const INSIDE_LINK_DIV = styled.div`
  border-top: 1px solid #ccc;
  display: flex;
  align-items: flex-start;
  margin: 5px 0px;
  width: 73%;
  p {
    text-decoration: none;
    color: black;
  }
  p:hover {
    color: red;
    cursor: pointer;
  }
`;

const TAG_HEADING = styled.div``;

const H1_TAG = styled.h1`
  display: flex;
  flex-direction: "row";
  align-items: "center";
  justify-content: space-evenly;
  width: 98%;
  font-size: 28px;
  span {
    border-top: 4px solid #ccc;
    border-bottom: 4px solid #ccc;
    height: 3px;
    width: 75%;
    display: flex;
    margin-top: 15px;
    align-items: "center";
  }
`;
const H1_TAG_2 = styled.h1`
  display: flex;
  flex-direction: "row";
  align-items: "center";
  justify-content: space-evenly;
  width: 98%;
  font-size: 28px;
  span {
    border-top: 4px solid #ccc;
    border-bottom: 4px solid #ccc;
    height: 3px;
    width: 60%;
    display: flex;
    margin-top: 15px;
    align-items: "center";
  }
`;
const H1_TAG_3 = styled.h1`
  display: flex;
  flex-direction: "row";
  align-items: "center";
  justify-content: space-evenly;
  width: 98%;
  font-size: 28px;
  span {
    border-top: 4px solid #ccc;
    border-bottom: 4px solid #ccc;
    height: 3px;
    width: 100%;
    display: flex;
    margin-top: 15px;
    align-items: "center";
  }
`;

const AROUND_DIV_CONTENT = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const IMG_DIV_2 = styled.div`
  display: flex;
  width: 350px;
  height: 350px;
  margin: 0px auto;
  align-items: center;
  flex-direction: column;
  img {
    width: 350px;
    height: 250px;
  }
  h3:hover {
    color: red;
    cursor: pointer;
  }
`;
const IMG_DIV_3 = styled.div`
  display: flex;
  /* border: 1px solid #725f5f; */
  width: 300px;
  height: 300px;
  margin: 0px auto;
  align-items: center;
  flex-direction: column;
  img {
    width: 300px;
    height: 250px;
  }
  h3:hover {
    color: red;
    cursor: pointer;
  }
`;

const LINK_DIV_2 = styled.div`
  display: flex;
  width: 98%;
  margin: auto;
  flex-direction: column;
`;

const IMG__HEADER = styled.div`
  display: flex;
  margin: 10px auto;
  width: 350px;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    padding: 0px;
    margin: 0px;
    padding: 10px;
  }
`;

const IMG__HEADER_2 = styled.div`
  display: flex;
  margin: 10px auto;
  width: 300px;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    padding: 0px;
    margin: 0px;
    padding: 10px;
  }
`;

const INSIDE_LINK_DIV_2 = styled.div`
  border-top: 1px solid #ccc;
  display: flex;
  align-items: flex-start;
  margin: 7px;
  padding: 5px;
  width: 92%;
  text-align: left;
  p {
    text-decoration: none;
    color: black;
  }
  p:hover {
    color: red;
    cursor: pointer;
  }
`;
