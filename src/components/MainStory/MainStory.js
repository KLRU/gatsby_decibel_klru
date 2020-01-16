import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components'
import PlayButton from '../../images/PlayButtonWhite.png'
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
  //grid-template-columns: 70% 30%;
  @media screen and (max-width: 675px){
    grid-template-columns: 1fr;
  }
  position: relative;
  align-items:end;
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
    //background-color:rgba(0, 57, 70, 0.75);
    width:100%;
    //margin-bottom: 0;
    //margin-top: -50px;
    padding: 20px 0 0 0;
    z-index:200;
    position:absolute;
    h1{
      //position:absolute;
      //width:100%;
      text-align:left;
      z-index:3;
      margin:0;
      //text-shadow: 2px 2px #000;
      color:#fff;
      padding: 0 10px;
      span{
        padding: 0 5px;
        img{
          width:24px;
        }
      }
    }
    p{
      text-align:left;
      padding: 0 24px;
      color:#fff;
      margin:0;
    }
    .bodyParagraph{
      margin:0;
      color:#fff;
      padding: 10px 0;
    }
  }
 
 

`
const MainStory = props => {
  const mainStory = props;
  function HeroDiv(){
    return <img src={`http:${mainStory.heroImage.fluid.src}`} alt={mainStory.heroImage.title} />
  }
  //const featuredVideo = mainStory.featuredVideo;
  // function HeroDiv(){
  //   if(mainStory.featuredVideo.source === 'Facebook'){
  //     return <iframe
  //     src={ `https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/decibelatx/videos/${mainStory.featuredVideo.embedCode}/` }
  //     //title={mainStory.featuredVideo.title}
  //   />
  //   }else if(mainStory.featuredVideo.source === 'YouTube'){
  //     return <iframe
  //     src={ `https://www.youtube.com/embed/${mainStory.featuredVideo.embedCode}`}
  //     //title={mainStory.featuredVideo.title}
  //   />
  //   }else if(mainStory.featuredVideo.source === 'Media Manager'){
  //     return <iframe
  //     src={ `https://video.klru.tv/widget/partnerplayer/${mainStory.featuredVideo.embedCode}`}
  //     //title={mainStory.featuredVideo.title}
  //   />
  //   }else if(mainStory.featuredVideo.source === 'Vimeo'){
  //     return <iframe
  //     src={ `http://player.vimeo.com/video/${mainStory.featuredVideo.embedCode}`}
  //     //title={mainStory.featuredVideo.title}
  //   />
  //   }else{
  //     return <img src={`http:${mainStory.heroImage.fluid.src}`} alt={mainStory.heroImage.title} className='latestNewsImage' />
  //   }
  // }
  return(
    <MainStoryDiv>
      <div className='videoDiv'>
      <Link to={`/${mainStory.tags[0].slug}/${mainStory.slug}/`}>
      <HeroDiv />
      </Link>
      </div>
      <div className = 'mainTitle'>
      <Link to={`/${mainStory.tags[0].slug}/${mainStory.slug}/`}>
        <h1><span><img src={PlayButton}/></span>{mainStory.title}</h1>
        
        <p className="dateParagraph">{mainStory.publishDate}</p>
        <p className="bodyParagraph" dangerouslySetInnerHTML={{__html:mainStory.body.childMarkdownRemark.excerpt}}></p>
      </Link>
     </div>
    </MainStoryDiv>
  )
};

//export default MainStory;
