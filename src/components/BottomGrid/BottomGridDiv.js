import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const BottomGrid = styled.div`
display:grid;
width:1150px;
margin: 0 auto;
grid-template-columns: 75% 25%;
`

const BottomGridDiv = props  =>{
  return(
    <BottomGrid>
      {props.children}
    </BottomGrid>
  )
}

export default BottomGridDiv