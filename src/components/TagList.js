import React from 'react';
//import { Link } from 'gatsby';
import styled from 'styled-components';

const List= styled.ul`
  display:inline-block;
  a{
     color: #CF2C09  ;
  }
  li{
    padding:10px;
    display:inline-block;
    font-size: 20px;
    
  }
`

const TagList = props => {
  return (
    <List>{props.children}</List>
  )
};

export default TagList;
