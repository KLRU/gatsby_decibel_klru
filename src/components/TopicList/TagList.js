import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const List= styled.ul`
  margin:0;
  margin-top:60px;
  display: block;
  position:absolute;
  right:25px;

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
