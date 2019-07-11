import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import TMLogoImage from '../../images/TexasMutual.jpg'

const TMLogo = styled.div`
 margin-top: 50px;
`

const TexasMutual = () =>{
  return(
    <TMLogo>
      <img src={TMLogoImage} alt='TexasMutualLogo' className='texasMuutaLogoImage'/>
    </TMLogo>
  )
}

export default TexasMutual