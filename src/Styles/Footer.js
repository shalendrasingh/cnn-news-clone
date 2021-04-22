import styled from 'styled-components'

export const FooterWrapper = styled.div`
  padding: 50px 0px;
  background-color: black;
  width: 100%;
`

export const FooterContentContainer = styled.div`
  width: 80%;
  margin: auto;
  color: white;
`

export const Input = styled.input`
  width: 95%;
  height: 30px;
`

export const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  > div {
    width: 16.33%;
  }

  p {
    margin: 0px;
  }
`
export const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  margin: 20px 0px;
  border-bottom: 1px solid grey;
  justify-content: space-between;
`

export const LogoSection = styled.div`
  display: flex;
  img {
    margin-right: 10px;
  }
`
export const SocialIcon = styled.div`
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: space-evenly;
  h4 {
    border-right: 1px solid grey;
    padding: 0px 20px;
  }
`

export const FooterFooter = styled.div`
  > div {
    display: flex;
    flex-wrap: wrap;
    line-height: 0px;
    p {
      margin-right: 20px;
    }
  }
`
