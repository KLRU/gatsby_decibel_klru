import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Highlight } from "react-instantsearch-dom"

const SearchResultDiv =styled.div`
border-bottom: 1px solid rgba(0, 57, 70, .25);
h2{
  margin: 10px 0;
}
a{
  font-family:  'Rubik', sans-serif;
}
div{
  margin: 0;
}
em{
  color: #EEAF30;
  font-weight: bold;
}
`
 
const SearchResults = ({hit}) =>{

  return(
    <SearchResultDiv>
     <h2>
      <Link to={`/${hit.tags[0].slug}/${hit.slug}`}>
        <Highlight hit={hit} attribute='title' />
      </Link>
      </h2> 
      <div>
      <Highlight hit={hit} attribute='body.childMarkdownRemark.excerpt' />
      </div>
    </SearchResultDiv>
  )
}

export default SearchResults;