import React from 'react'
//import {Link} from 'gatsby'
import styled from 'styled-components'



const TagCardDiv= styled.div`
    width:300px;
    max-height:300px;
    position:relative;
    img{
      width:300px;
      height:250px;
    }
    p{
      margin:0;
      margin-top:-40px;
      width:100%;
      padding-left:10px;
      position:absolute;
      color:#000;
      font-size:20px;
      background-color:#9899994b;
    }
`
const TagCards = props =>{
  return(
    <TagCardDiv>{props.children}</TagCardDiv>
  )
}

export default TagCards