import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const BioBottomDiv =styled.div` 

.bioElementEntryDiv{
  width:1100px;
  margin:0 auto; 
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
}
.bioElementEntryDiv div:nth-child(1){
  grid-column: span 2;
  margin-bottom:0;
  padding:0;
}
.bioElementEntryDiv p:nth-child(2){
  grid-column: span 2;
  font-size:20px;
  margin-top:0px;
  margin-bottom:0;
}

`
const BioElementsBottomDiv =(props)=>{
  return(
    <BioBottomDiv>
      {props.children}
    </BioBottomDiv>
  )
}

export default BioElementsBottomDiv;