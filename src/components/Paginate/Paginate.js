import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const PaginateDiv = styled.div`
width:100%;
position:relative;
display:flex;
flex-direction: row;
justify-content: space-between;
.nextBtn{
  right: 0;
  position:absolute;
}
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
        <span className='nextBtn'><Link to={nextPagePath}>Next</Link></span>
      )}
    </PaginateDiv>
  )
}

export default Pagination;