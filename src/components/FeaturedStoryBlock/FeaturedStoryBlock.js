import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components'
//import PlayButton from '../../images/PlayButtonWhite.png'
import BlackPlayButton from '../../images/BlackPlayButton.png'
import ContentfulVideoElement from '../PageElements/ContentfulVideoElement';


const FeaturedStoryDiv =styled.div`
      //margin-top: 20px;
      margin: 20px auto;
      width:80%;
      border-bottom: 1px solid #E7E9E9;
      box-shadow: 0px 2px 4px #eee;
      margin-bottom:10px;
      box-sizing:border-box;
      display:grid;
      @media screen and (max-width: 675px){
        grid-template-columns: 1fr;
      }
      position: relative;
      align-items:end;
      .mediaDiv{
        width:100%; 
        height:0;
        padding-bottom:46.25%;
        position:relative;
      }
      .mediaDiv img{
        position:absolute;
        width:100%;
        height:100%;
        border:none;
      }
      .storyTitleDiv{
        //position:absolute;
        width:100%;
        padding: 10px;
        background-color: #fff;
        h1{
          color: #000;
          margin:0;
          padding: 0;
          text-shadow: 1px 1px #003946;
          span{
            padding: 0 5px;
            img{
              width:24px;
            }
          }
        }
        p{
          color:#000;
          padding-left: 10px;
          margin-top:0;
          margin-bottom: 5px;
          //text-shadow: 1px 1px #003946;
          @media screen and (max-width: 675px){
            display:none
          }
        }
        .shortDescription{
          padding:0;
          margin:0;
          font-size: 18px;
          //text-shadow: 1px 1px #003946;
          @media screen and (max-width: 675px){
            display:none
          }
        }
      }


`

const FeaturedStoryBlock = props =>{
  const featuredStory = props;
  function HeroMediaDiv(){
    if(featuredStory.associatedPost.featuredVideo){
      return <ContentfulVideoElement {...featuredStory.associatedPost.featuredVideo}/>
    }else{
       return <img src={`http:${featuredStory.heroImage.fluid.src}`} alt={featuredStory.heroImage.title} />
    }
  }
  return(
    <FeaturedStoryDiv>
      <div className = "mediaDiv">
      <Link to={`/${featuredStory.associatedPost.tags[0].slug}/${featuredStory.associatedPost.slug}/`}>
      <HeroMediaDiv />
      </Link>
      </div>
      <div className = 'storyTitleDiv'>
      <Link to={`/${featuredStory.associatedPost.tags[0].slug}/${featuredStory.associatedPost.slug}/`}>
      <h1><span><img src={BlackPlayButton} alt={"Play Button"}/></span>{featuredStory.title}</h1>
      {/* <p>{featuredStory.storyPostDate}</p> */}
      <div className='shortDescription' dangerouslySetInnerHTML={{__html:featuredStory.shortDescription.childMarkdownRemark.html}}></div>
      </Link>
      </div>
    </FeaturedStoryDiv>
  )
}

export default FeaturedStoryBlock;