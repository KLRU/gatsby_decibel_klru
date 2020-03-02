import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components'
//import ContentfulVideoElement from '../PageElements/ContentfulVideoElement';

const FacebookLiveDiv =styled.div`
width:100%;
margin: 1px auto;
padding:10px;
border: 5px solid #EEAF30;
h2{
  text-align:center;
}
//position:relative
// .iframeDiv{
//   width:100%; 
//   height:0;
//   padding-bottom:56.25%;
//   position:relative;
// }
// iframe{
//   position:absolute;
//   width:100%;
//   height:100%;
//   border:none;
// }
`

const FacebookLive = props =>{
  const facebookLive = props
  function FacebookIsLive(){
    if (facebookLive.isLive === true){
      return  <FacebookLiveDiv><Link to={`/${props.post.tags[0].slug}/${props.post.slug}`}><h2>{props.title}</h2></Link></FacebookLiveDiv>
      // <div className='iframeDiv'><ContentfulVideoElement {...facebookLive.videoLink}/></div>
    }else{
      return null;
    }
  }
  return(
    
     
      <FacebookIsLive />
      
    
  )
}

export default FacebookLive;