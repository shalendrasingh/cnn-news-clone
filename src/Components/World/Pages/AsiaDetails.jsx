import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import { Footer } from "../../Footer/Footer";
import { WorldNavBar } from "../../Navbar/WorldNavBar";
import { FaExternalLinkAlt } from "react-icons/fa";

const AsiaDetails = () => {
  const { data } = useSelector((state) => state.world, shallowEqual);

  const { id } = useParams();

  let a = data.map((item) => id == item.id);
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== true) count++;
    else break;
  }
  return (
    <>
      <WorldNavBar></WorldNavBar>
      <div>
        {data.map((item) =>
          id == item.id ? (
            <IMG_DIV key={item.id}>
              <img src={item.image} alt="image-1"></img>
              <h1>{item.title}</h1>
              <p>
                {item.content}&nbsp;&nbsp; &nbsp;{item.description}&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp; &nbsp;
                <br />
                <br />
                {item.content}&nbsp;&nbsp; &nbsp;{item.description}&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp; &nbsp;
                <br />
                <br />
                {item.content}&nbsp;&nbsp; &nbsp;{item.description}
              </p>
              <FOOTER__CONTENT>
                <span>Publish Date : {item.publishedAt}</span>
                <a href={item.url}>
                  Click me to know more <FaExternalLinkAlt></FaExternalLinkAlt>
                </a>
                <span>Author : {item.author}</span>
              </FOOTER__CONTENT>
            </IMG_DIV>
          ) : (
            ""
          )
        )}
      </div>
      <Footer></Footer>
    </>
  );
};

export { AsiaDetails };
const IMG_DIV = styled.div`
  border: 1px solid #ccc;
  display: flex;
  width: 80%;
  margin: 10px auto;
  padding: 10px;
  flex-direction: column;
  img {
    width: 80%;
    height: 80vh;
    margin: auto;
  }
  h1 {
    text-align: center;
  }
  p {
    margin: 20px;
  }
`;

const FOOTER__CONTENT = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  justify-content: space-evenly;
  a {
    color: black;
  }
`;
