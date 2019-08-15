import React from 'react';
import TexasMutualLogo from '../../images/TexasMutual.jpg'
import {Link} from 'gatsby'
import styled from 'styled-components'

const TexasMutualDiv = styled.div`
  display:grid;
  justify-items:center;
`
const TexasMutual = (props) =>{
  return(
    <TexasMutualDiv>
      <a href='https://www.texasmutual.com/'><img src={TexasMutualLogo} alt='TMLogo' className='logoImage' /></a>
    </TexasMutualDiv>
  )
}

export default TexasMutual