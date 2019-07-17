import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PostVideoDiv = styled.div`
width:1150px;
//height:600px;
margin:0 auto;
`
const VideoDiv = (props)=>{
  return(
    <PostVideoDiv>
      {props.children}
    </PostVideoDiv>
  )
}

export default VideoDiv