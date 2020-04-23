import React from 'react'
import styled from 'styled-components'

const List= styled.ul`
  margin:0;
  margin-top:10px;
  display: block;
  //position:absolute;
  width: 100%;
  z-index:500;
  //right:15%;
  //box-shadow: 0px 1px 3px 2px rgba(0, 57, 70, .25);
  padding-inline-start: 0;
  @media screen and (max-width: 1150px){
    right: 25%;
  }
  @media screen and (max-width: 850px){
    margin-top: 0px;
    width:100%;
    right:0;
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
