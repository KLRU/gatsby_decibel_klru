import React from 'react';
//import TexasMutualLogo from '../../images/TexasMutual.jpg'
//import {Link} from 'gatsby'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-gtag'



const TexasMutualDiv = styled.div`
  display:grid;
  width:100%;
  justify-items:center;
  padding-top:10px;
  .logoImage{
    width:100%;
  }
  div{
    h2{
      text-align:center;

    }
    .sponsorDiv{
      box-sizing: border-box;
      display: grid;
      background-color: #fff;
      border: 1px solid rgba(0, 57, 70, .25);
      box-shadow: 0px 2px 3px rgba(0, 57, 70, .1);
      align-items: center;
      grid-template-columns: 30% 70%;
      padding:10px;
      margin-top: 10px;
      h4{
        text-align: center;
      }
      a{
        width:100%
        img{
          margin:0px;
          width:100%;
        }
      }
    }
    button{
      width:100%;
      background-color:#009AA6;
      color:#fff;
      font-size: 18px;
      border-radius: 5px;
      a{
        color:#fff;
        font-size: 24px;
      }
    }
    button: hover{
      background-color:#003946;
    }
   
  }
`
const TexasMutual = (props) =>{
  const sponsorList = props;
  const sponsorships = sponsorList.sponsors;
  return(
    <TexasMutualDiv>
      <div>
       <h2>Decibel is Sponsored By:</h2>
       {sponsorships.map((sponsorship)=>(
           <OutboundLink href={`${sponsorship.sponsorLink}`}><div className='sponsorDiv' key={sponsorship.id}>
       <img src={`https:${sponsorship.image.fluid.src}`} alt='TMLogo' className='logoImage' />
         <h4>{sponsorship.sponsorTitle}</h4></div></OutboundLink>
       ))}
      <h2>Support Decibel</h2>
      <button><OutboundLink href="https://austinpbs.org/donate">Donate</OutboundLink></button>
      {/* <button><OutboundLink href="http://bycell.co/wjtf">Donate</OutboundLink></button> */}
      </div>
    </TexasMutualDiv>
  )
}

export default TexasMutual