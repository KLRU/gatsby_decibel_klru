import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';
import Container from '../Container/Container';

const HeroDiv= styled.div`
    margin:0;
    display:grid;
    grid-template-columns: 70% 1fr;
    grid-gap:1px;
    .topImageDiv{
      height:100%;
      position:relative;
      a{
        color:#000;
      }
      img{
        width:100%;
        height:100%;
      }
      h2{
        position: absolute;
        margin-top: -55px;
        padding-left: 5px;
        font-size: 30px;
        
      }
    }
    .topImageDiv:nth-child(1){
      grid-column: span 1;
      grid-row: span 2;
      height:100%;
    }
    .sidePostDiv{
      display:grid;
      img{
        width:100%;
        height:100%;
      }
      h2{
        margin:0;
      }
    }
`

const MainStory = props => {
  const mainStory = props;
  console.log(mainStory);
  return(
    <Container>
      <Link to={`/${mainStory.slug}/`}><img src={`http:${mainStory.heroImage.fluid.src}`} alt={mainStory.heroImage.title} className='latestNewsImage' /></Link>
      <Link to={`/${mainStory.slug}/`}><p>{mainStory.title}</p></Link>
    </Container>
  )
}

export default MainStory;
