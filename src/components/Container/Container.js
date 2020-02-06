import React from 'react';
//import {Link} from 'gatsby'
import styled from 'styled-components'

const ContainerDiv = styled.div`
margin: 0 auto;
top:0%;
//max-width: 1200px;
width:100%;
display:grid;
`

const Container = props => {
  return (
    <ContainerDiv>
      {props.children}
    </ContainerDiv>
  )
}

export default Container;