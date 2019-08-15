import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Container from '../Container/Container';


const SecondaryStoryDiv = styled.div`
  display:grid;
  border: 1px solid #E7E9E9;
  box-shadow: 0px 2px 4px #eee;
  img{
    width:550px;
    height:300px;
    position:relative;
  }
  .secondaryTitle{
     h2{
    margin-top: 5px;
    margin-bottom: 5px;
    color:#000;
    padding-left:5px;
  }
  p{
    margin-top: 5px;
    margin-bottom: 5px;
    color:#000;
    padding-left:5px;
  }
  }
 
`
const SecondaryStory = props => {
  const secondaryStory = props;
  return (
   
    <SecondaryStoryDiv>
      <div>
      <Link to={`/${secondaryStory.tags[0].slug}/${secondaryStory.slug}`}><img src={`http:${secondaryStory.heroImage.fluid.src}`} alt={secondaryStory.heroImage.title} className='latestNewsImage' /></Link>
      <Link to={`/${secondaryStory.tags[0].slug}/${secondaryStory.slug}`}><div className='secondaryTitle'><h2>{secondaryStory.title}</h2>
      <p>{secondaryStory.publishDate}</p></div></Link>
      </div>
    </SecondaryStoryDiv>

  )
};

export default SecondaryStory;
