import styled from 'styled-components'

export const StickyBar = styled.div `
// position: fixed;
width:72%;
margin: auto;
background-color: white;
`
export const Top = styled.div `
border-bottom: 1px solid grey;
`
export const Input = styled.input `
width:90%;
height: 45px;
border:1px solid grey;
position: relative;
`
export const SearchButton = styled.button `
height: 35px;
width:4%;
margin-top:50px;
background-color: red;
border: none;
`

export const SearchContainer = styled.div `
display: flex;
align-items: center;
`

export const StoryType = styled.div `
width:45%;
margin:20px 55%;
display: flex;
justify-content: space-evenly;
align-items: center;
h3 {
    border-bottom: 1px solid red;
}
`

export const NewsContainer = styled.div `
display:flex;
width: 80%;
margin: auto;
`
export const Categories = styled.div `
width: 30%;
margin: 20px;
font-size: 18px;
`

export const News = styled.div `
width: 90%;
display: flex;
border-top: 1px solid grey;
margin:20px 0px;
padding:20px;
input {
    margin: 20px 0px;
    padding:10px;
}
img {
    width: 250px;
    height:200px;
    padding: 10px 10px 10px 0px;
}
h2 {
    margin-top: 0;
}

div p {
    height: 80px;
    overflow: hidden;
}
`