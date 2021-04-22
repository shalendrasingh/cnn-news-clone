import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "../Footer/Footer";
import { useTranslation} from "react-i18next"
import styles from "../Navbar/Navbar.module.css"
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";

const Health = () => {
  const { isLoading, error} = useSelector((state) => state.health);
  const history = useHistory();

  const {t, i18n} = useTranslation()

  const goToLink = (data) => {
    history.push(`/health/${data}`);
  };

  const handleChange = (e) => {
    // console.log(e.target.value)
    i18n.changeLanguage(e.target.value)
  }

  const links1 = [
    {
      to: "/world",
      title: "World",
    },
    {
      to: "/uspolitics",
      title: "Us Politics",
    },
    {
      to: "/business",
      title: "Business",
    },
    {
      to: "/health",
      title: "Health",
    },
    {
      to: "/entertainment",
      title: "Entertainment",
    },
    {
      to: "/style",
      title: "Style",
    },
    {
      to: "/travel",
      title: "Travel",
    },
    {
      to: "/sports",
      title: "Sports",
    },
    {
      to: "/videos",
      title: "Videos",
    },
  ];
  const links2 = [
    {
      to: "/style",
      title: "Style",
    },
    {
      to: "/travel",
      title: "Travel",
    },
    {
      to: "/sports",
      title: "Sports",
    },
    {
      to: "/videos",
      title: "Videos",
    },
  ];

  return isLoading ? (
    <Loading></Loading>
  ) : (
    <>
    <div className={styles.navbar}>
      <div className={styles.leftmenu}>
        <Link to="/">
          <img src="../cnn_logo.png" alt="logo" />
        </Link>
        {links1.map(({ to, title }) => (
          <Link to={to} key={to}>
            {title}
          </Link>
        ))}
      </div>
      <div className={styles.rightmenu}>
        
      <select style={{color: "white"}} onChange={e => handleChange(e)}>
        <option defaultValue hidden>Edition</option>
        <option value="en">English</option>
        <option value="ar">عربي</option>
        <option value="sp">Español</option>
      </select>

        <Link className={styles.search} to="/footer">
          <BsSearch />
        </Link>
        <Link className={styles.search} to="/profile">
          <CgProfile />
        </Link>
        <Link className={styles.search} to="/footer">
          <AiOutlineMenu />
        </Link>
      </div>
    </div>

    <MainContainer>
      <img
        src="https://cdn.cnn.com/cnn/.e1mo/img/4.0/logos/cnn_health_banner.png"
        alt="health.logo"
      ></img>
      <br />

      <TopNewsContainer>
        <TopNewsLeftPart>
          <img src="https://s.yimg.com/uu/api/res/1.2/SAxQDBbGuKj8xqKLSOyF_Q--~B/aD0zOTYzO3c9Mzk5ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-02/95642c30-7547-11eb-bf39-5b86f86d2c77.cf.jpg"></img>
          
            <div>
              <p>{t(`Lang.1`)}</p>
              <hr></hr>
              <p>{t(`Lang.2`)}</p>
              <hr></hr>
              <p>{t(`Lang.3`)}</p>
              <hr></hr>
              <p>{t(`Lang.4`)}</p>
              <hr></hr>
              <p>{t(`Lang.5`)}</p>
              <hr></hr>
              <p>{t(`Lang.6`)}</p>
              <hr></hr>
            </div>
          
        </TopNewsLeftPart>

        <TopNewsMiddlePart>
          <Headings>
            <p>{t(`Lang.Latest`)}</p>
          </Headings>
          
            <div>
              <p>{t(`Lang.7`)}</p>
              <hr></hr>
              <p>{t(`Lang.8`)}</p>
              <hr></hr>
              <p>{t(`Lang.9`)}</p>
              <hr></hr>
              <p>{t(`Lang.10`)}</p>
              <hr></hr>
              <p>{t(`Lang.11`)}</p>
              <hr></hr>
              <p>{t(`Lang.12`)}</p>
              <hr></hr>
              <p>{t(`Lang.13`)}</p>
              <hr></hr>
            </div>
          
        </TopNewsMiddlePart>

        <TopNewsRightPart>
          <div>
            <img src="https://cdn.cnn.com/cnnnext/dam/assets/210302130915-school-shootings-lockdown-drills-15-medium-plus-169.jpg"></img>
            <ImageDesc1>
              <p>
                {t(`Lang.Img1`)}
              </p>
            </ImageDesc1>
          </div>
          <div>
            <img src="https://cdn.cnn.com/cnnnext/dam/assets/210308175815-dr-wen-cdc-reax-vpx-medium-plus-169.jpg"></img>
            <ImageDesc2>
              <p>{t(`Lang.Img2`)}</p>
            </ImageDesc2>
          </div>
        </TopNewsRightPart>

        <div>{error && <h2>Failed To Load Data</h2>}</div>
      </TopNewsContainer>

      <MoreHeadlines>
        <div>
          <Headings>
            <p>{t(`Lang.MoreHeadlines`)}</p>
          </Headings>
          <CommonHealthLinks>
            
              <div>
                <p>{t(`Lang.1`)}</p>
                <hr></hr>
                <p>{t(`Lang.2`)}</p>
                <hr></hr>
                <p>{t(`Lang.3`)}</p>
                <hr></hr>
                <p>{t(`Lang.4`)}</p>
                <hr></hr>
                <p>{t(`Lang.5`)}</p>
                <hr></hr>
                <p>{t(`Lang.6`)}</p>
                <hr></hr>
                <p>{t(`Lang.7`)}</p>
                <hr></hr>
                <p>{t(`Lang.8`)}</p>
                <hr></hr>
                <p>{t(`Lang.9`)}</p>
                <hr></hr>
              </div>
            
          </CommonHealthLinks>
        </div>

        <div>
          <Headings>
            <p>{t(`Lang.Science`)}</p>
          </Headings>
          <img src="https://cdn.cnn.com/cnnnext/dam/assets/210308161052-01-boys-mental-health-prince-harry-wellness-large-169.jpg" />
          <CommonHealthLinks>
            
              <div>
              <p>{t(`Lang.10`)}</p>
              <hr></hr>
              <p>{t(`Lang.11`)}</p>
              <hr></hr>
              <p>{t(`Lang.12`)}</p>
              <hr></hr>
              <p>{t(`Lang.13`)}</p>
                <div></div>
              </div>
            
          </CommonHealthLinks>
        </div>
      </MoreHeadlines>

      <HeadingWithLines>
        <div>{t(`Lang.Paid`)}</div>
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
            
              <div>
                <p>{t(`Lang.1`)}</p>
                <hr></hr>
                <p>{t(`Lang.2`)}</p>
                <hr></hr>
                <p>{t(`Lang.3`)}</p>
                <hr></hr>
              </div>
            
          </CommonHealthLinks>
        </div>
        <div>
          <Headings>
            <p>{t(`Lang.Compare`)}</p>
          </Headings>
          <img src="https://cdn.cnn.com/cnnnext/dam/assets/210212143611-comparecards-squarepinkcard-large-tease.jpg" />
          <CommonHealthLinks>
            
              <div >
                <p>{t(`Lang.4`)}</p>
                <hr></hr>
                <p>{t(`Lang.5`)}</p>
                <hr></hr>
                <p>{t(`Lang.6`)}</p>
                <hr></hr>
              </div>
            
          </CommonHealthLinks>
        </div>
        <div>
          <Headings>
            <p>{t(`Lang.Motely`)}</p>
          </Headings>
          <img src="https://cdn.cnn.com/cnnnext/dam/assets/210226144913-motleyfool-retirement-large-tease.jpg" />
          <CommonHealthLinks>
            
              <div>
                <p>{t(`Lang.7`)}</p>
                <hr></hr>
                <p>{t(`Lang.8`)}</p>
                <hr></hr>
                <p>{t(`Lang.9`)}</p>
                <hr></hr>
              </div>
            
          </CommonHealthLinks>
        </div>
      </PaidContent>

      <HeadingWithLines>
        <div>{t(`Lang.Missed`)}</div>
        <div>
          <Line1></Line1>
          <Line1></Line1>
        </div>
      </HeadingWithLines>

      <GridCardContainer>
        
          
            <div>
              <img src="https://s.yimg.com/uu/api/res/1.2/SAxQDBbGuKj8xqKLSOyF_Q--~B/aD0zOTYzO3c9Mzk5ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-02/95642c30-7547-11eb-bf39-5b86f86d2c77.cf.jpg" alt="img"/>
              <p>{t(`Lang.1`)}</p>
              </div><div>
              <img src="https://techcrunch.com/wp-content/uploads/2021/02/apple_heart-health-month_heart-rate-reading_02032021.jpg?w=600" alt="img"/>
              <p>{t(`Lang.2`)}</p>
              </div><div>
              <img src="https://techcrunch.com/wp-content/uploads/2020/03/GettyImages-862530228.jpg?w=600" alt="img"/>
              <p>{t(`Lang.3`)}</p>
              </div><div>
              <img src="https://techcrunch.com/wp-content/uploads/2021/02/Notable-Health-cofounders.jpg?w=600" alt="img"/>
              <p>{t(`Lang.4`)}</p>
              </div><div>
              <img src="https://techcrunch.com/wp-content/uploads/2017/05/tcdisrupt-ny17-8795.jpg?w=600" alt="img"/>
              <p>{t(`Lang.5`)}</p>
              </div><div>
              <img src="https://media.wired.com/photos/603d398b2d6b6299017ee0d7/191:100/w_1280,c_limit/Sec_wallet_microsoftid_530859960.jpg" alt="img"/>
              <p>{t(`Lang.6`)}</p>
              </div><div>
              <img src="https://cdn.vox-cdn.com/thumbor/wK9jhzQsDKlrdC3t1887tDdaDLI=/0x329:2400x1586/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22342666/1283618423.jpg" alt="img"/>
              <p>{t(`Lang.7`)}</p>
              </div><div>
              <img src="https://techcrunch.com/wp-content/uploads/2020/05/NSussman_Techcrunch_Exchange_v3_GRY.jpg?w=533" alt="img"/>
              <p>{t(`Lang.8`)}</p>
              </div><div>
              <img src="https://static01.nyt.com/images/2021/03/06/us/06virus-brief-states-lede/merlin_184636716_6011b327-e805-4cb3-9628-f950973c26df-facebookJumbo.jpg" alt="img"/>
              <p>{t(`Lang.9`)}</p>
              </div><div>
              <img src="https://static01.nyt.com/images/2021/02/12/upshot/12up-medicaid/merlin_180249795_4700c199-ccce-4389-bb21-bf49a5035513-facebookJumbo.jpg" alt="img"/>
              <p>{t(`Lang.10`)}</p>
              </div><div>
              <img src="https://techcrunch.com/wp-content/uploads/2017/03/gettyimages-534213886.png?w=711" alt="img"/>
              <p>{t(`Lang.11`)}</p>
              </div><div>
              <img src="https://techcrunch.com/wp-content/uploads/2021/03/Exterior-1.jpg?w=764" alt="img"/>
              <p>{t(`Lang.12`)}</p>
              </div><div>
              <img src="https://static01.nyt.com/images/2021/02/16/well/16well-teen-vaccine/16well-teen-vaccine-facebookJumbo.jpg" alt="img"/>
              <p>{t(`Lang.13`)}</p>
              </div><div>
              <img src="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/m4i2hii3sphbr367wnlz.jpg" alt="img"/>
              <p>{t(`Lang.14`)}</p>
              </div><div>
              <img src="https://static01.nyt.com/images/2021/01/26/nyregion/00NJBIRTHCENTER-promoSTILL/00NJBIRTHCENTER-promoSTILL-facebookJumbo-v3.jpg" alt="img"/>
              <p>{t(`Lang.15`)}</p>
              </div><div>
              <img src="https://static01.nyt.com/images/2021/03/03/us/03virus-masks-1-sub/merlin_184541598_ba8df0f9-86be-43b0-93f4-8d98e4505b44-facebookJumbo.jpg" alt="img"/>
              <p>{t(`Lang.16`)}</p>
              </div><div>
              <img src="https://static01.nyt.com/images/2021/02/14/multimedia/14virus-briefing-variants-lede1/14virus-briefing-variants-lede1-facebookJumbo.jpg" alt="img"/>
              <p>{t(`Lang.17`)}</p>
              </div><div>
              <img src="https://static01.nyt.com/images/2021/03/02/us/02pandemicanniversary-callout/merlin_170404452_a14e5d33-0bf4-4346-bcf1-3a4f0eb4e307-facebookJumbo.jpg" alt="img"/>
              <p>{t(`Lang.18`)}</p>
              </div><div>
              <img src="https://ichef.bbci.co.uk/news/1024/branded_news/A60F/production/_114211524_gettyimages-1215173527.jpg" alt="img"/>
              <p>{t(`Lang.19`)}</p>
              </div><div>
              <img src="https://static01.nyt.com/images/2021/03/03/upshot/00up-private-insurance/00up-private-insurance-facebookJumbo.jpg" alt="img"/>
              <p>{t(`Lang.20`)}</p>
              </div><div>
            </div>
          
        
      </GridCardContainer>
    </MainContainer>

      <Footer />
    </>
  );
          
};
// export { Health };
const MainContainer = styled.div`
  width: 85%;
  height: auto;  
  margin-top: 53px;
  margin: auto;
  font-family: CNN, "Helvetica Neue", Helvetica, Arial, Utkal, sans-serif;

  hr {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    
      margin-bottom: -8px;
      margin-left: 0px;
      margin-top: -8px;
      width: 96%;
    
  }

  > img {
    width: 250px;
    margin-top: 50px;
  }
`;

const TopNewsContainer = styled.div`
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
    color: red;
  }

  hr {
    margin-bottom: -8px;
    margin-left: 0px;
    margin-top: -8px;
    width: 96%;
  }
`;

const TopNewsLeftPart = styled.div`
  width: 38%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 10px;

  img {
    height: 300px;
    width: 410px;
  }
`;

const TopNewsMiddlePart = styled.div`
  width: 31%;
  display: flex;
  flex-direction: column;
  height: 100%;

  hr {
    margin-bottom: 5px;
    width: 98%;
    height: 1px;
  }
`;

const TopNewsRightPart = styled.div`
  width: 30%;
  text-align: center;
  height: 100%;

  div {
    margin-bottom: 150px;
  }

  img {
    height: 150px;
    width: 250px;
  }
`;

const ImageDesc1 = styled.div`
  background-color: #e6e6e6;
  height: 160px;
  width: 200px;
  display: flex;
  font-size: 22px;
  position: absolute;
  top: 300px;
  right: 13%;
`;

const ImageDesc2 = styled.div`
  background-color: #e6e6e6;
  height: 160px;
  width: 200px;
  display: flex;
  font-size: 22px;
  position: absolute;
  top: 610px;
  right: 13%;
`;

const Headings = styled.div`
  background-color: #e5e5e5;
  font-size: 18px;
  font-weight: bold;
  color: #404040;
  border-bottom: 1px solid #d9d9d9;
  padding-left: 10px;
  height: 40px;
  display: flex;
  align-items: center;

  :hover {
    color: red;
    cursor: pointer;
  }
`;

const MoreHeadlines = styled.div`
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
    color: red;
  }

  img {
    width: 100%;
    height: 200px;
  }
`;

const HeadingWithLines = styled.div`
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
`;
const Line1 = styled.div`
  height: 4px;
  background-color: #c7c7c7;
  margin-bottom: 3px;
`;

const PaidContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 15px;

  > div {
    width: 30%;
  }

  img {
    width: 100%;
    height: 200px;
  }
`;

const CommonHealthLinks = styled.div`
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
    background-color: rgba(0, 0, 0, 0.2);
  }

  p:hover {
    cursor: pointer;
    color: red;
  }
`;

const GridCardContainer = styled.div`
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
`;

const Loading = styled.div`
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
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;



export { Health };
