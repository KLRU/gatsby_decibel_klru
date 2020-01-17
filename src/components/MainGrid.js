import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const MainGridDiv = styled.div`
  width:100%;
  display:grid;
  box-sizing:border-box;
  grid-template-columns: 70% 30%;
  //grid-template-columns: repeat(auto-fill, minmax(700px, 1fr));
  margin: 0 auto;
  @media screen and (max-width: 750px){
    grid-template-columns: 1fr;
  }
  section{
    padding-right:20px;
    display:grid;
    grid-row-gap:30px;
    grid-auto-rows: minmax(300px, auto);
    @media screen and (max-width: 750px){
      grid-template-columns: 1fr;
      padding:0;
    }
  }
  aside{
    display:grid;
    grid-row-gap:30px;
    grid-auto-rows: minmax(300px, auto);
    padding: 0 20px;
    border-left: 1px solid rgba(0, 57, 70, .25);
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