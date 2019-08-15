import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components'
import Container from '../Container/Container';
import ContentfulVideoElement from '../PageElements/ContentfulVideoElement';


const MainStoryDiv = styled.div`
  margin-top: 10px;
  border: 1px solid #E7E9E9;
  box-shadow: 0px 2px 4px #eee;
  margin-bottom:10px;
  box-sizing:border-box;
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
  .mainTitle{
    background-color:#fff;
    width:1150px;
    margin-top:-85px;
    padding: 20px 0 0 0;
    position:absolute;
     h1{
    //position:absolute;
    text-align:center;
    z-index:3;
    margin:0;
    //text-shadow: 2px 2px #000;
    color:#000;
    //padding: 10px;
  }
  p{
    text-align:center;
    margin:0;
  }
  }
 
`
const MainStory = props => {
  const mainStory = props;
  //const featuredVideo = mainStory.featuredVideo;
  function HeroDiv(){
    if(mainStory.featuredVideo.source === 'Facebook'){
      return <iframe
      src={ `https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/decibelatx/videos/${mainStory.featuredVideo.embedCode}/`}
      //title={mainStory.featuredVideo.title}
    />
    }else if(mainStory.featuredVideo.source === 'YouTube'){
      return <iframe
      src={ `https://www.youtube.com/embed/${mainStory.featuredVideo.embedCode}`}
      //title={mainStory.featuredVideo.title}
    />
    }else if(mainStory.featuredVideo.source === 'Media Manager'){
      return <iframe
      src={ `https://video.klru.tv/widget/partnerplayer/${mainStory.featuredVideo.embedCode}`}
      //title={mainStory.featuredVideo.title}
    />
    }else if(mainStory.featuredVideo.source === 'Vimeo'){
      return <iframe
      src={ `http://player.vimeo.com/video/${mainStory.featuredVideo.embedCode}`}
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
      <Link to={`/${mainStory.tags[0].slug}/${mainStory.slug}/`}><div className='mainTitle'>
        <h1>{mainStory.title}</h1>
        <p>{mainStory.publishDate}</p>
        </div></Link>
    </MainStoryDiv>
  )
};

export default MainStory;
