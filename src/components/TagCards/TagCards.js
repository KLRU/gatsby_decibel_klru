import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const TagCardDiv= styled.div`
  width: 300px;
  max-height: 300px;
  padding:10px;
  border: 1px solid #545252;
  img {
    width: 300px;
    height: 200px;
  }
  p {
    margin: 0;
    margin-top: 10px;
    width: 100%;
    padding-left: 0px;
    color: #000;
    font-size: 20px;
   
  }
`
const TagCards = props => {
  return (
    <TagCardDiv>
      <img src={props.heroImage.fluid.src} alt={props.heroImage.title} />
      <Link to={`/${props.tag}/${props.slug}`}><p>{props.title}</p></Link>
    </TagCardDiv>
  )
};

export default TagCards;
