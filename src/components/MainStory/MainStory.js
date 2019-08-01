import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components'
import Container from '../Container/Container';
import ContentfulVideoElement from '../PageElements/ContentfulVideoElement';


const MainStoryDiv = styled.div`
  margin-top: 10px;
  iframe{
    width:1150px;
    height: 650px;
    position:relative;
    border:0;
  }
  img{
    width:100%;
    position:relative;
  }
  h1{
    position:absolute;
    z-index:3;
    margin-top:-45px;
    color:#fff;
    padding-left: 10px;
  }
`
const MainStory = props => {
  const mainStory = props;
  //const featuredVideo = mainStory.featuredVideo;
  function HeroDiv(){
    if(mainStory.featuredVideo){
      return <iframe
      src={ `https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/decibelatx/videos/${mainStory.featuredVideo.embedCode}/`}
      //title={mainStory.featuredVideo.title}
    />
    }else{
      return <img src={`http:${mainStory.heroImage.fluid.src}`} alt={mainStory.heroImage.title} className='latestNewsImage' />
    }
  }
  return(
    <MainStoryDiv>
      <Link to={`/${mainStory.tags[0].slug}/${mainStory.slug}/`}>
        </Link>
        <HeroDiv />
      <Link to={`/${mainStory.tags[0].slug}/${mainStory.slug}/`}><h1>{mainStory.title}</h1></Link>
    </MainStoryDiv>
  )
};

export default MainStory;
