import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const TagCardDiv= styled.div`
  width: 300px;
  max-height: 300px;
  position: relative;
  img {
    width: 300px;
    height: 200px;
  }
  p {
    margin: 0;
    margin-top: -40px;
    width: 100%;
    padding-left: 10px;
    position: absolute;
    color: #fff;
    font-size: 20px;
    background-color: #000;
  }
`
const TagCards = props => {
  return (
    <TagCardDiv>
      <img src={props.heroImage.fluid.src}/>
      <Link to={`/${props.tag}/${props.slug}`}><p>{props.title}</p></Link>
    </TagCardDiv>
  )
};

export default TagCards;
