import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';


const BioGridDiv= styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
  justify-items:center;
`
const BioGrid = props => {
  return (
    <BioGridDiv>
     {props.children}
   </BioGridDiv> 
  )
};

export default BioGrid;