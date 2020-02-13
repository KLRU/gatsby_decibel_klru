import React from 'react'
import { navigate, Link } from 'gatsby'
import styled from 'styled-components'

const PaginateDiv = styled.div`
width:100%;
display:grid;
justify-items: end;
span{
  padding: 10px;
  a{
    width:100%;
    padding: 10px;
    background-color:#003946;
    color:#fff;
    font-size: 18px;
    border-radius: 5px;
  }
  a:hover {
    background-color: #009AA6;
  }
}

`


const Pagination = ({pageContext}) =>{
  const {previousPagePath, nextPagePath} = pageContext;
  return(
    <PaginateDiv>
      {previousPagePath && (
        <span><Link to={previousPagePath}>Previous</Link></span>
      )}
      {nextPagePath && (
        <span><Link to={nextPagePath}>Next</Link></span>
      )}
    </PaginateDiv>
  )
}

export default Pagination;