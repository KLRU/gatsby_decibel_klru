import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const FeaturedTopicDiv = styled.div`
display: grid;
padding:20px;
margin: 25px 0;
@media screen and (max-width: 930px){
  padding:10px 0;
}
.imageDiv{
  width:100%; 
  display:grid;
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
  .storyTitle{
    position: absolute;
    h2{
    color: #fff;
    text-shadow: 1px 1px #003946;
    padding-left:10px;
    margin-bottom:5px;
    }
    p{
    color: #fff;
    text-shadow: 1px 1px #003946;
    padding-left: 10px;
    margin: 0 0 10px 0;
    p{
      padding:0;
      margin:0;
    }
    }
  }
}


`

const FeaturedTopicBlock = props =>{
  const featuredTopic=props;
  return(
    <FeaturedTopicDiv>
      <div className='imageDiv'>
        <img src={`http:${featuredTopic.featuredTopicImage.fluid.src}`} alt={featuredTopic.featuredTopicImage.title} />
        <div className="storyTitle">
        <h2>{featuredTopic.title}</h2>
        <p dangerouslySetInnerHTML={{__html:featuredTopic.shortTopicDescription.childMarkdownRemark.html}}></p> </div>
      </div>
    </FeaturedTopicDiv>
  )
}

export default FeaturedTopicBlock;