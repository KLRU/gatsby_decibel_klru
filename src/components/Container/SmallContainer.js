import React from 'react';
//import {Link} from 'gatsby'
import styled from 'styled-components'

const SmallContainerDiv = styled.div`
width:100%;
max-width: 1200px;
min-height: 100vh;
margin: 0 auto;
padding:5px;
display:grid;
`

const SmallContainer = props => {
  return (
    <SmallContainerDiv>
      {props.children}
    </SmallContainerDiv>
  )
}

export default SmallContainer;