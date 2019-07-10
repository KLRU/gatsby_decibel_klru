import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const List= styled.ul`
  margin:0;
  position:absolute;
  bottom:0;
  right:25px;

`

const TagList = props =>{
  return(
  <List>{props.children}</List>
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
