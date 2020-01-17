import React from 'react';
//import { Link } from 'gatsby';
import styled from 'styled-components';

const FeaturedTagCardDiv= styled.div`
  width:100%;
  margin:0 auto;
  border: 1px solid #E7E9E9;
  box-shadow: 0px 2px 3px #eee;
  padding:5px;
  display:grid;
  grid-template-columns: 70% 30%;
  @media screen and (max-width: 675px){
    grid-template-columns: 1fr;
  }
  img{
    width:100%;
    //position:relative;
  }
  p{
    //position:absolute;
    color:#000;
    //margin-top: -40px;
    font-size: 25px;
    text-align:center;
  }
`
const FeaturedTagDiv = props => {
  const featuredStory = props;
  //const featuredVideo = mainStory.featuredVideo;
  function HeroDiv(){
    if(featuredStory.featuredVideo.source === 'Facebook'){
      return <iframe
      src={ `https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/decibelatx/videos/${featuredStory.featuredVideo.embedCode}/` }
      //title={featuredStory.featuredVideo.title}
    />
    }else if(featuredStory.featuredVideo.source === 'YouTube'){
      return <iframe
      src={ `https://www.youtube.com/embed/${featuredStory.featuredVideo.embedCode}`}
      //title={featuredStory.featuredVideo.title}
    />
    }else if(featuredStory.featuredVideo.source === 'Media Manager'){
      return <iframe
      src={ `https://video.klru.tv/widget/partnerplayer/${featuredStory.featuredVideo.embedCode}`}
      //title={featuredStory.featuredVideo.title}
    />
    }else if(featuredStory.featuredVideo.source === 'Vimeo'){
      return <iframe
      src={ `http://player.vimeo.com/video/${featuredStory.featuredVideo.embedCode}`}
      //title={featuredStory.featuredVideo.title}
    />
    }else{
      return <img src={`http:${featuredStory.heroImage.fluid.src}`} alt={featuredStory.heroImage.title} className='latestNewsImage' />
    }
  }
  return (
    <FeaturedTagCardDiv>
      {/* <img src={props.heroImage.fluid.src} alt={props.heroImage.title} />
      <Link to={`/${props.tag}/${props.slug}`}><p>{props.title}</p></Link> */}
      {props.children}
      {/* <div className='videoDiv'>
      <HeroDiv />
      </div>
      <div className = 'mainTitle'>
      <Link to={`/${featuredStory.tags[0].slug}/${featuredStory.slug}/`}>
        <h1>{featuredStory.title}</h1>
        <p class="dateParagraph">{featuredStory.publishDate}</p>
        <p class="bodyParagraph" dangerouslySetInnerHTML={{__html:featuredStory.body.childMarkdownRemark.excerpt}}></p>
      </Link>
     </div> */}
    </FeaturedTagCardDiv>
  )
};

//export default FeaturedTagDiv;
