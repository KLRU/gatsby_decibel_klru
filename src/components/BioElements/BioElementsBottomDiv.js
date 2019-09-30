import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const BioBottomDiv =styled.div` 
  width:100%;
  margin:10px auto; 
  display:grid;
  //grid-template-columns: repeat(2, 1fr);
  //grid-template-columns: repeat(minmax(250px, max-content));

`
const BioElementsBottomDiv =(props)=>{
  return(
    <BioBottomDiv>
      {props.children}
    </BioBottomDiv>
  )
}

export default BioElementsBottomDiv;