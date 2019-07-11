import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const FeaturedTagCardDiv= styled.div`
  min-width:650px;
  margin:0 auto;
  border: 1px solid #545252;
  padding:20px;
  img{
    width:100%;
    position:relative;
  }
  p{
    position:absolute;
    color:#FFF;
    margin-top: -40px;
    font-size: 25px;
    padding-left: 10px;
  }
`
const FeaturedTagDiv = props => {
  return (
    <FeaturedTagCardDiv>
      {/* <img src={props.heroImage.fluid.src} alt={props.heroImage.title} />
      <Link to={`/${props.tag}/${props.slug}`}><p>{props.title}</p></Link> */}
      {props.children}
    </FeaturedTagCardDiv>
  )
};

export default FeaturedTagDiv;
