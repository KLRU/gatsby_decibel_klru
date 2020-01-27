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
    a{
      img{
        margin-bottom: 20px;
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
       {/* <h2>Decibel is Sponsored By:</h2> */}
       {sponsorships.map((sponsorship)=>(
         <a href={`${sponsorship.sponsorLink}`}><img src={`http:${sponsorship.image.fluid.src}`} alt='TMLogo' className='logoImage' /></a> 
       ))}

      </div>
    </TexasMutualDiv>
  )
}

export default TexasMutual