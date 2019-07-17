import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// const BioElementsGridDiv = styled.div`
//   width: 1150px;
//   display:igrid;
// `

const BioElementsWrapper = styled.div`
margin: 0 auto;
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