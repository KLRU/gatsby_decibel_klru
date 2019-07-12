import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import Logo from '../../images/DesktopLoGo200px.png'

const HeaderMainDiv = styled.div`
  display:grid;
  z-index: 2;
  border-bottom: 1px solid #ccc;
  box-shadow: 0px 2px 3px #eee;
  grid-template-columns: 1fr 3fr;
  .logoImage{
    width: 125px;
    padding-left:50px;
  }
  .linksDiv{
    display:grid;
    .navDiv{
    text-align:end;
    a{
      padding:10px;
      padding:25px;
      margin-top: 40px;
      font-size: 1.5rem;
      color: rgb(44, 43, 43);
    }
  }
  .topicsDiv{
    display:inline;
    text-align: start;
    align-items: start;
    position:relative;
    a{
      color: #000
      text-decoration:none;
      display:inline-block;
      padding: 10px;
   }
  }
  }
  
`


const Header =(props)=> {
  return(
    <HeaderMainDiv className="headerMainDiv">
      <div className="logoDiv">
      <Link to={'/'}><img src={Logo} alt='Logo' className='logoImage' /></Link>
      </div>
      <div className='linksDiv'>
      <div className="navDiv">
      <Link to={'/about'}>About Us</Link>
      
      </div>
      <div className='topicsDiv'>
        {props.children}
      </div>
      </div>
  </HeaderMainDiv>
  )
}

export default Header