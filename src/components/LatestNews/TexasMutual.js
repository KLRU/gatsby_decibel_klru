import React from 'react';
import TexasMutualLogo from '../../images/TexasMutual.jpg'
import {Link} from 'gatsby'
import styled from 'styled-components'

const TexasMutualDiv = styled.div`
  display:grid;
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
      display: grid;
      background-color: #fff;
      border: 1px solid rgba(0, 57, 70, .25);
      align-items: center;
      grid-template-columns: 30% 70%;
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
         <div className='sponsorDiv'>
         <a href={`${sponsorship.sponsorLink}`}><img src={`http:${sponsorship.image.fluid.src}`} alt='TMLogo' className='logoImage' /></a>
         <h4>{sponsorship.sponsorTitle}</h4></div>
       ))}

      </div>
    </TexasMutualDiv>
  )
}

export default TexasMutual