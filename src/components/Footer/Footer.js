import React from 'react'
//import {Link} from 'gatsby'
import styled from 'styled-components'
import Facebook from '../../images/facebook.svg'
import Instagram from '../../images/instagram.svg'
import Twitter from '../../images/twitter.svg'
import YouTube from '../../images/YouTubeWhite.svg'
import AustinPBS from '../../images/AustinPBSWhiteandBlack.png'
import DecibelWhiteLOGO from '../../images/Decibel-Logo-AustinPBS-White.png'

const FooterDiv = styled.div`
  display:grid;
  margin:50px 0 0 0;
  width:100%;
  min-height: 200px;
  padding-top: 20px;
  background-color: #003946;
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
    display: flex;
    justify-content:center;
    a{
      img{
        width: 50px;
        padding: 10px;
      }
    }
  }
  .farRight{
    width:100%;
    display: grid;
    img{
      width:30%;
    }
  }
`

const Footer = props => {
  return (
    <FooterDiv>
      <div  id="social">
        <h3>Contact Us</h3>
        <p>Email us at <a href="mailto:news@klru.org">news@klru.org</a> </p>
        <ul>
          <li><a href='https://www.facebook.com/decibelatx/'><img src={Facebook} alt='Facebook' className='facebookLogo' /></a></li>
          <li><a href="https://www.instagram.com/decibelatx"><img src={Instagram} alt='Instagram' className='instagramLogo' /></a></li>
          <li><a href='https://twitter.com/decibelatx'><img src={Twitter} alt='Twitter' className='TwitterLogo' /></a></li>
          <li><a href='https://www.youtube.com/channel/UCwBje-YSCdcn6c2LaLy3hLQ'><img src={YouTube} alt='YouTube' className='YouTubeLogo'/></a></li>
        </ul>
      </div>
      <div>
        <a href ='/'><h3>DECIBEL ATX</h3></a>
        <a href ='/about'><h3>About Us</h3></a>
        <a href ='/topics'><h3>Topics</h3></a>
        <a href ='/search'><h3>Search</h3></a>
      </div>
      <div className='farRight'>
        <a href ="/"><img src={DecibelWhiteLOGO} alt='Decibel Logo White'/></a>
        {/* <a href='https://www.austinpbs.org'><h3>AustinPBS, KLRU-TV</h3></a> */}
        <a href='https://www.austinpbs.org'><img src={AustinPBS} alt='AustinPBS Homepage Link' className='AustinPBSLogo' /></a>
      </div>
    </FooterDiv>
  )
};

export default Footer;
