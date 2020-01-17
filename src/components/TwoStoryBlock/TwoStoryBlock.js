import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const TwoStoryBlockDiv = styled.div`
  width:100%;
  margin: 50px 0;
  display:grid;
  grid-gap: 5px 5px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  
`
const PostDiv = styled.div`
  width:100%; 
  display: grid;
  align-items: end;
  justify-content: end;
  height:0;
  padding-bottom:56.25%;
  position:relative;
  img{
    position:absolute;
    width:100%;
    height:100%;
    border:none;
  }
 
  h2{
    position:absolute;
    padding-left:10px;
    margin-bottom:5px;
    color:#fff;
    text-shadow: 1px 1px #003946;
  }
`

const TwoStoryBlock = props =>{
  const twoStory = props;
  const twoStoryPosts = twoStory.secondaryFeaturedPost
  return(
    <div>
    <TwoStoryBlockDiv>
      {twoStoryPosts.map((twoStoryPost)=>( 
      <Link to={`${twoStoryPost.tags[0].slug}/${twoStoryPost.slug}/`}>
        <PostDiv>
       
        <img src={`http:${twoStoryPost.heroImage.fluid.src}`} alt={twoStoryPost.heroImage.title} />
       <h2>{twoStoryPost.title}</h2>
       
        </PostDiv></Link>
      ))}
    </TwoStoryBlockDiv>
    </div>
  )
}

export default TwoStoryBlock;