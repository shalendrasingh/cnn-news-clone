import React from "react";
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { Navbar } from "../Navbar/Navbar";
import styled from "styled-components"
import { get_home } from "../../Redux/home/action";
import { Footer } from "../Footer/Footer";
import styles from "./Home.module.css"
import { getData } from "../../utils/utils";
import { AuthContext } from "../../Context/AuthContext";
import { getSearchData } from "../../Redux/SearchPage/action";

const Home = () => {

    const dispatch = useDispatch()
    const menu = useSelector((state) => state.search.menu)
    const {isLoading, error, homeNews} = useSelector(state => state.home)
    const [trending,setTrending]=React.useState([])
    const history = useHistory()
    let {handleMockState,handleMockData,handleIdMock}=React.useContext(AuthContext)

    const get_data = () => {
        dispatch(get_home())
    }

    useEffect(() => {
        get_data()
        getData()
        .then(res=>{
            setTrending(res.data)
            handleMockData(res.data)
        })
    }, [])

    const goToLink = (data) => {
        history.push(`/home/${data}`)
        handleMockState(false)
    }
    const goToLinkMock = (data) => {
        history.push(`/home/${data}`)
        handleMockState(true)
        handleIdMock(data)    
        
    }
    const handleSearch = (key)=>{
        console.log("key   "+key)
        dispatch(getSearchData(key))
        history.push(`/searchpage`)
    }
  
    return isLoading ? <Loading></Loading> :(
      <>
      <Navbar />
      {menu? (<div style={{position:"fixed", marginTop:"0px", width:"100%", zIndex:"10"}}><Footer/></div>):null}
      <div className={styles.trending}>
        <span onClick={()=>handleSearch("Covid")} style={{color:"red"}} >COVID-19: </span>
        <span onClick={()=>handleSearch("Covid")}>Live Updates</span>
        <span onClick={()=>handleSearch("Vaccination in all countries")}>Vaccinations by Country</span>
        <span style={{color:"red"}} >TRENDING: </span>
        {
            trending?.map((item)=><span onClick={()=>goToLinkMock(item.id)} {...item} trend={true} key={item.id} >{item.heading}</span>)
        }
        
      </div>
      <MainContainer>

          <TopNewsContainer>

              <TopNewsLeftPart>
                  <img src = "https://s.yimg.com/uu/api/res/1.2/4148lV0Gc.a_NK8g.N1egA--~B/aD05MDA7dz0xNjAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-uploaded-images/2021-02/38b44370-7840-11eb-9dff-c6bc9a7d303a.cf.jpg"></img>
                  {homeNews.slice(0, 6).map(item => (
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
                  {homeNews.slice(7, 14).map(item => (
                      <div key={item.id}>
                          <p onClick={() => goToLink(item.publishedAt)}>{item.title}</p>
                          <hr></hr>
                      </div>
                  ))}
              </TopNewsMiddlePart>

              <TopNewsRightPart>
                  <div>
                      <img src="https://cdn.cnn.com/cnnnext/dam/assets/210302130915-school-shootings-lockdown-drills-15-medium-plus-169.jpg"></img>
                      <ImageDesc1>
                          <p>CDC releases new guidelines for fully vaccinated individuals</p>
                      </ImageDesc1>
                  </div>
                  <div>
                      <img src="https://cdn.cnn.com/cnnnext/dam/assets/210308175815-dr-wen-cdc-reax-vpx-medium-plus-169.jpg"></img>
                      <ImageDesc2>
                          <p>'Defies common sense': Dr. Wen reacts to CDC guidelines</p>
                      </ImageDesc2>
                  </div>
              </TopNewsRightPart>
              
              <div>{error && <h2>Failed To Load Data</h2>}</div>
              
          </TopNewsContainer>

          <MoreHeadlines>
              <div>
                  <Headings>
                      <p>More headlines</p>
                  </Headings>
                  <CommonHealthLinks>
                      {homeNews.slice(0, 9).map(item => (
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
                  <img src = "https://media.wired.com/photos/6039699be9471794a22f0a88/191:100/w_1280,c_limit/Oped-Facebook-Oversight-Trump-1231037349%25202.jpg" />
                  <CommonHealthLinks>
                      {homeNews.slice(9, 13).map(item => (
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
                      <p>LendingTree</p>
                  </Headings>
                  <img src="https://cdn.cnn.com/cnnnext/dam/assets/210212144012-lendingtree-brownstonesnow-large-tease.jpg" />
                  <CommonHealthLinks>
                      {homeNews.slice(0, 3).map(item => (
                          <div key={item.id}>
                              <p onClick={() => goToLink(item.publishedAt)}>{item.title}</p>
                              <div></div>
                          </div>
                      ))}
                  </CommonHealthLinks>
              </div>
              <div>
                  <Headings>
                      <p>CompareCards</p>
                  </Headings>
                  <img src="https://cdn.cnn.com/cnnnext/dam/assets/210212143611-comparecards-squarepinkcard-large-tease.jpg" />
                  <CommonHealthLinks>
                      {homeNews.slice(4, 7).map(item => (
                          <div key={item.id}>
                              <p onClick={() => goToLink(item.publishedAt)}>{item.title}</p>
                              <div></div>
                          </div>
                      ))}
                  </CommonHealthLinks>
              </div>
              <div>
                  <Headings>
                      <p>The Motely Fool</p>
                  </Headings>
                  <img src="https://cdn.cnn.com/cnnnext/dam/assets/210226144913-motleyfool-retirement-large-tease.jpg" />
                  <CommonHealthLinks>
                      {homeNews.slice(8, 11).map(item => (
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
              {homeNews.map(item => (
                  <div key={item.id}>
                      <img src = {item.urlToImage} alt="logo sports" />
                      <div><p onClick={() => goToLink(item.publishedAt)}>{item.title}</p></div>
                  </div>
              ))}
          </GridCardContainer>

          

      </MainContainer>

      <Footer />
      </>
  )
}

const MainContainer = styled.div `
  width: 85%;
  height: auto;
  margin: auto;
  margin-top: 53px;
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

export { Home };
