import styled from 'styled-components'

export const Wrapper = styled.div `
width: 70%;
margin: 50px auto;
position: relative;
`
export const FloatingContainer = styled.div `
position: absolute;
padding:10px;
top:50px;
width:40%; 
height:300px; 
background-color:white;
`

export const FlexBox = styled.div `
display: flex;
flex-wrap:wrap;
width:75%;
padding:20px;
margin:20px auto;
>div img {
    width: 100%;
    height:150px;
}
> div {
    width: 21%;
    margin-top:20px;
    padding:0px 20px;
}
> div:nth-of-type(n+2) {
    border-left: 1px solid grey
}
p{
    color: grey;
}
`
export const MenuWrapper = styled.div `
background-color: black;
// background: none;
padding-top:20px;
border-top:1px solid grey;
background-repeat: no-repeat;
background-size: 100% 100%;
height:100vh;
color: white;
text-align:center;
h1{
    font-size:40px;
}
h1: hover {
    transform : scale(1.3);
    transition: 0.5s ease;
}
`

export const PhotographyBlockContainer = styled.div `
width:50%;
border-right: 1px solid grey;
padding:10px 20px 10px 0px;
img {
    width:100%;
    height:50%;
    padding:10px 20px 10px 0px;
}
`

export const CategoryWrapper = styled.div `
width:60%;
height: 250px;
border-top: 1px solid grey;
margin:20px auto;
display:flex;
justify-content: space-between;
align-items: center;
div {
    width: 50%;
    height: 180px;
    padding: 0px 20px 0px 0px;
}
img {
    width:350px;
    height:180px;
}
h1, p {
    text-align:center;
}
`

export const Relative = styled.div `
position: relative;
`

export const AbsoluteNews = styled.div `
position:absolute;
top: 25%;
left: 25%;
margin: auto;
width: 40%;
color: white;

h1 {
    font-size: 40px;
}
`