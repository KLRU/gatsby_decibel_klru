import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const List= styled.ul`
  padding-left:0;
  a{
     color: #000
     text-decoration:none;
     display:inline-block;
     padding: 10px;
  }
  h2{
    font-weight:normal;
  }
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
