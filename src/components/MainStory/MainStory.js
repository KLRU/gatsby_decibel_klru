import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components'
import Container from '../Container/Container';


const MainStoryDiv = styled.div`
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
  return(
    <MainStoryDiv>
      <Link to={`/${mainStory.tags[0].slug}/${mainStory.slug}/`}><img src={`http:${mainStory.heroImage.fluid.src}`} alt={mainStory.heroImage.title} className='latestNewsImage' /></Link>
      <Link to={`/${mainStory.tags[0].slug}/${mainStory.slug}/`}><h1>{mainStory.title}</h1></Link>
    </MainStoryDiv>
  )
};

export default MainStory;
