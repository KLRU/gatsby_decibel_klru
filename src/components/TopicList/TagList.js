import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const List= styled.ul`
  margin:0;
  margin-top:115px;
  display: block;
  position:absolute;
  width: 40%;
  z-index:500;
  right:0px;
  box-shadow: 0px 1px 3px 2px rgba(0, 57, 70, .25);
  padding-inline-start: 0;
  @media screen and (max-width: 750px){
    margin-top: 0px;
    width:100%;
  }

`

const TagList = props =>{
  return(
  <List id='topicsDiv'>{props.children}</List>
  // <List>
  //   {props.tags.map(tag =>(
  //     <li key={tag.id}>
  //       <Link to={`/${tag.slug}`}>{tag.title}</Link>
  //     </li>
  //   ))}
  // </List>
  )
};

export default TagList;
