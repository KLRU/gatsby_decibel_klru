import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const MobileNavDiv = styled.div`
  display:none;


`

const MobileNav = props =>{
  return(
    <MobileNavDiv>
      <h1>I'm a mobile navigation</h1>
    </MobileNavDiv>
  )
}

export default MobileNav;