import React from 'react';
//import { Link } from 'gatsby';
import styled from 'styled-components';


const LatestNewsDiv = styled.div`
  width: 1150px;
  margin: 0 auto;
  display:grid;
  grid-template-columns: 70% 30%;

`
const LatestNews = props => {
  return(
    <LatestNewsDiv>{props.children}</LatestNewsDiv>
  )
};

export default LatestNews;
