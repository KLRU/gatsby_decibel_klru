import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components'
import Container from '../Container/Container';


const SecondaryStoryDiv = styled.div`
  display:grid;
  img{
    width:100%;
    height:350px;
    position:relative;
  }
  h2{
    position:absolute;
    margin-top: -40px;
    color:#fff;
    padding-left:20px;
  }
`
const SecondaryStory = props => {
  const secondaryStory = props;
  return (
    <SecondaryStoryDiv>
      <div>
      <Link to={`/${secondaryStory.tags[0].slug}/${secondaryStory.slug}`}><img src={`http:${secondaryStory.heroImage.fluid.src}`} alt={secondaryStory.heroImage.title} className='latestNewsImage' /></Link>
      <Link to={`/${secondaryStory.tags[0].slug}/${secondaryStory.slug}`}><h2>{secondaryStory.title}</h2></Link>
      </div>
    </SecondaryStoryDiv>
  )
};

export default SecondaryStory;
