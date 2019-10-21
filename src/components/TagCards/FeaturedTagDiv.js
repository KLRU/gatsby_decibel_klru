import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const FeaturedTagCardDiv= styled.div`
  width:100%;
  margin:0 auto;
  border: 1px solid #E7E9E9;
  box-shadow: 0px 2px 3px #eee;
  padding:5px;
  display:grid;
  grid-template-columns: 70% 30%;
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
  return (
    <FeaturedTagCardDiv>
      {/* <img src={props.heroImage.fluid.src} alt={props.heroImage.title} />
      <Link to={`/${props.tag}/${props.slug}`}><p>{props.title}</p></Link> */}
      {props.children}
    </FeaturedTagCardDiv>
  )
};

export default FeaturedTagDiv;
