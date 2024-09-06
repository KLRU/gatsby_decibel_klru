import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeroBox = styled.div`
  display:grid;
  margin: 30px auto;
  grid-template-columns: 70% 30%; 
  grid-gap:10px;
  width:100%;
  max-width:1200px;
    @media screen and (max-width: 1050px){
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
  @media screen and (max-width: 750px){
    grid-template-columns: 1fr;
  }
  .mainStory{
    display:grid;
    width:100%; 
    height:0;
    padding-bottom: 54.5%;
    position:relative;
    @media screen and (max-width: 1050px){
      width:100%; 
      height:0;
      padding-bottom: 54.9%;
      position:relative;
    }
  }
  .mainStory img{
    position:absolute;
    width:100%;
    height:100%;
    border:none;
  }

  .storyText{
    position: absolute;
    bottom: 0;
    width:100%;
    padding-left:10px;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .mainStory h2{
    color: #fff;
    text-shadow: 1px 1px 2px #000;
    padding: 0 10px;
    margin:0;
  }
  .excerpt{
    padding: 0 10px 5px 10px;
    margin:0;
    color: #fff;
    text-shadow: 1px 1px 2px #000;
  }

  .excerpt p{
    margin: 0;
  }

  .sideColumn{
    display:grid;
    align-content: center;
    grid-gap: 10px;
     @media screen and (max-width: 1050px){
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 750px){
    grid-template-columns: 1fr;
  }
  }
  .sideStory h2{
    color: #fff;
    text-shadow: 1px 1px 2px #000;
    padding: 0 10px;
    margin:0;
    font-size: 16px;
  }
  .sideStory{
    width:100%; 
    height:0;
    padding-bottom:62.25%;
    position:relative;
  }
  .sideStory img{
    position:absolute;
    width:100%;
    height:100%;
    border:none;
  }
`

class HomepageHero extends React.Component{
  render(){
    const pageContent = this.props;
    return(
      <div>
      <HeroBox>
      <div className="mainStory" id='mainContent'tabindex="0">
      <Link to={`${pageContent.mainStory.tags[0].slug}/${pageContent.mainStory.slug}/`}>
        <img src={`https:${pageContent.mainStory.heroImage.file.url}`} alt={pageContent.mainStory.heroImage.description} />
        <div className='storyText'>
        <h2>{pageContent.mainStory.title}</h2>
        {/* <div className='excerpt' dangerouslySetInnerHTML={{__html:pageContent.mainStory.body.childMarkdownRemark.excerpt}}></div>  */}
        
        <div className='excerpt' dangerouslySetInnerHTML={{__html:pageContent.mainStory.excerpt}}></div>
        </div>
        </Link>
      </div>
      <div className='sideColumn'>
      <div className='sideStory'>
      <Link to={`${pageContent.sideStories[0].tags[0].slug}/${pageContent.sideStories[0].slug}/`}>
        <img src={`https:${pageContent.sideStories[0].heroImage.file.url}`} alt={pageContent.sideStories[0].heroImage.description} /> 
        <div className='storyText' tabindex="0">
        <h2 >{pageContent.sideStories[0].title}</h2>
        {/* <div className='excerpt' dangerouslySetInnerHTML={{__html:pageContent.sideStories[0].body.childMarkdownRemark.excerpt}}></div>  */}
        <div className='excerpt' dangerouslySetInnerHTML={{__html:pageContent.sideStories[0].excerpt}}></div>
        </div>
        </Link>
      </div>
      <div className='sideStory'>
      <Link to={`${pageContent.sideStories[1].tags[0].slug}/${pageContent.sideStories[1].slug}/`}>
        <img src={`https:${pageContent.sideStories[1].heroImage.file.url}`} alt={pageContent.sideStories[1].title} /> 
        <div className='storyText' tabindex="0">
        <h2>{pageContent.sideStories[1].title}</h2>
        {/* <div className='excerpt' dangerouslySetInnerHTML={{__html:pageContent.sideStories[1].body.childMarkdownRemark.excerpt}}></div> */}
        <div className='excerpt' dangerouslySetInnerHTML={{__html:pageContent.sideStories[1].excerpt}}></div>
        </div>
      </Link>
      </div>
      </div>
    </HeroBox>
    </div>
    )
  }
}

export default HomepageHero;