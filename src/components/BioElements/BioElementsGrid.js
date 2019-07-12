import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const BioElementsWrapper = styled.div`
display:grid;
margin: 0 auto;
grid-template-columns: 1fr;
`
const BioElementsGridDiv = styled.div`

`

const BioElementsGrid = props  =>{
  return( 
     <BioElementsWrapper>
      {props.children}
    </BioElementsWrapper>
  )
}

export default BioElementsGrid