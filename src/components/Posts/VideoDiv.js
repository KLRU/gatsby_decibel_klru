import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PostVideoDiv = styled.div`
width:1150px;
//height:600px;
margin:0 auto;
border: 1px solid #E7E9E9;
box-shadow: 0px 2px 4px #eee;
img{
  width:100%;
}
`
const VideoDiv = (props)=>{
  return(
    <PostVideoDiv>
      {props.children}
    </PostVideoDiv>
  )
}

export default VideoDiv