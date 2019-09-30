import React from 'react'
//import { Link } from 'gatsby'
import styled from 'styled-components'

const LatestNewsListDiv = styled.div`
margin: 50px auto;
max-width: 100%;


`

const LatestNewsList = props => {
  return(
    <LatestNewsListDiv>{props.children}</LatestNewsListDiv>
  )
}

export default LatestNewsList