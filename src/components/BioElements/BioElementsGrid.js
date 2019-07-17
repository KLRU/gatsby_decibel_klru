import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// const BioElementsGridDiv = styled.div`
//   width: 1150px;
//   display:igrid;
// `

const BioElementsWrapper = styled.div`
margin: 0 auto;
border: 1px solid #E7E9E9;
box-shadow: 0px 2px 3px #eee;
padding:10px;
  img{
    width:100%;
  }
`


const BioElementsGrid = props  =>{
  return( 
     <BioElementsWrapper>
      {props.children}
    </BioElementsWrapper>
  )
}

export default BioElementsGrid