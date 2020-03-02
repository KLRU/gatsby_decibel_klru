import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import ContentfulVideoElement from '../PageElements/ContentfulVideoElement';

const FeaturedTopicDiv = styled.div`
display: grid;
padding:20px;
margin: 25px 0;
position:relative;
@media screen and (max-width: 930px){
  padding:10px 0;
}
.imageDiv{

}
.storyTitle{
  div{
    p{
      font-size: 18px;
    }
  }
  h4{
    margin: 0;
  }
}


`

const FeaturedTopicBlock = props =>{
  const featuredTopic=props;
  function HeroMediaDiv(){
    if(featuredTopic.associatedTopicPost.featuredVideo){
      return <ContentfulVideoElement {...featuredTopic.associatedTopicPost.featuredVideo}/>
      //return <h1>{featuredTopic.associatedTopicPost.featuredVideo.title}</h1>
    }else{
       return <img src={`http:${featuredTopic.featuredTopicImage.fluid.src}`} alt={featuredTopic.featuredTopicImage.title} />
    }
  }
  return(
    <FeaturedTopicDiv>
       <h2 className='titleHeader'>Decibel's Cover Story of the Month is: {featuredTopic.title}</h2>
      <div className='mediaDiv'>
        {/* <img src={`http:${featuredTopic.featuredTopicImage.fluid.src}`} alt={featuredTopic.featuredTopicImage.title} />  */}
        <HeroMediaDiv />
      </div>
      <div className="storyTitle">
        <Link to={`/${featuredTopic.featuredTopicTag.slug}`}>
        <div dangerouslySetInnerHTML={{__html:featuredTopic.shortTopicDescription.childMarkdownRemark.html}}></div>
        <h4>See the stories we've been working on</h4>
        </Link>

        </div>
    </FeaturedTopicDiv>
  )
}

export default FeaturedTopicBlock;