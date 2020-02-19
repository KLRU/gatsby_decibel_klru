import React from 'react'
//import {Link} from 'gatsby'
import styled from 'styled-components'

const HeroGridDiv = styled.div`
  width:100%;
  display:grid;
  margin: 0 auto;
  // @media only screen and (max-width: 1170px){
  //   width:900px;
  //   margin: 0 auto;
  // }
  
`

const HeroGrid = (props) =>{
  return(
    <HeroGridDiv>
      {props.children}
    </HeroGridDiv>
  )
}

export default HeroGrid;