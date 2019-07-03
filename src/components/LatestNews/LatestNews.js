import React from 'react';
//import { Link } from 'gatsby';
import styled from 'styled-components';


const LatestNewsDiv = styled.div`
box-sizing: border-box;
width:80%;
<<<<<<< HEAD
div{
   display:grid;
    grid-template-columns: 30% 70%;
    margin-bottom:20px;
    height: 200px;
    border-bottom: 1px solid #ccc;
    img{
      width:100%;
      height:200px;
=======
.story {
  border-bottom: 1px solid #ccc;
}
div {
  display:grid;
  grid-template-columns: 1fr 3fr;
  margin-bottom: 20px;
  .storyImage {
    img {
      width: 200px;
    }
  }
  .latestNewsText {
    padding-left:20px;
    display:block;
    align-items:center;
    h1 {
      font-size: 20px;
      margin:0;
      padding-top:10px;
>>>>>>> 0dd1325bca5b18e7e6317f9db33f06b218e77f27
    }
    p {
      font-size: 18px;
      padding: 1px;
      margin-top: 2px;
    }
  }
}
   
`
const LatestNews = props =>{
  return(
    <LatestNewsDiv>{props.children}</LatestNewsDiv>
  )
};

export default LatestNews;
