import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import Logo from '../../images/DesktopLoGo200px.png'

const HeaderMainDiv = styled.div`
  display:grid;
  grid-template-columns: 1fr 3fr;
  .navDiv{
    display:grid;
    align-content:start;
    a{
      padding:10px;
    }
  }
`


const Header =()=> {
  return(
    <HeaderMainDiv className="headerMainDiv">
      <div className="logoDiv">
      <img src={Logo} alt='Logo' />
      </div>
      <div className="navDiv">
      <Link to={'/about'}>About Us</Link>
      <Link to={'/topics'}>Topics</Link>
      </div>
  </HeaderMainDiv>
  )
}

export default Header