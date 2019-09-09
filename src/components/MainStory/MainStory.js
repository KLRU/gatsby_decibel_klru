import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components'
import Container from '../Container/Container';
import ContentfulVideoElement from '../PageElements/ContentfulVideoElement';


const MainStoryDiv = styled.div`
  margin-top: 10px;
  width:100%;
  border: 1px solid #E7E9E9;
  box-shadow: 0px 2px 4px #eee;
  margin-bottom:10px;
  box-sizing:border-box;
  display:grid;
  .videoDiv{
    width:100%; 
    height:0;
    padding-bottom:56.25%;
    position:relative;
  }
  .videoDiv iframe{
    position:absolute;
    width:100%;
    height:100%;
    border:none;
  }
  .videoDiv img{
    position:absolute;
    width:100%;
    height:100%;
    border:none;
  }
  .mainTitle{
    background-color:#fff;
    width:100%;
    margin-top:-85px;
    padding: 20px 0 0 0;
    z-index:5;
    //position:absolute;
  }
  p{
    text-align:center;
    margin:0;
  }
  h1{
    //position:absolute;
    width:100%;
    text-align:center;
    z-index:3;
    margin:0;
    //text-shadow: 2px 2px #000;
    color:#000;
    //padding: 10px;
  }
`
const MainStory = props => {
  const mainStory = props;
  //const featuredVideo = mainStory.featuredVideo;
  function HeroDiv(){
    if(mainStory.featuredVideo.source === 'Facebook'){
      return <iframe
      src={ `https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/decibelatx/videos/${mainStory.featuredVideo.embedCode}/` }
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
    
      {/* <Link to={`/${mainStory.tags[0].slug}/${mainStory.slug}/`}>
      
      </Link> */}
      <div className='videoDiv'>
      <HeroDiv />
      </div>
      <div className = 'mainTitle'>
      <Link to={`/${mainStory.tags[0].slug}/${mainStory.slug}/`}>
        <h1>{mainStory.title}</h1>
        <p>{mainStory.publishDate}</p>
      </Link>
     </div>
    </MainStoryDiv>
  )
};

export default MainStory;
