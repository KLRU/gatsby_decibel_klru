import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components'
import PlayButton from '../../images/PlayButtonWhite.png'

const FeaturedStoryDiv =styled.div`
      margin-top: 10px;
      width:100%;
      border: 1px solid #E7E9E9;
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
        padding-bottom:56.25%;
        position:relative;
      }
      .mediaDiv img{
        position:absolute;
        width:100%;
        height:100%;
        border:none;
      }
      .storyTitleDiv{
        position:absolute;
        width:100%;
        padding: 10px;
        h1{
          color: #fff;
          margin:0;
          padding: 0;
          span{
            padding: 0 5px;
            img{
              width:24px;
            }
          }
        }
        p{
          color:#fff;
          padding-left: 10px;
          margin-top: 5px;
        }
        .shortDescription{
          padding:0;
          margin:0;
          font-size: 18px;
        }
      }


`

const FeaturedStoryBlock = props =>{
  const featuredStory = props;
  function HeroMediaDiv(){
    return <img src={`http:${featuredStory.heroImage.fluid.src}`} alt={featuredStory.heroImage.title} />
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
      <h1><span><img src={PlayButton}/></span>{featuredStory.title}</h1>
      <p>{featuredStory.storyPostDate}</p>
      <p className='shortDescription' dangerouslySetInnerHTML={{__html:featuredStory.shortDescription.childMarkdownRemark.html}}></p>
      </Link>
      </div>
    </FeaturedStoryDiv>
  )
}

export default FeaturedStoryBlock;