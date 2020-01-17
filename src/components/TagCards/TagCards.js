import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const TagCardDiv= styled.div`
  width: 300px;
  max-height: 300px;
  margin: 10px auto;
  padding:10px;
  border: 1px solid rgba(0, 57, 70, .25);
  box-shadow: 0px 2px 3px rgba(0, 57, 70, .25);
  img {
    width: 300px;
    height: 200px;
  }
  h2 {
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
      <Link to={`/${props.tag}/${props.slug}`}><h2>{props.title}</h2></Link>
    </TagCardDiv>
  )
};

export default TagCards;
