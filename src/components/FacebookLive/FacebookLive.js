import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components'

const FacebookLiveDiv =styled.div`
width:70%;
margin: 10px auto;
padding:20px;
border: 1px solid #003946;
//position:relative
.iframeDiv{
  width:100%; 
  height:0;
  padding-bottom:56.25%;
  position:relative;
}
iframe{
  position:absolute;
  width:100%;
  height:100%;
  border:none;
}
`

const FacebookLive = props =>{
  const facebookLive = props
  function FacebookIsLive(){
    if (facebookLive.isLive === true){
      return <iframe src={facebookLive.iFrameSrc}></iframe>
    }else{
      return null;
    }
  }
  return(
    <FacebookLiveDiv>
      <div className='iframeDiv'>
      <FacebookIsLive />
      </div>
    </FacebookLiveDiv>
  )
}

export default FacebookLive;