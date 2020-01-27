import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PostDivDiv = styled.div`
width:100%;
margin: 10px auto;
.postBodyDiv{
  width:100%;
  h1{
  margin:0;
}
.publishDate{
  margin:0;
}
.paragraphText{
  padding: 0;
  font-size: 1em;
}
}

h2{
  font-size:1em;
}
`
const PostDiv = (props)=>{
  return(
    <PostDivDiv>
      {props.children}
    </PostDivDiv>
  )
}

//export default PostDiv