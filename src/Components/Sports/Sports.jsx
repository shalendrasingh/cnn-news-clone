import React from "react";
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { Navbar } from "../Navbar/Navbar";
import styled from "styled-components"
import { get_sports } from "../../Redux/sports/action";
import { Footer } from "../Footer/Footer";
import { Carousel } from "./Carousel";
import "./Sports.module.css"
import { CarouselSecond } from "./CarouselSecond";
import { CarouselThird } from "./CarouselThird";
// import {SportsLinksPage} from "./SportsLinksPage"
const Sports = () => {

  const dispatch = useDispatch()
    const {isLoading, error, sportsNews} = useSelector(state => state.sports)
    const history = useHistory()
    const get_data = () => {
        dispatch(get_sports())
    }

    useEffect(() => {
        get_data()        
    }, [dispatch])
    // console.log(sportsNews)
    const goToLink = (data) => {
        history.push(`/sports/${data}`)
        console.log("history got pushed")
    }
    // console.log(sportsNews)
    return isLoading ? <Loading></Loading> :(
      <>
      <Navbar />     
      <MainContainer>

          <TopNewsContainer>

              <TopNewsLeftPart>
                  <img src ="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/317700/317723.6.jpg" alt="news logo" />
                  {sportsNews.slice(0, 6).map(item => (
                  <div key={item.id}>
                      <p onClick={() => goToLink(item.publishedAt)}  >{item.title}</p>
                      <hr></hr>
                  </div>
              ))}
              </TopNewsLeftPart>

              <TopNewsMiddlePart>
                  <Headings>
                      <p>Latest</p>
                  </Headings>
                  {sportsNews.slice(7, 14).map(item => (
                      <div key={item.id}>
                          <p onClick={() => goToLink(item.publishedAt)}>{item.title}</p>
                          <hr></hr>
                      </div>
                  ))}
              </TopNewsMiddlePart>

              <TopNewsRightPart>
                  <div>
                      <img src="https://i2-prod.birminghammail.co.uk/sport/football/football-news/article19177893.ece/ALTERNATES/s1200/0_GettyImages-1281415064.jpg"  alt="news logo"></img>
                      <ImageDesc1>
                          <p>Sports are changing the youngs</p>
                      </ImageDesc1>
                  </div>
                  <div>
                      <img src="https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0926%2Fr437698_1296x729_16%2D9.jpg" alt="news logo"></img>
                      <ImageDesc2>
                          <p>Sports are good for health</p>
                      </ImageDesc2>
                  </div>
              </TopNewsRightPart>
              
              <div>{error && <h2>Failed To Load Data</h2>}</div>
              
          </TopNewsContainer>
          
          <Carousel />
          <CarouselSecond />
          <MoreHeadlines>
              <div>
                  <Headings>
                      <p>More headlines</p>
                  </Headings>
                  <CommonHealthLinks>
                      {sportsNews.slice(0, 9).map(item => (
                          <div key={item.id}>
                              <p onClick={() => goToLink(item.publishedAt)}>{item.title}</p>
                              <div></div>
                          </div>
                      ))}
                  </CommonHealthLinks>
              </div>

              <div>
                  <Headings>
                      <p>News and buzz</p>
                  </Headings>
                  <img src = "https://i0.wp.com/insidethestar.com/wp-content/uploads/2021/03/bmartin_dallas-cowboys_tyron-smith-and-lael-collins-restructured-scratch-off-ot-in-round-1.jpg?fit=1200%2C800&ssl=1" alt="sports logo" />
                  <CommonHealthLinks>
                      {sportsNews.slice(9, 13).map(item => (
                          <div key={item.id}>
                              <p onClick={() => goToLink(item.publishedAt)}>{item.title}</p>
                              <div></div>
                          </div>
                      ))}
                  </CommonHealthLinks>
              </div>
          </MoreHeadlines>

          <HeadingWithLines>
              <div>Paid Partner Content</div>
              <div>
                  <Line1></Line1>
                  <Line1></Line1>
              </div>
          </HeadingWithLines>

          <PaidContent>
              <div>
                  <Headings>
                      <p>Horse Racing</p>
                  </Headings>
                  <img src="https://cdn.cnn.com/cnnnext/dam/assets/210302112816-horse-racing-tease-large-tease.jpg" alt="horse" />
                  <CommonHealthLinks>
                      {sportsNews.slice(0, 3).map(item => (
                          <div key={item.id}>
                              <p onClick={() => goToLink(item.publishedAt)}>{item.title}</p>
                              <div></div>
                          </div>
                      ))}
                  </CommonHealthLinks>
              </div>
              <div>
                  <Headings>
                      <p>Formula one</p>
                  </Headings>
                  <img src= "https://cdn.cnn.com/cnnnext/dam/assets/210304113440-01-aston-martin-sebastian-vettel-0302-restricted-large-tease.jpg" alt="Formula one" />
                  <CommonHealthLinks>
                      {sportsNews.slice(4, 7).map(item => (
                          <div key={item.id}>
                              <p onClick={() => goToLink(item.publishedAt)}>{item.title}</p>
                              <div></div>
                          </div>
                      ))}
                  </CommonHealthLinks>
              </div>
              <div>
                  <Headings>
                      <p>Us Sports</p>
                  </Headings>
                  <img src="https://cdn.cnn.com/cnnnext/dam/assets/210309084433-01-dak-prescott-file-2019-large-tease.jpg" alt="Us sports" />
                  <CommonHealthLinks>
                      {sportsNews.slice(8, 11).map(item => (
                          <div key={item.id}>
                              <p onClick={() => goToLink(item.publishedAt)}>{item.title}</p>
                              <div></div>
                          </div>
                      ))}
                  </CommonHealthLinks>
              </div>
          </PaidContent>

          <HeadingWithLines>
              <div>In case you missed it</div>
              <div>
                  <Line1></Line1>
                  <Line1></Line1>
              </div>
          </HeadingWithLines>

          <GridCardContainer>
              {sportsNews.map(item => (
                  <div key={item.id}>
                      <img src = {item.urlToImage} alt="sports"/>
                      <div><p onClick={() => goToLink(item.publishedAt)}>{item.title}</p></div>
                  </div>
              ))}
          </GridCardContainer>

          

      </MainContainer>
      <CarouselThird />
      <Footer />
      </>
  )
}

const MainContainer = styled.div `
  width: 85%;
  height: auto;  
  margin-top: 53px;
  margin: auto;
  margin-top: 80px;
  font-family: CNN, "Helvetica Neue", Helvetica, Arial, Utkal, sans-serif;

  hr {
      border-top: 1px solid rgba(0,0,0,0.2)
  }

  >img {
      width: 250px;
  }
`

const TopNewsContainer = styled.div `
  display: flex;
  margin-top: 30px;
  width: 100%;
  height: 600px;
  flex-wrap: wrap;
  font-size: 16px;

  p {
      cursor: pointer;
  }

  p:hover {
      color: red
  }

  hr {
      margin-bottom: -8px;
      margin-left: 0px;
      margin-top: -8px;
      width: 96%;
  }
  
`

const TopNewsLeftPart = styled.div `
  width: 38%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 10px;

  img {
      height: 300px;
      width: 410px;
  }
`

const TopNewsMiddlePart = styled.div `
  width: 31%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  hr {
      margin-bottom: 5px;
      width: 98%;
  }
`

const TopNewsRightPart = styled.div `
  width: 30%;
  text-align: center;
  height: 100%;

  div{
      margin-bottom: 150px;
  }

  img {
      height: 150px;
      width: 250px;
  }
`

const ImageDesc1 = styled.div `
  background-color: #E6E6E6;
  height: 140px;
  width: 200px;
  display: flex;
  font-size: 22px;
  position: absolute;
  top: 300px;
  right: 13%;
`

const ImageDesc2 = styled.div `
  background-color: #E6E6E6;
  height: 140px;
  width: 200px;
  display: flex;
  font-size: 22px;
  position: absolute;
  top: 610px;
  right: 13%;
`

const Headings = styled.div `
  background-color: #F2F2F2;
  font-size: 18px;
  font-weight: bold;
  color: #404040;
  border-bottom: 1px solid #D9D9D9;
  padding-left: 10px;
  height: 40px;
  display:flex;
  align-items: center;

  :hover {
      color: red;
      cursor: pointer;
  }
`

const MoreHeadlines = styled.div `
  margin-top: 100px;
  width: 65%;
  display: flex;

  > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-right: 20px;
  }

  hr {
      margin-top: -7px;
      margin-bottom: -7px;
  }

  p:hover {
      cursor: pointer;
      color: red
  }

  img {
      width: 100%;
      height: 200px;
  }
`

const HeadingWithLines = styled.div `
  display: flex;
  width: 100%;
  height: 30px;
  margin-top: 50px;
  
  > div:nth-child(1) {
      width: 20%;
      font-size: 24px;
  }
  > div:nth-child(2) {
      width: 80%;
      padding-top: 10px;
  }

  > div:nth-child(2) div {
      display: flex;
      flex-direction: column;
      width: 100%;
      
  }

`
const Line1 = styled.div `
  height: 4px;
  background-color: #c7c7c7;
  margin-bottom: 3px;
`

const PaidContent = styled.div `
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 15px;

  >div {
      width: 30%;
  }

  img {
      width: 100%;
      height: 200px;
  } 
`

const CommonHealthLinks = styled.div `
  > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-right: 20px;
  }

  > div > div {
      margin-top: -7px;
      margin-bottom: -7px;
      height: 1px;
      width: 99%;
      background-color: rgba(0,0,0,0.2)
  }

  p:hover {
      cursor: pointer;
      color: red
  }
`

const GridCardContainer = styled.div `
  margin-top: 20px;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-gap: 10px;
  width: 100%;
  height: auto;


  div {
      text-align: left;
      font-size: 20px;
  }

  div > div {
      width: 90%;
      margin-bottom: 15px;
      padding-left: 10px;
      margin-top: -10px;
  }

  div > div > p:hover {
      color: red;
      cursor: pointer;
  }

  img {
      height: 170px;
      width: 270px;
  }
`

const Loading = styled.div `
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid grey;
  width: 120px;
  height: 120px;
  margin: auto;
  margin-top: 200px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  /* Safari */
  @-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
  }
`

export { Sports }
