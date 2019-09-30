import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const TagCardContainerDiv = styled.div`
  width:100%;
  margin:20px auto;
`


const TagCardContainer = (props) => {
  return(
    <TagCardContainerDiv>{props.children}</TagCardContainerDiv>
  )
}

export default TagCardContainer;