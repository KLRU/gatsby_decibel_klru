import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const FeaturedTopicDiv = styled.div`
display: grid;
align-items:end;
padding:20px;
.imageDiv{
  width:100%; 
  height:0;
  padding-bottom:56.25%;
  position:relative;
  img{
    position:absolute;
    width:100%;
    height:100%;
    border:none;
  }
  .storyTitle{
    position: absolute;

  }
}


`

const FeaturedTopicBlock = props =>{
  const featuredTopic=props;
  return(
    <FeaturedTopicDiv>
      <div className='imageDiv'>
        <img src={`http:${featuredTopic.featuredTopicImage.fluid.src}`} alt={featuredTopic.featuredTopicImage.title} />
        <h2 className="storyTitle">{featuredTopic.title}</h2>
      </div>
      
    </FeaturedTopicDiv>
  )
}

export default FeaturedTopicBlock;