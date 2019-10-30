import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const BioItemDiv= styled.div`
  width:100%;
  border: 1px solid #ccc;
  padding:10px;
  margin:10px;
  img{
    width:100%;
  }

`
const BioItem = props => {
  return (
    <BioItemDiv>
      <h2>{props.bioName}</h2>
      <img src={props.bioImage.file.url} alt={props.bioName} />
      <p dangerouslySetInnerHTML={{__html:props.bioText.childMarkdownRemark.html}}></p>
   </BioItemDiv> 
  )
};

export default BioItem;