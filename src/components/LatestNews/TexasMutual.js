import React from 'react';
//import TexasMutualLogo from 'https://klru-images.s3.amazonaws.com/decibel/texas-mutual-banner.jpg'
//import RoxanneElder from '../../images/RoxanneElderScottBorders-grey-stacked.png'
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
      box-shadow: 0px 1px 3px rgba(0, 57, 70, .1);
      align-items: center;
      //grid-template-columns: 30% 70%;
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
      background-color:#003946 ;
      color:#000;
      font-size: 18px;
      border-radius: 5px;
      border: 1px solid #ccc;
      box-shadow: 1px 1px 2px #ccc;
      a{
        color:#fff;
        font-size: 24px;
        width:100%;
      }
      a: hover{
        color: #fff;
      }
    }
    button: hover{
      background-color:#009AA6;
      color:#fff;
    }
   
  }
`
const TexasMutual = (props) =>{
  //const sponsorList = props;
  //const sponsorships = sponsorList.sponsors;
  return(
    <TexasMutualDiv>
      <div>
       {/* <h2>Decibel is Sponsored By:</h2> */}
       {/* {sponsorships.map((sponsorship)=>(
           <OutboundLink href={`${sponsorship.sponsorLink}`}><div className='sponsorDiv' key={sponsorship.id}>
       <img src={`https:${sponsorship.image.fluid.src}`} alt='TMLogo' className='logoImage' />
         <h4>{sponsorship.sponsorTitle}</h4></div></OutboundLink>
       ))} */}
       {/* <OutboundLink href="https://www.texasmutual.com/employers/pr/driver-safety?utm_source=KLRU-Decibel&utm_medium=digital&utm_c
ampaign=BIB-Driver-Safety&utm_id=BIB-Driver-Safety"><div className='sponsorDiv'><img src="https://klru-images.s3.amazonaws.com/decibel/250x250-EN-TXM-Driver-Safety-static.jpg" alt='Texas Mutual Insurance' className='logoImage' /></div></OutboundLink>
       <div className='sponsorDiv'><img src={RoxanneElder} alt='Roxanne Elders and Scott Borders' className='logoImage' /></div> */}

      <h2>Support Decibel</h2>
      <button><OutboundLink href="https://austinpbs.org/donate/?utm_campaign=decibel&utm_source=website&utm_medium=whatcanido">Donate</OutboundLink></button>
      {/* <button><OutboundLink href="http://bycell.co/wjtf">Donate</OutboundLink></button> */}
      </div>
    </TexasMutualDiv>
  )
}

export default TexasMutual