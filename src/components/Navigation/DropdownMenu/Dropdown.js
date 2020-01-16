import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const DropDownDiv = styled.div`
display: grid;
height: 100%;
align-content:end;
justify-content:end;
//position: relative;
//z-index:100;
`

const DropDownList = styled.div`
//width: 30%;
//position: absolute;
//height: 100%;
max-width:400px;
background: #ccc;
//margin-top: 125px;
margin-right: 0;
padding:10px;
a{
  color: #000
  text-decoration:none;
  display:block;
  padding: 10px;
  background-color: #fff;
  z-index: 100;
  text-align:center;
}

`

const DropDownMenu = props => {
  return(
    <DropDownDiv>
      <DropDownList>
        {props.children}
      </DropDownList>
    </DropDownDiv>
  )
}

export default DropDownMenu