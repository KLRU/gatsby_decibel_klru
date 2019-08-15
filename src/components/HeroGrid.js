import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const HeroGridDiv = styled.div`
  width:1150px;
  margin: 0 auto;
  
`

const HeroGrid = (props) =>{
  return(
    <HeroGridDiv>
      {props.children}
    </HeroGridDiv>
  )
}

export default HeroGrid