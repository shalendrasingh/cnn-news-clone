import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import styled from 'styled-components'
import { GrPrevious, GrNext } from 'react-icons/gr'

import { getentertainmentAxios } from '../../Redux/Entertainment/action'

import { Footer } from '../Footer/Footer'
import CircularProgress from '@material-ui/core/CircularProgress'

// import 'font-awesome/css/font-awesome.min.css'

export const EntertainmentCard = () => {
  const dispatch = useDispatch()
  const { publishedAt } = useParams()
  const { entertainmentNews, isLoading } = useSelector(
    (state) => state.entertainment
  )

  const history = useHistory()

  let a = entertainmentNews.map((item) => publishedAt === item.publishedAt)

  let count = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== true) count++
    else break
  }

  const goToLink = (data) => {
    history.push(`/entertainment/${data}`)
  }
  useEffect(() => {
    dispatch(getentertainmentAxios())
  }, [dispatch])

  return isLoading ? (
    <div
      style={{
        position: 'relative',
        marginTop: '100px',
        fontFamily: 'serif',
      }}
    >
      {/* <h1 style={{ textAlign: 'center' }}>HAPPINESS</h1> */}
      <CircularProgress
        color='primary'
        size={100}
        left={-20}
        top={10}
        status={'loading'}
        style={{ marginLeft: '46%', marginTop: '100px' }}
      />
      <p style={{ textAlign: 'center', fontSize: '20px' }}>Loading...</p>
    </div>
  ) : (
    <>
      {entertainmentNews.map((item) =>
        publishedAt === item.publishedAt ? (
          <BusinessWrapper key={item}>
            <BusinessLeft>
              <p>
                <Arrow
                  onClick={() =>
                    goToLink(entertainmentNews[count - 1].publishedAt)
                  }
                />
                <Arrow
                  onClick={() =>
                    goToLink(entertainmentNews[count - 1].publishedAt)
                  }
                />
              </p>
            </BusinessLeft>
            <BusinessMiddle>
              <h1>{item.title}</h1>

              <Flexs>
                <BusinessMiddleTop>
                  <div>
                    <img src={item.urlToImage} alt={item.title} />
                  </div>
                  <br></br>
                  <BusinessPara>
                    <p>
                      <span>(CNN) -</span> {item.description}
                    </p>
                    <p>{item.content}</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Venenatis urna cursus eget nunc scelerisque
                      viverra mauris. Viverra vitae congue eu consequat ac felis
                      donec et. Sit amet venenatis urna cursus eget nunc
                      scelerisque viverra. Ut pharetra sit amet aliquam id diam
                      maecenas ultricies. Quam id leo in vitae turpis massa sed.
                      Quis commodo odio aenean sed adipiscing diam. Elementum
                      curabitur vitae nunc sed velit dignissim sodales ut eu.
                      Neque vitae tempus quam pellentesque nec nam. Morbi
                      tincidunt augue interdum velit euismod in. Parturient
                      montes nascetur ridiculus mus mauris. Velit aliquet
                      sagittis id consectetur purus. Sollicitudin tempor id eu
                      nisl.
                    </p>
                    <p>
                      Egestas purus viverra accumsan in. Ullamcorper dignissim
                      cras tincidunt lobortis feugiat vivamus at. Felis bibendum
                      ut tristique et egestas quis ipsum. Malesuada nunc vel
                      risus commodo viverra maecenas accumsan. Enim ut sem
                      viverra aliquet eget sit. Venenatis urna cursus eget nunc
                      scelerisque. Purus non enim praesent elementum. Viverra
                      adipiscing at in tellus integer. Cras tincidunt lobortis
                      feugiat vivamus. Libero nunc consequat interdum varius. At
                      varius vel pharetra vel turpis nunc eget. Adipiscing at in
                      tellus integer feugiat scelerisque varius morbi. Tortor
                      aliquam nulla facilisi cras fermentum odio eu feugiat.
                      Nullam non nisi est sit amet facilisis magna etiam tempor.
                      Nunc eget lorem dolor sed viverra ipsum nunc aliquet.
                    </p>
                    <p>
                      Est placerat in egestas erat imperdiet sed euismod. Nibh
                      praesent tristique magna sit amet. Vitae ultricies leo
                      integer malesuada nunc vel risus commodo. Netus et
                      malesuada fames ac turpis egestas. Sagittis aliquam
                      malesuada bibendum arcu vitae elementum. Aliquet risus
                      feugiat in ante metus dictum at. Quis varius quam quisque
                      id diam vel. Feugiat vivamus at augue eget arcu dictum
                      varius duis at. Lacus sed viverra tellus in hac habitasse
                      platea dictumst. Sagittis vitae et leo duis ut diam quam.
                      Id diam maecenas ultricies mi. Id ornare arcu odio ut.
                    </p>
                    <p>
                      Eget arcu dictum varius duis at consectetur lorem donec
                      massa. Scelerisque purus semper eget duis at tellus at.
                      Sed lectus vestibulum mattis ullamcorper velit.
                      Pellentesque habitant morbi tristique senectus et. Enim
                      tortor at auctor urna nunc. Quam adipiscing vitae proin
                      sagittis nisl. Viverra orci sagittis eu volutpat. Orci
                      nulla pellentesque dignissim enim sit amet. Nisi
                      scelerisque eu ultrices vitae auctor eu augue ut lectus.
                      Neque viverra justo nec ultrices dui sapien eget. Egestas
                      pretium aenean pharetra magna ac. Adipiscing at in tellus
                      integer feugiat scelerisque. Mattis pellentesque id nibh
                      tortor id aliquet. Ultricies leo integer malesuada nunc
                      vel risus. Augue lacus viverra vitae congue eu consequat
                      ac. Ridiculus mus mauris vitae ultricies leo integer
                      malesuada. Orci sagittis eu volutpat odio facilisis mauris
                      sit amet massa.
                    </p>
                    <p>
                      Neque laoreet suspendisse interdum consectetur libero id
                      faucibus nisl tincidunt. Vivamus arcu felis bibendum ut
                      tristique et egestas quis ipsum. Maecenas pharetra
                      convallis posuere morbi leo urna molestie. Quis commodo
                      odio aenean sed adipiscing diam donec adipiscing. Aliquet
                      enim tortor at auctor. Viverra suspendisse potenti nullam
                      ac. Senectus et netus et malesuada fames ac turpis egestas
                      sed. Adipiscing diam donec adipiscing tristique. Lobortis
                      mattis aliquam faucibus purus in massa. Cursus euismod
                      quis viverra nibh cras pulvinar mattis nunc sed. Quam
                      nulla porttitor massa id neque aliquam. Sit amet purus
                      gravida quis blandit turpis cursus. Eu mi bibendum neque
                      egestas congue quisque. Sodales neque sodales ut etiam sit
                      amet. Nunc sed velit dignissim sodales ut eu sem integer.
                    </p>
                  </BusinessPara>
                </BusinessMiddleTop>
                <BusinessMiddleRight>
                  <h4>TOP STORIES</h4>
                  {entertainmentNews.slice(0, 4).map((item, index) => (
                    <Trending
                      key={index}
                      onClick={() => goToLink(item.publishedAt)}
                    >
                      <img src={item.urlToImage} alt={item.title}></img>
                      <p>{item.title}</p>
                    </Trending>
                  ))}

                  <h4>PAID CONTENT</h4>
                  {entertainmentNews.slice(10, 13).map((item, index) => (
                    <Paid
                      key={index}
                      onClick={() => goToLink(item.publishedAt)}
                    >
                      <img src={item.urlToImage} alt={item.title}></img>
                      <p>{item.title}</p>
                    </Paid>
                  ))}
                </BusinessMiddleRight>
              </Flexs>
            </BusinessMiddle>
            <BusinessRight>
              <p>
                <Next
                  onClick={() =>
                    goToLink(entertainmentNews[count + 1].publishedAt)
                  }
                />
                <Next
                  onClick={() =>
                    goToLink(entertainmentNews[count + 1].publishedAt)
                  }
                />
              </p>
            </BusinessRight>
          </BusinessWrapper>
        ) : (
          ''
        )
      )}
      <Footer />
    </>
  )
}

const BusinessWrapper = styled.div`
  /* border: 1px solid black; */
  display: flex;
  font-family: inherit;
`
const BusinessRight = styled.div`
  /* border: 1px solid black; */
  width: 10%;
  p {
    margin-top: 300px;
    margin-left: 3%;
    position: fixed;
  }
`
const BusinessPara = styled.div`
  /* border: 1px solid black; */
`
const BusinessLeft = styled.div`
  /* border: 1px solid black; */
  width: 10%;
  p {
    margin-top: 300px;
    margin-left: 3%;
    position: fixed;
  }
`
const BusinessMiddle = styled.div`
  /* border: 1px solid black; */
  width: 80%;
`

const BusinessMiddleTop = styled.div`
  /* border: 1px solid black; */

  width: 70%;
  img {
    width: 100%;
    height: 400px;
  }
  p {
    font-size: 18px;
    color: #141313;
    line-height: 30px;
  }
`

const Arrow = styled(GrPrevious)`
  color: red;
  transform: scale(2);
  margin-top: 10%;
`

const Next = styled(GrNext)`
  color: red;
  transform: scale(2);
  margin-top: 10%;
`

const BusinessMiddleRight = styled.div`
  /* border: 1px solid black; */
  width: 25%;
  height: 400px;
  h4 {
    border-bottom: 3px solid #26f126;
    padding-bottom: 2px;
  }
`
const Flexs = styled.div`
  display: flex;
  gap: 10px;
`
const Trending = styled.div`
  /* border: 1px solid black; */

  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const Paid = styled.div`
  img {
    width: 100%;
    height: 150px;
  }
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const PaidWrapper = styled.div`
  border: 1px solid black;
`
