import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PostBodyDiv = styled.div`
width:100%;
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
const PostDivBody = (props)=>{
  return(
    <PostBodyDiv>
       <div>
        <h1>{props.title}</h1>
        <p className='publishDate'>{props.publishDate}</p>
        <p className='paragraphText' dangerouslySetInnerHTML={{__html:props.body.childMarkdownRemark.html}}></p>
        </div>
    </PostBodyDiv>
  )
}

export default PostDivBody