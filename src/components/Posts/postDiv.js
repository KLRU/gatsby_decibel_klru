import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PostDivDiv = styled.div`
width:1150px;
margin: 10px auto;
h1{
  margin:0;
}
.publishDate{
  margin:0;
}
.paragraphText{
  padding: 0 30px;
  font-size: 20px;
}
h2{
  font-size:18px;
}
`
const PostDiv = (props)=>{
  return(
    <PostDivDiv>
      {props.children}
    </PostDivDiv>
  )
}

export default PostDiv