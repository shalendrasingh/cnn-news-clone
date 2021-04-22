import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";
import { Navbar } from "../Navbar/Navbar";

 const SportsLinksPage = () => {
  const { publishedAt } = useParams();
  const { sportsNews } = useSelector((state) => state.sports);
  const history = useHistory();

  let a = sportsNews.map((item) => publishedAt === item.publishedAt);
console.log("from sports links page")
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== true) count++;
    else break;
  }
console.log("from article page")
  const goToLink = (data) => {
    history.push(`/sports/${data}`);
  };

  return (
    <>
      <Navbar />

      {sportsNews.map((item) =>
        publishedAt === item.publishedAt ? (
          <NewsWrapper>
            <h1>{item.title}</h1>
            <h3>By {item.author}, CNN</h3>
            <p>Updated {item.publishedAt}</p>
            <div>
              <img src={item.urlToImage} alt="logo" />
            </div>
            <br></br>
            <HealthStory>
              <p>
                <span>(CNN) -</span> {item.description}
              </p>
              <p>{item.content}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Venenatis urna cursus eget nunc scelerisque viverra mauris.
                Viverra vitae congue eu consequat ac felis donec et. Sit amet
                venenatis urna cursus eget nunc scelerisque viverra. Ut pharetra
                sit amet aliquam id diam maecenas ultricies. Quam id leo in
                vitae turpis massa sed. Quis commodo odio aenean sed adipiscing
                diam. Elementum curabitur vitae nunc sed velit dignissim sodales
                ut eu. Neque vitae tempus quam pellentesque nec nam. Morbi
                tincidunt augue interdum velit euismod in. Parturient montes
                nascetur ridiculus mus mauris. Velit aliquet sagittis id
                consectetur purus. Sollicitudin tempor id eu nisl.
              </p>
              <p>
                Egestas purus viverra accumsan in. Ullamcorper dignissim cras
                tincidunt lobortis feugiat vivamus at. Felis bibendum ut
                tristique et egestas quis ipsum. Malesuada nunc vel risus
                commodo viverra maecenas accumsan. Enim ut sem viverra aliquet
                eget sit. Venenatis urna cursus eget nunc scelerisque. Purus non
                enim praesent elementum. Viverra adipiscing at in tellus
                integer. Cras tincidunt lobortis feugiat vivamus. Libero nunc
                consequat interdum varius. At varius vel pharetra vel turpis
                nunc eget. Adipiscing at in tellus integer feugiat scelerisque
                varius morbi. Tortor aliquam nulla facilisi cras fermentum odio
                eu feugiat. Nullam non nisi est sit amet facilisis magna etiam
                tempor. Nunc eget lorem dolor sed viverra ipsum nunc aliquet.
              </p>
              <p>
                Est placerat in egestas erat imperdiet sed euismod. Nibh
                praesent tristique magna sit amet. Vitae ultricies leo integer
                malesuada nunc vel risus commodo. Netus et malesuada fames ac
                turpis egestas. Sagittis aliquam malesuada bibendum arcu vitae
                elementum. Aliquet risus feugiat in ante metus dictum at. Quis
                varius quam quisque id diam vel. Feugiat vivamus at augue eget
                arcu dictum varius duis at. Lacus sed viverra tellus in hac
                habitasse platea dictumst. Sagittis vitae et leo duis ut diam
                quam. Id diam maecenas ultricies mi. Id ornare arcu odio ut.
              </p>
              <p>
                Eget arcu dictum varius duis at consectetur lorem donec massa.
                Scelerisque purus semper eget duis at tellus at. Sed lectus
                vestibulum mattis ullamcorper velit. Pellentesque habitant morbi
                tristique senectus et. Enim tortor at auctor urna nunc. Quam
                adipiscing vitae proin sagittis nisl. Viverra orci sagittis eu
                volutpat. Orci nulla pellentesque dignissim enim sit amet. Nisi
                scelerisque eu ultrices vitae auctor eu augue ut lectus. Neque
                viverra justo nec ultrices dui sapien eget. Egestas pretium
                aenean pharetra magna ac. Adipiscing at in tellus integer
                feugiat scelerisque. Mattis pellentesque id nibh tortor id
                aliquet. Ultricies leo integer malesuada nunc vel risus. Augue
                lacus viverra vitae congue eu consequat ac. Ridiculus mus mauris
                vitae ultricies leo integer malesuada. Orci sagittis eu volutpat
                odio facilisis mauris sit amet massa.
              </p>
              <p>
                Neque laoreet suspendisse interdum consectetur libero id
                faucibus nisl tincidunt. Vivamus arcu felis bibendum ut
                tristique et egestas quis ipsum. Maecenas pharetra convallis
                posuere morbi leo urna molestie. Quis commodo odio aenean sed
                adipiscing diam donec adipiscing. Aliquet enim tortor at auctor.
                Viverra suspendisse potenti nullam ac. Senectus et netus et
                malesuada fames ac turpis egestas sed. Adipiscing diam donec
                adipiscing tristique. Lobortis mattis aliquam faucibus purus in
                massa. Cursus euismod quis viverra nibh cras pulvinar mattis
                nunc sed. Quam nulla porttitor massa id neque aliquam. Sit amet
                purus gravida quis blandit turpis cursus. Eu mi bibendum neque
                egestas congue quisque. Sodales neque sodales ut etiam sit amet.
                Nunc sed velit dignissim sodales ut eu sem integer.
              </p>
              <p>
                Scelerisque eu ultrices vitae auctor eu. Etiam non quam lacus
                suspendisse faucibus interdum posuere lorem. Aliquet bibendum
                enim facilisis gravida neque convallis. Viverra vitae congue eu
                consequat ac. Id nibh tortor id aliquet lectus. Praesent semper
                feugiat nibh sed. Est ultricies integer quis auctor elit sed. Ut
                pharetra sit amet aliquam id. Aliquam sem et tortor consequat.
                Pretium fusce id velit ut tortor. Augue lacus viverra vitae
                congue eu consequat ac felis.
              </p>
            </HealthStory>

            <NextStoryDiv>
              <div>
                <i
                  class="fa fa-arrow-right"
                  onClick={() => goToLink(sportsNews[count + 1].publishedAt)}
                ></i>
              </div>
              <div>
                <p>{sportsNews[count + 1].title}</p>
                <span>Next Story</span>
              </div>
            </NextStoryDiv>
          </NewsWrapper>
        ) : (
          ""
        )
      )}
    </>
  );
};


const NewsWrapper = styled.div`
  width: 80%;
  height: auto;
  margin: auto;

  h1 {
    font-size: 42px;
    color: #262626;
  }

  > div > img {
    height: 600px;
    width: 80%;
  }

  > h3 {
    margin-top: -10px;
    color: #737373;
  }

  > p {
    margin-top: -10px;
    font-size: 16px;
    color: #737373;
    margin-bottom: 40px;
  }
`;

const HealthStory = styled.div`
  width: 80%;

  p {
    font-size: 18px;
    color: #262626;
    line-height: 30px;
  }

  span {
    font-weight: bold;
  }
`;

const NextStoryDiv = styled.div`
  height: 120px;
  width: 340px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  margin-left: 874px;
  margin-top: -2000px;
  display: flex;
  flex-direction: row-reverse;

  div:nth-child(1) {
    background-color: #e6e6e6;
    cursor: pointer;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div:nth-child(1):hover {
    color: white;
    background-color: #8c8c8c;
  }

  div:nth-child(2) {
    height: 99%;
    width: 300px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    display: flex;
    display: none;
    animation-duration: 1s;
    animation-name: slidein;
    font-weight: bold;

    @keyframes slidein {
      from {
        margin-left: 20%;
        width: 100%;
      }

      to {
        margin-left: 0%;
        width: 100%;
      }
    }

    span {
      position: absolute;
      bottom: 10px;
      right: 60px;
      color: red;
      font-weight: bold;
      text-decoration: underline;
    }

    p {
      padding-left: 10px;
      color: rgb(102, 102, 102);
    }
  }

  div:nth-child(1):hover + div:nth-child(2) {
    display: block;
    transition-duration: 0.1s;
    transition-timing-function: ease-in;
  }
`
export {SportsLinksPage}