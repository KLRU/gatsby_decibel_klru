import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const TagCardContainerDiv = styled.div`
  width:1150px;
  margin:0 auto;
`


const TagCardContainer = (props) => {
  return(
    <TagCardContainerDiv>{props.children}</TagCardContainerDiv>
  )
}

export default TagCardContainer;