import React from 'react'
//import { Link } from 'gatsby'
import styled from 'styled-components'

const LatestNewsListDiv = styled.div`
margin: 50px 0;
max-width: 100%;
display:grid;
//grid-template-columns: 1fr 1fr 1fr 1fr;
//grid-template-rows: auto;
`

const LatestNewsList = props => {
  return(
    <LatestNewsListDiv>{props.children}</LatestNewsListDiv>
  )
}

export default LatestNewsList