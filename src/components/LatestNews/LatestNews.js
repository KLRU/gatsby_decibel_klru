import React from 'react';
//import { Link } from 'gatsby';
import styled from 'styled-components';


const LatestNewsDiv = styled.div`
  width: 100%;
  margin: 0;
  display:grid;
  grid-template-columns: 100%;
  @media screen and (max-width: 750px){
    grid-template-columns: 1fr;
  }
`
const LatestNews = props => {
  return(
    <LatestNewsDiv>{props.children}</LatestNewsDiv>
  )
};

export default LatestNews;
