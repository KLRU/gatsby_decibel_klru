import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import Facebook from '../../images/facebook.svg'
import Instagram from '../../images/instagram.svg'
import Twitter from '../../images/twitter.svg'

const FooterDiv = styled.div`
  display:grid;
  margin:0;
  width:100%;
  min-height: 200px;
  padding-top: 20px;
  background-color: #000;
  color:#fff;
  //grid-template-columns: 1fr 1fr 1fr;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  text-align:center;
  a{
    color:#fff;
  }
  ul{
    margin-block-start:0;
    padding-left:0;
    a{
      img{
        width: 40px;
        padding:10px;
      }
    }
  }
`

const Footer = props => {
  return (
    <FooterDiv>
      <div>
        <h3>Contact Us</h3>
        <p>email us at <a>news@klru.org</a></p>
        <ul>
          <a href='https://www.facebook.com/decibelatx/'><img src={Facebook} alt='Facebook' className='facebookLogo' /></a>
          <a><img src={Instagram} alt='Instagram' className='instagramLogo' /></a>
          <a><img src={Twitter} alt='Twitter' className='TwitterLogo' /></a>
        </ul>
      </div>
      <div>
        <h3>About Us</h3>
      </div>
      <div>
        <h3>KLRU</h3>
        </div>
    </FooterDiv>
  )
};

export default Footer;
