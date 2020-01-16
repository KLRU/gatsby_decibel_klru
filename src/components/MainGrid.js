import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const MainGridDiv = styled.div`
  width:100%;
  display:grid;
  grid-template-columns: 70% 30%;
  //grid-template-columns: minmax(min-content, 500px) 1fr;
  margin: 0 auto;
  @media screen and (max-width: 750px){
    grid-template-columns: 1fr;
  }
  section{
    padding-right:20px;
    @media screen and (max-width: 750px){
      grid-template-columns: 1fr;
      padding:0;
    }
  }
  aside{
    padding: 0 20px;
    border-left: 1px solid #003946;
    @media screen and (max-width: 750px){
      grid-template-columns: 1fr;
      padding:0;
      border-left:none;
    }
  }
  
`

const MainGrid = (props) =>{
  return(
    <MainGridDiv>
      {props.children}
    </MainGridDiv>
  )
}

export default MainGrid